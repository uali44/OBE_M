using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using OBE_Portal.Core.Entities.CompiledResult;

namespace OBE_Portal.Infrastructure.Interfaces.CompiledResult
{
    public interface ICompiledResult
    {
        Task<List<CompiledResultModal>> Get_All_Student_And_Grades_For_Course(CompiledResultModal_Request Request);
        Task<List<AssessmentMarksModalResponse>> Get_Assessment_Marks_Details(Assessment_Marks_Modal_Request Request);
        Task<List<AssessmentCLOModalResponse>> Get_CLOS_Marks_Details(Assessment_Marks_Modal_Request Request);
        Task<bool> Freez_Course_Attainment(CompiledResultModal_Request Request);
        Task<List<CompiledResultFYPModal>> Get_All_Student_And_Grades_For_FYP(CompiledResultModal_Request Request);
        Task<bool> UnFreez_Course_Attainment(CompiledResultModal_Request Request);
    }
}
