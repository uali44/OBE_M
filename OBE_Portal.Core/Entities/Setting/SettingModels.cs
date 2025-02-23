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
    public class GetIntakeResponse
    {
        public int AdmissionOpenProgramID { get; set; }
        public string intakeStart { get; set; }
        public string ProgramShortName { get; set; }
        public string DepartmentShortName { get; set; }
        public string InstituteShortName { get; set; }
    }

    public class GetPeosInformationRequest
    {
        public long programId { get; set; }
        public long admissionOpenProgramId { get; set; }
    }

    public class GetPlosInformationRequest
    {
        public long programId { get; set; }
        public long admissionOpenProgramId { get; set; }
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
    public class PeoDeleteRequest
    {
        public long peoId { get; set; }
        public long Modified_By { get; set; }
    }

    public class PloDeleteRequest
    {
        public long ploId { get; set; }
        public long Modified_By { get; set; }
    }

    public class PeosInformationResponse
    {
        public long srNumber { get; set; }
        public long peoId { get; set; } 
        public long peoMainId { get; set; } 
        public string? peoTitle { get; set; }
        public string? peoDescription { get; set; }
    }

    public class PlosInformationResponse
    {
        public long srNumber { get; set; }
        public long PLO_ID { get; set; }
        public string? PLO_Title { get; set; }
        public string? ploDescription { get; set; }
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

    public class SaveAddedPeoRequest
    {
        public long instituteId { get; set; }
        public long departmentId { get; set; }
        public long programId { get; set; }
        public long admissionOpenProgramIdFrom { get; set; }
        public long admissionOpenProgramIdTo { get; set; }
        public string peoTitle { get; set; }
        public string description { get; set; }
        public long Created_By { get; set; }

    }

    public class SaveAddedPloRequest
    {
        public long instituteId { get; set; }
        public long departmentId { get; set; }
        public long programId { get; set; }
        public long admissionOpenProgramIdFrom { get; set; }
        public long admissionOpenProgramIdTo { get; set; }
        public long PLO_ID { get; set; }
        public string PLOTitle { get; set; }
        public string description { get; set; }
        public long Created_By { get; set; }

    }
}
