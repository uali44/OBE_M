using OBE_Portal.Core.Entities.CompiledResult;
using OBE_Portal.Core.Entities.Reports;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Reports
{
    public interface IReport
    {
        Task<List<GetOfferedCoursesDeparmentAndSemesterwise>> Get_All_OfferedCourses_SemesterWise(OfferedCourses_Request Request);
        Task<List<GetPLOsAnalysisResult>> Get_PLOs_Analysis_For_Selected_Intake(long Request);
        Task<List<GetPLOsAnalysisResult>> Get_PLOs_Analysis_For_Selected_Intake_Average_Attainment(long Request);
        Task<List<GetPLOsAnalysisResult>> Get_PLOs_Analysis_For_Selected_Intake_CQI(long Request);
        Task<List<GetPLOsAnalysisResult>> GetPLOsAnalysisForSelectedIntakeIncludedFGrade(long Request);
        Task<List<PLOStudentResponse>> Get_Selected_PLO_Student_Details(PLO_Student_Request Request);
        Task<List<SkillCoverageResponse>> Get_All_Skills_Count_Intake_wise(long Request);
        Task<List<SkillCoverageDetailsResponse>> Get_All_Skills_Details_Intake_wise(PLO_Skill_Coverage_Request Request);
        Task<List<PLOsCoverageResponse>> Get_All_PLOs_Coverage_Count_Intake_wise(long Request);
        Task<List<SkillCoverageDetailsResponse>> Get_All_CLOs_Details_Intake_wise(PLOs_Coverage_Request Request);
        Task<Course_Assessment_Details_Response> Get_All_Course_Data_For_Analysis(long Request);
        Task<bool> SaveDirectRemarks(List<SaveRemarksRequest> Request);
        Task<bool> SaveIndirectRemarks(List<SaveRemarksRequest> Request);
        Task<bool> SaveTable1Form(SaveTable1FormRequest Request);
        Task<bool> SaveTable2Form(SaveTable1FormRequest Request);
        Task<bool> SaveTable3Form(SaveTable3FormRequest Request);
        Task<bool> SaveTable4Form(SaveTable4FormRequest Request);
        Task<List<PLOsCoverageCourseWiseResponse>> Get_PLOs_Course_Wise_Details(long Request);
        Task<List<CLOPLOMappingResponse>> CLO_PLO_Mapping_Intakewise(long Request);
        Task<List<CLOPLOSkillsMappingResponse>> CLO_PLO_Skills_Mapping_Intakewise(long Request);
        Task<bool> DeleteStudentFromAnalysis(long Request);
        Task<bool> ExcludeCLOFromAnalysis(long Request);
        Task<List<CLOAttainmentResponse>> GetCLOsAttainment(CLOsAttainmentRequest Request);
        Task<List<CLOAttainmentDetailsResponse>> GetCLOsAttainmentDetails(long Request);
        Task<List<GetAllStudentWhoPassedCourseButFailedCLOMainResponse>> GetCoursesInWhichStudentPassedButCLOsFailed(CLOsAttainmentRequest Request);
        Task<List<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse>> GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(long Request);
        Task<bool> AddCQIActionForStudent(List<AddCQICycleRequest> Request);
        Task<bool> CQISubmitted(long Request);
        Task<CSPSummaryResponse> GetCSPData(long Request);
        Task<ExitSummaryResponse> GetExitData(long Request);
        Task<InternshipSummaryResponse> GetInternshipData(long Request);
        Task<List<IntakeAllStudentResponse>> GetAllIntakeStudents(long Request);
        Task<bool> UpdateCourseCategory(CourseStatusRequest Request);
        Task<bool> updateFacultyAssignedCourses(FacultyChangeRequest Request);

    }
}
