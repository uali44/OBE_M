using OBE_Portal.Core.Entities.Student;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Student
{
    public interface IStudent
    {
        Task<AllStudentPLOsDetails> GetPLOsResultForStudent(long StudentID);
        Task<List<AllRegisteredCoursesDetailsResponse>> GetRegisteredCoursesDetails(long StudentID);
        Task<List<GetCourseCLOSResponse>> GetCourseCLOSForStudent(GetCoursesDataRequest StudentID);
        Task<List<GetAllAssessmentAndMarksResponse>> GetCourseAssessmentDetailsForStudent(GetCoursesDataRequest StudentID);
    }
}
