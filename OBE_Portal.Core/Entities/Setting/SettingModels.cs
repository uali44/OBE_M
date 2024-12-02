using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.Setting
{
    public class SendSurveyFormRequest
    {
        public long Status { get; set; }
        public string Email { get; set; }
        public string RootPath { get; set; }
    }

    public class GetUserRequest
    {
        public string userName { get; set; }
    }

    public class UpdatePasswordRequest
    {
        public int FacultyMemberID { get; set; }
        public string Password { get; set; }
    }

    public class UpdateRoleRequest
    {
        public int role { get; set; }
        public int facultyId { get; set; }
    }

    public class GetUserResponse
    {
        public int FacultyMemberID { get; set; }
        public int UserStatus { get; set; }
        public string? UserName { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? InstituteName { get; set; }
    }
    public class Roles
    {
        public long Role_ID { get; set; }
        public string Role_Title { get; set; }
    }
}
