using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.CourseSearch
{
    public class CourseSearchModels
    {
        public int InstituteID { get; set; }
        public string InstituteName { get; set; }
        public string InstituteShortName { get; set; }
        public string InstituteAlias { get; set; }
    }
    public class Deparments
    {
        public int DepartmentID  { get; set; }
        public string DepartmentName { get; set; }
    }
    public class FacultyMembers
    {
        public int FacultyMemberID { get; set; }
        public string Name { get; set; }
    }
    public class DepartmentDeanRequest
    {
        public long InstituteID { get; set; }
        public long FacultyMemberID { get; set; }
    }
    public class GetFacultyMembersRequest
    {
        public long Department_ID { get; set; }
        public long Semester_ID { get; set; }
    }
    public class GetIntakeForSelectedDepartment
    {
        public int AdmissionOpenProgramID { get; set; }
        public string semesterAlia { get; set; }
    }
    public class GetProgramsForSelectedDepartment
    {
        public int ProgramID { get; set; }
        public string ProgramName { get; set; }
    }
    public class getstatus
    {
        public int userStatus { get; set; }
    }
    public class GetAllSemester
    {
        public int SemesterID { get; set; }
        public string semesterAlia { get; set; }
    }
    public class GetIntakeStudentsResponse
    {
        public int StudentID { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
    }
    public class GetCourseResponse
    {
        public int OfferedCourseID { get; set; }
        public string Title { get; set; }
    }

    public class FacultyMembersResponse
    {
        public int FacultyMemberID { get; set; }
        public string Name { get; set; }
        public string username { get; set; }
    }

}
