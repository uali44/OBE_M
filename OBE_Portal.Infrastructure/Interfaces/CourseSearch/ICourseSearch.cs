using OBE_Portal.Core.Entities.CourseSearch;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.CourseSearch
{
    public interface ICourseSearch
    {
        Task<List<CourseSearchModels>> GetInstitute();
        Task<List<Deparments>> GetDepartment(long InstitueID);
        Task<List<FacultyMembers>> GetFacultyMembersForSelectedDepartmentAndSemester(long Department_ID, long Semester_ID);
        Task<List<GetIntakeForSelectedDepartment>> GetIntakes(long Department_ID);
   
        Task<List<GetAllSemester>> GetAllSemester();
        Task<List<GetIntakeStudentsResponse>> GetIntakeStudents(long Department_ID);

        Task<List<GetCourseResponse>> GetCQILevelCourses(GetFacultyMembersRequest Request);
        Task<bool> DeleteStudentFromCourse(long Request);
        Task<List<FacultyMembersResponse>> getFacultyMember(string Request);
        Task<List<GetProgramsForSelectedDepartment>> GetPrograms(long Department_ID);
    
        Task<List<getstatus>> GetStatus(long FacultyMemberID);
     
        Task<List<CourseSearchModels>> GetInstitutedean(long FacultyMemberID);
        Task<List<Deparments>> GetDepartmentDean(long InstitueID, long facultyMemberID);
        Task<List<GetIntakeForSelectedProgramResponse>> GetProgramIntakes(long ProgramId);
        Task<List<GetIntakeForSelectedProgram>> GetDepartmentPrograms(long DepartmentID);
    }
}
