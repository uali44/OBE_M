using System;
using System.Collections.Generic;
using OBE_Portal.Infrastructure.Interfaces.Login;
using Microsoft.Data.SqlClient;
using OBE_Portal.Core.Entities.Login;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Infrastructure.Interfaces.Password;
using OBE_Portal.Infrastructure.Interfaces.Token;
using System.Threading.Tasks;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using OBE_Portal.Infrastructure.Implementations.SMTP_Services;

namespace OBE_Portal.Infrastructure.Services.Login
{
    public class Login : ILogin
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher _password;
        private readonly IToken _token;
        public Login(ApplicationDbContext context, IPasswordHasher password, IToken token)
        {
            _context = context;
            _password = password;
            _token = token;
        }
        async Task<UserResponse> ILogin.UserAuthentication(User_Credentials_Request request)
        {
            try
            {
                if (!request.IsStudent)
                {
                    var User_Name = new SqlParameter("@USER_NAME", request.Username_Request);
                    var Institute = new SqlParameter("@Institute", request.Institute_Request);
                    List<AuthenticatedUserResponse> getValidEngineeringFaculty = await _context.Set<AuthenticatedUserResponse>().FromSqlInterpolated($"EXEC Sp_Check_For_Valid_And_Engineering_Faculty {User_Name}, {Institute}").ToListAsync();
                    if (getValidEngineeringFaculty.Count > 0)
                    {
                        foreach (var item in getValidEngineeringFaculty)
                        {
                            if (item.IS_ENGINEERING_FACULTY)
                            {
                                if (_password.VerifyIdentityV3Hash(request.Password_Request, item.PASSWORD))
                                {
                                    UserResponse user_Response = new UserResponse();
                                    user_Response.FacultyMemberID = item.FACULTYMEMBERID;
                                    user_Response.DEPARTMENTID = item.DEPARTMENTID;
                                    user_Response.INSTITUTEID = item.INSTITUTEID;
                                    var claims = new[] {
                                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                                    new Claim("Faculty_Member_ID", item.FACULTYMEMBERID.ToString()),
                                };
                                    user_Response.Token = _token.GenerateAccessToken(claims);
                                    user_Response.Semester_ID = item.SEMESTERID;
                                    user_Response.User_Name = item.User_Name;
                                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", item.FACULTYMEMBERID);
                                    List<Permissions> Permissions = await _context.Set<Permissions>().FromSqlInterpolated($"EXEC Sp_Get_User_permission {FacultyMemberID}").ToListAsync();
                                    List<string> perm = new List<string>();
                                    foreach (var item1 in Permissions)
                                    {
                                        perm.Add(item1.Permission_Title);
                                    }
                                    user_Response.All_Permission = perm;

                                    return user_Response;
                                }
                            }
                        }
                    }
                    else
                    {
                        return null;
                    }
                }
                else
                {
                    var Enrollment = new SqlParameter("@Enrollment", request.Username_Request);
                    List<StudentDetails> StudentDetails = await _context.Set<StudentDetails>().
                        FromSqlInterpolated($"EXEC SP_CHECK_FOR_VALID_AND_ENGINEERING_Student {Enrollment}").ToListAsync();
                    if (StudentDetails.Count > 0)
                    {
                        if (_password.VerifyIdentityV3Hash(request.Password_Request, StudentDetails[0].Password))
                        {
                            UserResponse user_Response = new UserResponse();
                            user_Response.StudentID = StudentDetails[0].StudentID;
                            user_Response.ShowExitForm = StudentDetails[0].ShowExitForm;
                            var claims = new[] {
                                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                                    new Claim("Studnet_ID", user_Response.StudentID.ToString()),
                                };
                            user_Response.Token = _token.GenerateAccessToken(claims);
                            user_Response.User_Name = StudentDetails[0].Name;
                            return user_Response;
                        }
                    }
                    else
                    {
                        return null;
                    }
                }


                return null;
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ILogin.ResetPassword(Reset_Password_Request request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (!request.IsStudent)
                    {
                        var User_Name = new SqlParameter("@USER_NAME", request.Username_Request);
                        var Email = new SqlParameter("@Email", request.Email_Request);
                        List<ResetPasswordResponse> getValidEngineeringFaculty = await _context.Set<ResetPasswordResponse>().FromSqlInterpolated($"EXEC SP_CHECK_FOR_VALID_AND_ENGINEERING_FACULTY_For_Reset_Password {User_Name},{Email}").ToListAsync();
                        if (getValidEngineeringFaculty.Count > 0)
                        {
                            if (getValidEngineeringFaculty[0].IS_ENGINEERING_FACULTY)
                            {
                                var claims = new[] { new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()) };
                                var Token = _token.GenerateAccessToken(claims);
                                var URL = request.Url_Request + "Home/ForgotPassword?Token=" + Token;
                                var FACULTYMEMBERID = new SqlParameter("@FACULTYMEMBERID", getValidEngineeringFaculty[0].FACULTYMEMBERID);
                                var User_Token = new SqlParameter("@Token", Token);
                                EmailServices.Send_Email(request.Email_Request, "Reset Password", Email_Body_For_Reset_Password(getValidEngineeringFaculty[0].User_Name, URL));
                                var UpdateToke = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Token_For_Reset_Password @FACULTYMEMBERID,@Token",
                                    FACULTYMEMBERID, User_Token);
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else
                    {
                        var Enrollment = new SqlParameter("@Enrollment", request.Username_Request);
                        List<ResetPasswordStudentResponse> ResetPasswordStudentResponse = await _context.Set<ResetPasswordStudentResponse>().FromSqlInterpolated($"EXEC SP_Check_Valid_ENGINEERING_Student_For_Reset_Password {Enrollment}").ToListAsync();
                        if (ResetPasswordStudentResponse.Count > 0)
                        {
                            var claims = new[] { new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()) };
                            var Token = _token.GenerateAccessToken(claims);
                            var URL = request.Url_Request + "Home/ForgotPassword?Token=" + Token;
                            var StudentID = new SqlParameter("@StudentID", ResetPasswordStudentResponse[0].StudentID);
                            var User_Token = new SqlParameter("@Token", Token);
                            EmailServices.Send_Email(ResetPasswordStudentResponse[0].UniversityEmail, "Reset Password", Email_Body_For_Reset_Password(ResetPasswordStudentResponse[0].Name, URL));
                            var UpdateToke = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Token_For_Reset_Password_Student @StudentID,@Token",
                                StudentID, User_Token);
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }

                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        private string Email_Body_For_Reset_Password(string Name, string Url)
        {
            string body;
            StringBuilder sb = new StringBuilder();
            body = sb.Append("<h4>Hello " + Name + ",</h4>").ToString();
            sb = new StringBuilder();
            body = body + sb.Append("<p>You'll need to click on the following button and complete your reset password process:</p>").ToString();
            sb = new StringBuilder();
            body = body + sb.Append("<h4>Please Click <a href='" + Url + "' target='_blank'>Here</a> for your reset password</h4>").ToString();
            sb = new StringBuilder();
            body = body + sb.Append("Sincerely,<br/>" +
                "OBE Team<br/>" +
                "---------------------------------------------------------------------<br/>" +
                "Please do not reply to this email. This mailbox is not monitored and you will not receive a response.<br/>" +
                "---------------------------------------------------------------------<br/>" +
                "PROTECT YOUR PASSWORD<br/>" +
                "NEVER give your password to anyone. Protect yourself against fraudulent websites by opening a new web browser and typing in the OBE Portal URL every time you log in to your account.<br/>" +
                "---------------------------------------------------------------------</p>").ToString();
            return body;
        }
        async Task<CheckForValidToken> ILogin.CheckForValidToken(string request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Token = new SqlParameter("@Token", request);
                    List<CheckForValidToken> CheckForValidToken = await _context.Set<CheckForValidToken>().FromSqlInterpolated($"EXEC SP_CHECK_FOR_VALID_Token {Token}").ToListAsync();
                    if (CheckForValidToken.Count > 0)
                    {
                        return CheckForValidToken[0];
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<bool> ILogin.UpdatePassword(Reset_Password_Request request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (!request.IsStudent)
                    {
                        var Token = new SqlParameter("@Token", request.Token);
                        var Password = new SqlParameter("@Password", _password.GenerateIdentityV3Hash(request.New_Password));
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Password @Token,@Password", Token, Password);
                        if (response > 0)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else
                    {
                        var Token = new SqlParameter("@Token", request.Token);
                        var Password = new SqlParameter("@Password", _password.GenerateIdentityV3Hash(request.New_Password));
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Password_Student @Token,@Password", Token, Password);
                        if (response > 0)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }

                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
