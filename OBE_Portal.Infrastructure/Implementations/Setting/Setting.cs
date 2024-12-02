using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.CourseCLOS;
using OBE_Portal.Core.Entities.CourseSearch;
using OBE_Portal.Core.Entities.Setting;
using OBE_Portal.Infrastructure.Implementations.SMTP_Services;
using OBE_Portal.Infrastructure.Interfaces.Password;
using OBE_Portal.Infrastructure.Interfaces.Setting;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.Setting
{
    public class Setting : ISetting
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher _password;

        public Setting(ApplicationDbContext context, IPasswordHasher password)
        {
            _context = context;
            _password = password;
        }
        async Task<bool> ISetting.EnableExitSurveyForSelctedIntake(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Enabled_Exit_Survey_Form_For_Students @AdmissionOpenProgramID",
                        AdmissionOpenProgramID);

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<dynamic> ISetting.getUserForUpdates(GetUserRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var userName = new SqlParameter("@userName", Request.userName);
                    List<GetUserResponse> getUsers = await _context.Set<GetUserResponse>().FromSqlInterpolated($"EXEC GET_USER_FOR_PASSWORD_UPDATES {userName}").ToListAsync();
                    List<Roles> roles = await _context.Set<Roles>().FromSqlInterpolated($"EXEC GET_ROLES").ToListAsync();
                    var respone = new
                    {
                        users = getUsers,
                        roles = roles
                    };
                    return respone;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> ISetting.updatePassword(UpdatePasswordRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request.FacultyMemberID);
                    var Password = new SqlParameter("@Password", _password.GenerateIdentityV3Hash(Request.Password));
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
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ISetting.updateRole(UpdateRoleRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request.facultyId);
                    var role = new SqlParameter("@role", Request.role);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Faculty_Role @FacultyMemberID,@role", FacultyMemberID, role);
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
            catch (Exception)
            {
                throw;
            }
        }

    }
}
