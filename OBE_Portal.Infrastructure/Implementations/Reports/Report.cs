using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.Reports;
using OBE_Portal.Infrastructure.Interfaces.Reports;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.Reports
{
    public class Report : IReport
    {
        private readonly ApplicationDbContext _context;
        public Report(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<List<GetOfferedCoursesDeparmentAndSemesterwise>> IReport.Get_All_OfferedCourses_SemesterWise(OfferedCourses_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var DepartmentID = new SqlParameter("@DepartmentID", Request.DepartmentID);
                    var SemesterID = new SqlParameter("@SemesterID", Request.SemesterID);
                    var Status = new SqlParameter("@Status", Request.Status);
                    List<GetOfferedCoursesDeparmentAndSemesterwise> response = await _context.Set<GetOfferedCoursesDeparmentAndSemesterwise>().FromSqlInterpolated($"EXEC Sp_Get_All_Offered_Courses_SemesterWise {DepartmentID},{SemesterID},{Status}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetPLOsAnalysisResult>> IReport.Get_PLOs_Analysis_For_Selected_Intake(long Request)
        {
            try
            {

                using (SqlCommand comm = new SqlCommand())
                {
                    _context.Database.SetCommandTimeout(5000);
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<GetPLOsAnalysisResult> response = await _context.Set<GetPLOsAnalysisResult>().FromSqlInterpolated($"EXEC Sp_PLO_Analysis {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetPLOsAnalysisResult>> IReport.Get_PLOs_Analysis_For_Selected_Intake_Average_Attainment(long Request)
        {
            try
            {

                using (SqlCommand comm = new SqlCommand())
                {
                    _context.Database.SetCommandTimeout(5000);
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<GetPLOsAnalysisResult> response = await _context.Set<GetPLOsAnalysisResult>().FromSqlInterpolated($"EXEC Sp_PLO_Analysis_Average_Attaiment {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetPLOsAnalysisResult>> IReport.Get_PLOs_Analysis_For_Selected_Intake_CQI(long Request)
        {
            try
            {

                using (SqlCommand comm = new SqlCommand())
                {
                    _context.Database.SetCommandTimeout(5000);
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<GetPLOsAnalysisResult> response = await _context.Set<GetPLOsAnalysisResult>().FromSqlInterpolated($"EXEC Sp_PLO_Analysis_CQI {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetPLOsAnalysisResult>> IReport.GetPLOsAnalysisForSelectedIntakeIncludedFGrade(long Request)
        {
            try
            {

                using (SqlCommand comm = new SqlCommand())
                {
                    _context.Database.SetCommandTimeout(5000);
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<GetPLOsAnalysisResult> response = await _context.Set<GetPLOsAnalysisResult>().FromSqlInterpolated($"EXEC Sp_PLO_Analysis_Included_F_Grade {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<PLOStudentResponse>> IReport.Get_Selected_PLO_Student_Details(PLO_Student_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var MappedPLO = new SqlParameter("@MappedPLO", Request.PLOID);
                    var StudentID = new SqlParameter("@StudentID", Request.StudentID);
                    List<PLOStudentResponse> response = await _context.Set<PLOStudentResponse>().FromSqlInterpolated($"EXEC Sp_Get_Selected_PLO_And_Student_Details {MappedPLO},{StudentID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<SkillCoverageResponse>> IReport.Get_All_Skills_Count_Intake_wise(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<SkillCoverageResponse> response = await _context.Set<SkillCoverageResponse>().FromSqlInterpolated($"EXEC SP_PLO_Mapped_skills_Count {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<SkillCoverageDetailsResponse>> IReport.Get_All_Skills_Details_Intake_wise(PLO_Skill_Coverage_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Intake = new SqlParameter("@AdmissionOpenProgramID", Request.Intake);
                    var Skill = new SqlParameter("@Skill", Request.Skill);
                    var Seleced_PLO = new SqlParameter("@PLO", Request.Seleced_PLO);
                    List<SkillCoverageDetailsResponse> response = await _context.Set<SkillCoverageDetailsResponse>().FromSqlInterpolated($"EXEC SP_PLO_Mapped_skills_Details {Intake},{Skill},{Seleced_PLO}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<PLOsCoverageResponse>> IReport.Get_All_PLOs_Coverage_Count_Intake_wise(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<PLOsCoverageResponse> response = await _context.Set<PLOsCoverageResponse>().FromSqlInterpolated($"EXEC SP_PLO_Mapped_Semester_Wise_Count {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<SkillCoverageDetailsResponse>> IReport.Get_All_CLOs_Details_Intake_wise(PLOs_Coverage_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Intake = new SqlParameter("@AdmissionOpenProgramID", Request.Intake);
                    var Semester = new SqlParameter("@Semester", Request.Semester);
                    var Seleced_PLO = new SqlParameter("@PLO", Request.Seleced_PLO);
                    List<SkillCoverageDetailsResponse> response = await _context.Set<SkillCoverageDetailsResponse>().FromSqlInterpolated($"EXEC SP_PLO_Mapped_Coverage_Details {Intake},{Semester},{Seleced_PLO}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<Course_Assessment_Details_Response> IReport.Get_All_Course_Data_For_Analysis(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    Course_Assessment_Details_Response obj = new Course_Assessment_Details_Response();
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request);
                 

                    List<CourseCLOSCARResponse> GetCourseCLOS = await _context.Set<CourseCLOSCARResponse>().
                        FromSqlInterpolated($"EXEC Sp_Get_Course_CLOS_For_CAR {OfferedCourseID}").ToListAsync();

                    List<CourseCLOSOverPLOSResponse> CourseCLOSOverPLOS = await _context.Set<CourseCLOSOverPLOSResponse>().
                    FromSqlInterpolated($"EXEC Sp_CLOS_Over_PLOS_Marks_Distribution {OfferedCourseID}").ToListAsync();

                    List<CourseGradeDistribution> CourseGradeDistribution = await _context.Set<CourseGradeDistribution>().
                    FromSqlInterpolated($"EXEC SP_Get_Grades_Distributions_For_CAR {OfferedCourseID}").ToListAsync();

                    List<CarFeedbackResponse> CarFeedback = await _context.Set<CarFeedbackResponse>().
                    FromSqlInterpolated($"EXEC SP_GET_CAR_FEEDBACK {OfferedCourseID}").ToListAsync();
                    List<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse> response = await _context.
                    Set<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse>().
                    FromSqlInterpolated($"EXEC SP_Get_All_Student_Who_Passed_Course_But_Failed_CLO_Details_In_Selected_Course {OfferedCourseID}").
                    ToListAsync();

                    obj.GetCourseCLOS = GetCourseCLOS;
                    obj.CourseCLOSOverPLOS = CourseCLOSOverPLOS;
                    obj.CourseGradeDistribution = CourseGradeDistribution;
                    obj.GetAllStudentWhoPassedCourseButFailedCLODetailsResponse = response;
                    if (CarFeedback.Count > 0)
                        obj.CarFeedbackResponse = CarFeedback[0];
                    else
                    {
                        CarFeedbackResponse temp = new CarFeedbackResponse();
                        obj.CarFeedbackResponse = temp;
                    }
                    return obj;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.SaveDirectRemarks(List<SaveRemarksRequest> Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    for (int i = 0; i < Request.Count; i++)
                    {
                        var CLO_Title = new SqlParameter("@CourseCLOID", Request[i].CourseCLOID);
                        var Description = new SqlParameter("@Remarks", Request[i].Remarks);
                        response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Add_Course_CLOS_Direct_Remarks @CourseCLOID,@Remarks",
                            CLO_Title, Description);
                    }
                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.SaveIndirectRemarks(List<SaveRemarksRequest> Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    for (int i = 0; i < Request.Count; i++)
                    {
                        var CLO_Title = new SqlParameter("@CourseCLOID", Request[i].CourseCLOID);
                        var Description = new SqlParameter("@Remarks", Request[i].Remarks);
                        response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Add_Course_CLOS_Indirect_Remarks @CourseCLOID,@Remarks",
                            CLO_Title, Description);
                    }
                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.SaveTable1Form(SaveTable1FormRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    var Q1Answer = new SqlParameter("@Q1Answer", Request.Q1Answer);
                    var Q1Remarks = new SqlParameter("@Q1Remarks", Request.Q1Remarks);
                    var Q2Answer = new SqlParameter("@Q2Answer", Request.Q2Answer);
                    var Q2Remarks = new SqlParameter("@Q2Remarks", Request.Q2Remarks);
                    var Q3Answer = new SqlParameter("@Q3Answer", Request.Q3Answer);
                    var Q3Remarks = new SqlParameter("@Q3Remarks", Request.Q3Remarks);
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    var UserID = new SqlParameter("@UserID", Request.UserID);
                    response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_ADD_CAR_Form1_Data @Q1Answer,@Q1Remarks,@Q2Answer,@Q2Remarks,@Q3Answer,@Q3Remarks,@OfferedCourseID,@UserID",
                        Q1Answer,Q1Remarks,Q2Answer,Q2Remarks,Q3Answer,Q3Remarks,OfferedCourseID,UserID);

                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.SaveTable2Form(SaveTable1FormRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    var Q1Answer = new SqlParameter("@Q1Answer", Request.Q1Answer);
                    var Q1Remarks = new SqlParameter("@Q1Remarks", Request.Q1Remarks);
                    var Q2Answer = new SqlParameter("@Q2Answer", Request.Q2Answer);
                    var Q2Remarks = new SqlParameter("@Q2Remarks", Request.Q2Remarks);
                    var Q3Answer = new SqlParameter("@Q3Answer", Request.Q3Answer);
                    var Q3Remarks = new SqlParameter("@Q3Remarks", Request.Q3Remarks);
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    var UserID = new SqlParameter("@UserID", Request.UserID);
                    response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_ADD_CAR_Form2_Data @Q1Answer,@Q1Remarks,@Q2Answer,@Q2Remarks,@Q3Answer,@Q3Remarks,@OfferedCourseID,@UserID",
                        Q1Answer, Q1Remarks, Q2Answer, Q2Remarks, Q3Answer, Q3Remarks, OfferedCourseID, UserID);

                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.SaveTable3Form(SaveTable3FormRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    var Quiz = new SqlParameter("@QuizPerformance", Request.Quiz);
                    var Assignment = new SqlParameter("@AssignmentPerformance", Request.Assignment);
                    var CourseProject = new SqlParameter("@ProjectPerformance", Request.CourseProject);
                    var MidsFinals = new SqlParameter("@MidsFinalPerformance", Request.MidsFinals);
                    var Presentation = new SqlParameter("@PresentationPerformance", Request.Presentation);
                    var CEP = new SqlParameter("@CEPPerformance", Request.CEP);
                    var Tb3Q1Remarks = new SqlParameter("@Tb3Q1Remarks", Request.Tb3Q1Remarks);
                    var Tb3Q2 = new SqlParameter("@Tb3Q2Answer", Request.Tb3Q2);
                    var Tb3Q2Remarks = new SqlParameter("@Tb3Q2Remarks", Request.Tb3Q2Remarks);
                    var UserID = new SqlParameter("@UserID", Request.UserID);
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_ADD_CAR_Form3_Data @QuizPerformance,@AssignmentPerformance,@ProjectPerformance,@MidsFinalPerformance,@PresentationPerformance,@CEPPerformance,@Tb3Q1Remarks,@Tb3Q2Answer,@Tb3Q2Remarks,@UserID,@OfferedCourseID",
                        Quiz, Assignment, CourseProject, MidsFinals, Presentation, CEP, Tb3Q1Remarks, Tb3Q2, Tb3Q2Remarks, UserID, OfferedCourseID);

                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.SaveTable4Form(SaveTable4FormRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    var FailedCLOS = new SqlParameter("@NumberOfCLOFailed", Request.FailedCLOS);
                    var FailedStudentsInCLOS = new SqlParameter("@NumberOfStudentFailedInCLO", Request.FailedStudentsInCLOS);
                    var FailedPLOS = new SqlParameter("@NumberOfPLOFailed", Request.FailedPLOS);
                    var FailedStudentsInPLOS = new SqlParameter("@NumberOfStudentFailedInPLO", Request.FailedStudentsInPLOS);
                    var Tb4Q1 = new SqlParameter("@Tb4Q1Answer", Request.Tb4Q1);
                    var Tb4Q2Remarks = new SqlParameter("@Tb4Q2Remarks", Request.Tb4Q2Remarks);
                    var UserID = new SqlParameter("@UserID", Request.UserID);
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_ADD_CAR_Form4_Data @NumberOfCLOFailed,@NumberOfStudentFailedInCLO,@NumberOfPLOFailed,@NumberOfStudentFailedInPLO,@Tb4Q1Answer,@Tb4Q2Remarks,@UserID,@OfferedCourseID",
                        FailedCLOS, FailedStudentsInCLOS, FailedPLOS, FailedStudentsInPLOS, Tb4Q1, Tb4Q2Remarks, UserID,OfferedCourseID );

                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<PLOsCoverageCourseWiseResponse>> IReport.Get_PLOs_Course_Wise_Details(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<PLOsCoverageCourseWiseResponse> response = await _context.Set<PLOsCoverageCourseWiseResponse>().FromSqlInterpolated($"EXEC SP_PLO_Mapped_Course_Wise_Count {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<CLOPLOMappingResponse>> IReport.CLO_PLO_Mapping_Intakewise(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<CLOPLOMappingResponse> response = await _context.Set<CLOPLOMappingResponse>().FromSqlInterpolated($"EXEC SP_CLO_PLO_Mapping_Intakewise {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<CLOPLOSkillsMappingResponse>> IReport.CLO_PLO_Skills_Mapping_Intakewise(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<CLOPLOSkillsMappingResponse> response = await _context.Set<CLOPLOSkillsMappingResponse>().FromSqlInterpolated($"EXEC SP_CLO_PLO_Skill_Mapping_Intakewise {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.DeleteStudentFromAnalysis(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var StudentID = new SqlParameter("@StudentID", Request);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Delete_Student @StudentID", StudentID);
                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.ExcludeCLOFromAnalysis(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var CLOResultID = new SqlParameter("@CLOResultID", Request);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Exclude_CLO_Attainment @CLOResultID", CLOResultID);
                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<CLOAttainmentResponse>> IReport.GetCLOsAttainment(CLOsAttainmentRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var DepartmentID = new SqlParameter("@DepartmentID", Request.Deaprtment);
                    var SemesterID = new SqlParameter("@SemesterID", Request.Semester);
                    List<CLOAttainmentResponse> response = await _context.Set<CLOAttainmentResponse>().FromSqlInterpolated($"EXEC SP_CLO_Attainment {DepartmentID},{SemesterID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<CLOAttainmentDetailsResponse>> IReport.GetCLOsAttainmentDetails(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var CourseCLOID = new SqlParameter("@CourseCLOID", Request);
                    var response = await _context.Set<CLOAttainmentDetailsResponse>().FromSqlInterpolated($"EXEC SP_Class_CLO_Attainment_Details {CourseCLOID}").ToListAsync();
                    return response;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetAllStudentWhoPassedCourseButFailedCLOMainResponse>> IReport.GetCoursesInWhichStudentPassedButCLOsFailed(CLOsAttainmentRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    _context.Database.SetCommandTimeout(5000);
                    var Semester = new SqlParameter("@Semester", Request.Semester);
                    var Deaprtment = new SqlParameter("@Deaprtment", Request.Deaprtment);
                    List<GetAllStudentWhoPassedCourseButFailedCLOMainResponse> response = await _context.Set<GetAllStudentWhoPassedCourseButFailedCLOMainResponse>().FromSqlInterpolated($"EXEC SP_Get_All_Student_Who_Passed_Course_But_Failed_CLO_Main {Semester},{Deaprtment}").ToListAsync();
                    return response;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<List<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse>> IReport.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request);
                    List<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse> response = await _context.Set<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse>().FromSqlInterpolated($"EXEC SP_Get_All_Student_Who_Passed_Course_But_Failed_CLO_Details_In_Selected_Course {OfferedCourseID}").ToListAsync();
                    return response;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<bool> IReport.AddCQIActionForStudent(List<AddCQICycleRequest> Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    for (int i = 0; i < Request.Count; i++)
                    {
                        var CourseCLOID = new SqlParameter("@CourseCLOID", Request[i].CourseCLOID);
                        var RegisteredCourseID = new SqlParameter("@RegisteredCourseID", Request[i].RegisteredCourseID);
                        var Action = new SqlParameter("@Action", Request[i].Action);
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Add_CQI_Cycle @Action,@RegisteredCourseID,@CourseCLOID", 
                            Action, RegisteredCourseID, CourseCLOID);
                    }
                    
                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IReport.CQISubmitted(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var CLOResultID = new SqlParameter("@CLOResultID", Request);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Update_CQI_Cycle_Entry @CLOResultID",
                        CLOResultID);

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<CSPSummaryResponse> IReport.GetCSPData(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<CSPSummaryResponse> response = await _context.Set<CSPSummaryResponse>().FromSqlInterpolated($"EXEC SP_GET_CSP_Students_Data {AdmissionOpenProgramID}").ToListAsync();
                    if (response.Count > 0)
                        return response[0];
                    else
                        return null;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<ExitSummaryResponse> IReport.GetExitData(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<ExitSummaryResponse> response = await _context.Set<ExitSummaryResponse>().FromSqlInterpolated($"EXEC SP_GET_Exit_Students_Data {AdmissionOpenProgramID}").ToListAsync();
                    if (response.Count > 0)
                        return response[0];
                    else
                        return null;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<InternshipSummaryResponse> IReport.GetInternshipData(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<InternshipSummaryResponse> response = await _context.Set<InternshipSummaryResponse>().FromSqlInterpolated($"EXEC SP_GET_Internship_Students_Data {AdmissionOpenProgramID}").ToListAsync();
                    if (response.Count > 0)
                        return response[0];
                    else
                        return null;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<IntakeAllStudentResponse>> IReport.GetAllIntakeStudents(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    List<IntakeAllStudentResponse> response = await _context.Set<IntakeAllStudentResponse>().FromSqlInterpolated($"EXEC SP_GET_All_Intake_students {AdmissionOpenProgramID}").ToListAsync();
                    if (response.Count > 0)
                        return response;
                    else
                        return null;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> IReport.UpdateCourseCategory(CourseStatusRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.Offered_Course_ID);
                    var Status = new SqlParameter("@Status", Request.Status);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Update_Coures_Category @OfferedCourseID, @Status",
                        OfferedCourseID, Status); 

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> IReport.updateFacultyAssignedCourses(FacultyChangeRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request.FacultyMemberID);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Update_Coures_Assigned_faculty @OfferedCourseID, @FacultyMemberID",
                        OfferedCourseID, FacultyMemberID);

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

    }

}
