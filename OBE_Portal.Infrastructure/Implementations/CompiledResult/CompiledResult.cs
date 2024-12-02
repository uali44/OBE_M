using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.CompiledResult;
using OBE_Portal.Infrastructure.Interfaces.CompiledResult;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace OBE_Portal.Infrastructure.Implementations.CompiledResult
{
    public class CompiledResult : ICompiledResult
    {
        private readonly ApplicationDbContext _context;
        public CompiledResult(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<List<CompiledResultModal>> ICompiledResult.Get_All_Student_And_Grades_For_Course(CompiledResultModal_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (Request.CourseCategory == 1)
                    {
                        var OfferedCourseID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                        List<CompiledResultModal> getResult = await _context.Set<CompiledResultModal>().FromSqlInterpolated($"EXEC SP_Get_Course_Final_Result {OfferedCourseID}").ToListAsync();
                        return getResult;
                    }
                    else if (Request.CourseCategory == 4)
                    {
                        var OfferedCourseID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                        List<CompiledResultModal> getResult = await _context.Set<CompiledResultModal>().FromSqlInterpolated($"EXEC SP_Get_Course_Final_Result_Lab {OfferedCourseID}").ToListAsync();
                        return getResult;
                    }
                    return null;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<AssessmentMarksModalResponse>> ICompiledResult.Get_Assessment_Marks_Details(Assessment_Marks_Modal_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var Offered_Course_ID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                    var Type = new SqlParameter("@Type", Request.Type);
                    var Student_ID = new SqlParameter("@Student_ID", Request.Student_ID);
                    List<AssessmentMarksModalResponse> getResult = await _context.Set<AssessmentMarksModalResponse>().FromSqlInterpolated($"EXEC Sp_Get_Assessment_Marks_Details_Studentwise {Offered_Course_ID},{Type},{Student_ID}").ToListAsync();
                    if (getResult.Count > 0)
                    {
                        return getResult;
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
        async Task<List<AssessmentCLOModalResponse>> ICompiledResult.Get_CLOS_Marks_Details(Assessment_Marks_Modal_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var Offered_Course_ID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                    var Student_ID = new SqlParameter("@Student_ID", Request.Student_ID);
                    List<AssessmentCLOModalResponse> getResult = await _context.Set<AssessmentCLOModalResponse>().FromSqlInterpolated($"EXEC Sp_Get_CLOS_Marks_Details_Studentwise {Offered_Course_ID},{Student_ID}").ToListAsync();
                    if (getResult.Count > 0)
                    {
                        return getResult;
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
        async Task<bool> ICompiledResult.Freez_Course_Attainment(CompiledResultModal_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (Request.CourseCategory == 1)
                    {
                        var OfferedCourseID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                        List<CompiledResultModal> getResult = await _context.Set<CompiledResultModal>().FromSqlInterpolated($"EXEC SP_Get_Course_Final_Result {OfferedCourseID}").ToListAsync();
                        if (getResult.Count > 0)
                        {
                            for (int j = 0; j < getResult.Count(); j++)
                            {
                                var RegisteredCourseID = new SqlParameter("@RegisteredCourseID", getResult[j].RegisteredCourseID);
                                var Assignmnet_Marks = new SqlParameter("@AssignmnetMarks", getResult[j].Assignmnet_Marks);
                                var Quiz_Marks = new SqlParameter("@QuizMarks", getResult[j].Quiz_Marks);
                                var Mid_Marks = new SqlParameter("@MidMarks", getResult[j].Mid_Marks);
                                var Final_Marks = new SqlParameter("@FinalMarks", getResult[j].Final_Marks);
                                var Total = new SqlParameter("@Total", getResult[j].Total);
                                var Grade = new SqlParameter("@Grade", getResult[j].Grade);
                                var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Student_Course_Attainments @RegisteredCourseID,@AssignmnetMarks,@QuizMarks,@MidMarks,@FinalMarks,@Total,@Grade",
                                RegisteredCourseID, Assignmnet_Marks, Quiz_Marks, Mid_Marks, Final_Marks, Total, Grade);
                            }
                            var response1 = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Freeze_Student_CLOS_Attainment @Offered_Course_ID", OfferedCourseID);

                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else if (Request.CourseCategory == 4)
                    {
                        var OfferedCourseID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                        List<CompiledResultModal> getResult = await _context.Set<CompiledResultModal>().FromSqlInterpolated($"EXEC SP_Get_Course_Final_Result_Lab {OfferedCourseID}").ToListAsync();
                        if (getResult.Count > 0)
                        {
                            for (int j = 0; j < getResult.Count(); j++)
                            {
                                var RegisteredCourseID = new SqlParameter("@RegisteredCourseID", getResult[j].RegisteredCourseID);
                                var Assignmnet_Marks = new SqlParameter("@AssignmnetMarks", getResult[j].Assignmnet_Marks);
                                var Quiz_Marks = new SqlParameter("@QuizMarks", getResult[j].Quiz_Marks);
                                var Mid_Marks = new SqlParameter("@MidMarks", getResult[j].Mid_Marks);
                                var Final_Marks = new SqlParameter("@FinalMarks", getResult[j].Final_Marks);
                                var Total = new SqlParameter("@Total", getResult[j].Total);
                                var Grade = new SqlParameter("@Grade", getResult[j].Grade);
                                var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Student_Lab_Attainments @RegisteredCourseID,@AssignmnetMarks,@QuizMarks,@MidMarks,@FinalMarks,@Total,@Grade",
                                RegisteredCourseID, Assignmnet_Marks, Quiz_Marks, Mid_Marks, Final_Marks, Total, Grade);
                            }
                            var response1 = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Freeze_Student_CLOS_Attainment @Offered_Course_ID", OfferedCourseID);

                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    else if (Request.CourseCategory == 8)
                    {
                        var OfferedCourseID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                        List<CompiledResultFYPModal> getResult = await _context.Set<CompiledResultFYPModal>().FromSqlInterpolated($"EXEC SP_Get_Course_Final_Result_FYP {OfferedCourseID}").ToListAsync();
                        if (getResult.Count > 0)
                        {
                            for (int j = 0; j < getResult.Count(); j++)
                            {
                                var RegisteredCourseID = new SqlParameter("@RegisteredCourseID", getResult[j].RegisteredCourseID);
                                var FYPCoordinator = new SqlParameter("@FYPCoordinator", getResult[j].FYPCoordinatorObtainedMarks);
                                var FYPSupervisor = new SqlParameter("@FYPSupervisor", getResult[j].FYPSupervisorObtainedMarks);
                                var InitialPresentation = new SqlParameter("@InitialPresentation", getResult[j].InitialPresentationObtainedMarks);
                                var MidTermPresentation = new SqlParameter("@MidTermPresentation", getResult[j].MidTermPresentationObtainedMarks);
                                var FinalPresentation = new SqlParameter("@FinalPresentation", getResult[j].FinalPresentationObtainedMarks);
                                var Total = new SqlParameter("@Total", getResult[j].Total);
                                var Grade = new SqlParameter("@Grade", getResult[j].Grade);
                                var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Student_FYP_Attainments @RegisteredCourseID,@FYPCoordinator,@FYPSupervisor,@InitialPresentation,@MidTermPresentation,@FinalPresentation,@Total,@Grade",
                                RegisteredCourseID, FYPCoordinator, FYPSupervisor, InitialPresentation, MidTermPresentation, FinalPresentation, Total, Grade);
                            }
                            var response1 = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Freeze_Student_CLOS_Attainment @Offered_Course_ID", OfferedCourseID);

                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    }
                    return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ICompiledResult.UnFreez_Course_Attainment(CompiledResultModal_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (Request.CourseCategory == 1)
                    {
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.Offered_Course_ID);
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Remove_Student_Course_Attainments_Already_Added @OfferedCourseID", OfferedCourseID);
                        return true;
                    }
                    else if (Request.CourseCategory == 4)
                    {
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.Offered_Course_ID);
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Remove_Student_Lab_Attainments_Already_Added @OfferedCourseID", OfferedCourseID);
                        return true;
                    }
                    else if (Request.CourseCategory == 8)
                    {
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.Offered_Course_ID);
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Remove_Student_FYP_Attainments_Already_Added @OfferedCourseID", OfferedCourseID);
                        return true;
                    }
                    
                    return false;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<List<CompiledResultFYPModal>> ICompiledResult.Get_All_Student_And_Grades_For_FYP(CompiledResultModal_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var OfferedCourseID = new SqlParameter("@Offered_Course_ID", Request.Offered_Course_ID);
                    List<CompiledResultFYPModal> getResult = await _context.Set<CompiledResultFYPModal>().FromSqlInterpolated($"EXEC SP_Get_Course_Final_Result_FYP {OfferedCourseID}").ToListAsync();
                    return getResult;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
