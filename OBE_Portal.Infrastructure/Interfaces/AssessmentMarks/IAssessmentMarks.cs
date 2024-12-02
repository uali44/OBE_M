using OBE_Portal.Core.Entities.AssessmentMarks;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.AssessmentMarks
{
    public interface IAssessmentMarks
    {
        Task<Assessment_And_Registered_Studens> GetRegisteredStudent(long Request);
        Task<bool> AddMarksThroughExcel(List<Assessment> Request);
        Task<List<GetSelectedAssessmentAndMarksResponse>> GetStudentsMarksForSelectedAssessment(Assessment_Marks_Requst Request);
        Task<bool> SaveUpdatedMarks(List<Assessment_Marks_Update_Reqeust> Request);

    }
}
