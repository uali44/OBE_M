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
        Task<List<GetIntakeForSelectedProgram>> GetDepartmentPrograms(long DepartmentID);
        Task<List<GetIntakeForSelectedProgramResponse>> GetProgramIntakes(long ProgramId);
        Task<List<GetAllSemester>> GetAllSemester();
        Task<List<GetIntakeStudentsResponse>> GetIntakeStudents(long Department_ID);
        Task<List<GetCourseResponse>> GetCQILevelCourses(GetFacultyMembersRequest Request);
        Task<bool> DeleteStudentFromCourse(long Request);
        Task<List<FacultyMembersResponse>> getFacultyMember(string Request);
    }
}
