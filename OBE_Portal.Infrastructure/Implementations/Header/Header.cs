using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.Header;
using OBE_Portal.Infrastructure.Interfaces.Header;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Infrastructure.Interfaces.Password;


namespace OBE_Portal.Infrastructure.Implementations.Header
{
    public class Header : IHeader
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher _password;
        public Header(ApplicationDbContext context, IPasswordHasher password)
        {
            _context = context;
            _password = password;
        }
        async Task<List<HeaderResponse>> IHeader.GetSemesterListBasedOnFaculty(int Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Faculty_Member_ID = new SqlParameter("@Faculty_Member_ID", Request);
                    List<HeaderResponse> getSemesterListForFaculty = await _context.Set<HeaderResponse>().FromSqlInterpolated($"EXEC Sp_Get_Semester_List_Based_On_Faculty {Faculty_Member_ID}").ToListAsync();
                    if (getSemesterListForFaculty.Count > 0)
                    {
                        return getSemesterListForFaculty;
                    }
                    else {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IHeader.UpdatePassword(Reset_Password Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (!Request.IsStudent)
                    {
                        var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request.UserID);
                        List<FacultyPassword> getFacultyPassword = await _context.Set<FacultyPassword>().FromSqlInterpolated($"EXEC SP_Get_Faculty_Member_For_Password_Uption {FacultyMemberID}").ToListAsync();
                        if (_password.VerifyIdentityV3Hash(Request.Current_Password, getFacultyPassword[0].password))
                        {
                            var Password = new SqlParameter("@Password", _password.GenerateIdentityV3Hash(Request.New_Password));
                            var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Password_Faculty @FacultyMemberID,@Password", FacultyMemberID, Password);
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
                            return false;
                        }
                    }
                    else {
                        var StudentID = new SqlParameter("@StudentID", Request.UserID);
                        List<FacultyPassword> getFacultyPassword = await _context.Set<FacultyPassword>().FromSqlInterpolated($"EXEC SP_Get_Faculty_Member_For_Password_Updation_Student {StudentID}").ToListAsync();
                        if (_password.VerifyIdentityV3Hash(Request.Current_Password, getFacultyPassword[0].password))
                        {
                            var Password = new SqlParameter("@Password", _password.GenerateIdentityV3Hash(Request.New_Password));
                            var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Student_Password @StudentID,@Password", StudentID, Password);
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
