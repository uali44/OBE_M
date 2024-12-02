using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.AssessmentDetails;
using OBE_Portal.Infrastructure.Interfaces.AssessmentDetails;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace OBE_Portal.Infrastructure.Implementations.AssessmentDetails
{
    public class AssessmentDetails : IAssessmentDetails
    {
        private readonly ApplicationDbContext _context;
        public AssessmentDetails(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<CoursesAssessmentAndCLOSDetails> IAssessmentDetails.GetAssessmentDetailsCourse(GetAssessmentDetailsForSDelectedCourse Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    if (Request.CourseCategory != 8)
                    {
                        CoursesAssessmentAndCLOSDetails response = new CoursesAssessmentAndCLOSDetails();
                        var OfferedCourseID = new SqlParameter("@OFFEREDCOURSEID", Request.OfferedCourseID);
                        List<AssessmentDetailsResponseCourse> getAssessmentDetailsForCourses = await _context.Set<AssessmentDetailsResponseCourse>().FromSqlInterpolated($"EXEC SP_GET_ASSESSMENT_DETAILS_FOR_COURSE {OfferedCourseID}").ToListAsync();
                        List<CourseAddedCLOS> getCourseAddedCLOS = await _context.Set<CourseAddedCLOS>().FromSqlInterpolated($"EXEC Sp_Get_Course_Added_CLOS {OfferedCourseID}").ToListAsync();
                        List<LabPerformanceIndicator> LabPerformanceIndicator = await _context.Set<LabPerformanceIndicator>().FromSqlInterpolated($"EXEC Sp_Get_Lab_Performance_Indicator").ToListAsync();
                        if (LabPerformanceIndicator.Count > 0)
                            response.labPerformanceIndicator = LabPerformanceIndicator;
                        else
                            response.labPerformanceIndicator = null;
                        response.getAssessmentDetailsForCourses = getAssessmentDetailsForCourses;
                        response.getCourseAddedCLOS = getCourseAddedCLOS;
                        response.FYPAssessmentToolsStatus = null;
                        return response;
                    }
                    else
                    {
                        CoursesAssessmentAndCLOSDetails response = new CoursesAssessmentAndCLOSDetails();
                        var OfferedCourseID = new SqlParameter("@OFFEREDCOURSEID", Request.OfferedCourseID);
                   
                        List<AssessmentDetailsResponseCourse> getAssessmentDetailsForCourses = await _context.Set<AssessmentDetailsResponseCourse>().FromSqlInterpolated($"EXEC SP_GET_ASSESSMENT_DETAILS_FOR_FYP {OfferedCourseID}").ToListAsync();
                        List<CourseAddedCLOS> getCourseAddedCLOS = await _context.Set<CourseAddedCLOS>().FromSqlInterpolated($"EXEC Sp_Get_Course_Added_CLOS {OfferedCourseID}").ToListAsync();
                        List<LabPerformanceIndicator> LabPerformanceIndicator = await _context.Set<LabPerformanceIndicator>().FromSqlInterpolated($"EXEC Sp_Get_Lab_Performance_Indicator_FYP").ToListAsync();
                        List<FYPAssessmentToolsStatus> FYPAssessmentToolsStatus = await _context.Set<FYPAssessmentToolsStatus>().FromSqlInterpolated($"EXEC Sp_Get_FYP_Assessment_Tools_Status_temp {OfferedCourseID}").ToListAsync();

                        response.labPerformanceIndicator = LabPerformanceIndicator;
                        response.FYPAssessmentToolsStatus = FYPAssessmentToolsStatus;
                        response.getAssessmentDetailsForCourses = getAssessmentDetailsForCourses;
                        response.getCourseAddedCLOS = getCourseAddedCLOS;
                        return response;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.SaveAssessmentDetailsCourse(SaveAssessmentDetailsRequest Request)
        {
            try
            {
                //decimal Total_Marks = (from t in Request.Selected_Assessments_Details select t.Question_Marks).Sum();
                using (SqlCommand comm = new SqlCommand())
                {
                    for (int i = 0; i < Request.SelectedAssessments.Count; i++)
                    {
                        var AssessmentTitle = new SqlParameter("@AssessmentTitle", Request.SelectedAssessments[i].Assessment_Title);
                        var AssessmentMarks = new SqlParameter("@AssessmentMarks", Request.SelectedAssessments[i].Assessment_Marks);
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.SelectedAssessments[i].OfferedCourseID);
                        var Scheduled_Date = new SqlParameter("@Scheduled_Date", Request.SelectedAssessments[i].Scheduled_date);
                        var Assessment_Remarks = new SqlParameter("@Assessment_Remarks", Request.SelectedAssessments[i].Assessment_Remarks);
                        var Created_By = new SqlParameter("@Created_By", Request.SelectedAssessments[i].Created_By);

                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Add_Assessment_Main_Details @AssessmentTitle,@AssessmentMarks,@OfferedCourseID,@Scheduled_Date,@Created_By,@Assessment_Remarks",
                            AssessmentTitle, AssessmentMarks, OfferedCourseID, Scheduled_Date, Created_By, Assessment_Remarks);
                        if (response > 0)
                        {
                            for (int j = 0; j < Request.SelectedAssessmentsDetails.Count; j++)
                            {
                                var Question_Remarks = new SqlParameter("@Question_Remarks", Request.SelectedAssessmentsDetails[j].Question_Remarks);
                                var Selected_CLOS_ID = new SqlParameter("@Selected_CLOS_ID", Request.SelectedAssessmentsDetails[j].Selected_CLOS_ID);
                                var CLO_Weightage = new SqlParameter("@CLO_Weightage", Request.SelectedAssessmentsDetails[j].CLO_Weightage);
                                var Question_Number = new SqlParameter("@Question_Number", Request.SelectedAssessmentsDetails[j].Question_Number);
                                var Question_Marks = new SqlParameter("@Question_Marks", float.Parse(Request.SelectedAssessmentsDetails[j].Question_Marks.ToString()));
                                response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Add_Assessment_Sub_Details @Question_Remarks,@Selected_CLOS_ID,@CLO_Weightage,@Question_Number,@Question_Marks",
                                    Question_Remarks, Selected_CLOS_ID, CLO_Weightage, Question_Number, Question_Marks);

                            }
                        }
                    }
                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.DeleteSelectedAssessmentDetails(SelectedAssessmentRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AssessmentMainDetailsID = new SqlParameter("@AssessmentMainDetailsID", Request.AssessmentMainDetailsID);
                    var Modified_By = new SqlParameter("@Modified_By", Request.Modified_By);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Delete_Selected_Assessment @AssessmentMainDetailsID,@Modified_By",
                        AssessmentMainDetailsID, Modified_By);
                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.UpdateAssessmentDetailsCourse(SaveAssessmentDetailsForUpdateRequest Request)
        {
            try
            {
                //decimal Total_Marks = (from t in Request.Assessment_Sub_Details where t.Is_Deleted == false select t.Question_Marks).Sum();
                using (SqlCommand comm = new SqlCommand())
                {
                    var Selected_Assessment_ID = new SqlParameter("@Selected_Assessment_ID", Request.Selected_Assessment_ID);
                    var Assessment_Edit_Date = new SqlParameter("@Assessment_Edit_Date", Request.Assessment_Edit_Date);
                    var Assessment_Edit_Remarks = new SqlParameter("@Assessment_Edit_Remarks", Request.Assessment_Edit_Remarks);
                    var Modified_By = new SqlParameter("@Modified_By", Request.Modified_By);
                    var TotalMarks = new SqlParameter("@Total_Marks", Request.Assessment_Marks);

                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Assessment_Main_Details @Selected_Assessment_ID,@Assessment_Edit_Date,@Assessment_Edit_Remarks,@Modified_By,@Total_Marks",
                        Selected_Assessment_ID, Assessment_Edit_Date, Assessment_Edit_Remarks, Modified_By, TotalMarks);
                    if (response > 0)
                    {
                        for (int j = 0; j < Request.AssessmentSubDetails.Count; j++)
                        {
                            var Assessment_Sub_Details_ID = new SqlParameter("@Assessment_Sub_Details_ID", Request.AssessmentSubDetails[j].Assessment_Sub_Details_ID);
                            var Question_Remarks = new SqlParameter("@Question_Remarks", Request.AssessmentSubDetails[j].Assessment_Sub_Remarks);
                            var Selected_CLOS_ID = new SqlParameter("@Selected_CLOS_ID", Request.AssessmentSubDetails[j].Mapped_CLO_ID);
                            var CLO_Weightage = new SqlParameter("@CLO_Weightage", Request.AssessmentSubDetails[j].Weightage);
                            var Question_Marks = new SqlParameter("@Question_Marks", Request.AssessmentSubDetails[j].Question_Marks);
                            var Is_Deleted = new SqlParameter("@Is_Deleted", Request.AssessmentSubDetails[j].Is_Deleted);
                            var QuestionNumber = new SqlParameter("@QuestionNumber", Request.AssessmentSubDetails[j].Question_Number);
                            response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Assessment_Sub_Details @Assessment_Sub_Details_ID,@Question_Remarks,@Selected_CLOS_ID,@CLO_Weightage,@Question_Marks,@Modified_By,@Is_Deleted,@QuestionNumber",
                                Assessment_Sub_Details_ID, Question_Remarks, Selected_CLOS_ID, CLO_Weightage, Question_Marks, Modified_By, Is_Deleted, QuestionNumber);

                        }
                    }

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.SaveAssessmentDetailsLab(SaveAssessmentDetailsRequestLab Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    for (int i = 0; i < Request.SelectedAssessmentsLab.Count; i++)
                    {
                        var AssessmentTitle = new SqlParameter("@AssessmentTitle", Request.SelectedAssessmentsLab[i].Assessment_Title);
                        var AssessmentMarks = new SqlParameter("@AssessmentMarks", Request.SelectedAssessmentsLab[i].Assessment_Marks);
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.SelectedAssessmentsLab[i].OfferedCourseID);
                        var Created_By = new SqlParameter("@Created_By", Request.SelectedAssessmentsLab[i].Created_By);
                        var Lab_Remarks = new SqlParameter("@Lab_Remarks", Request.SelectedAssessmentsLab[i].Lab_Remarks);

                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Add_Assessment_Main_Details_For_Lab @AssessmentTitle,@AssessmentMarks,@OfferedCourseID,@Lab_Remarks,@Created_By",
                            AssessmentTitle, AssessmentMarks, OfferedCourseID, Lab_Remarks, Created_By);
                        if (response > 0)
                        {
                            for (int j = 0; j < Request.SelectedAssessmentsDetailsLab.Count; j++)
                            {
                                var Selected_CLOS_ID = new SqlParameter("@Selected_CLOS_ID", (Request.SelectedAssessmentsLab[i].Assessment_Title.Contains("Mids") || Request.SelectedAssessmentsLab[i].Assessment_Title.Contains("Finals")) ? Request.SelectedAssessmentsDetailsLab[j].Selected_CLOS_ID : Request.SelectedAssessmentsLab[i].Select_CLO);
                                var CLO_Weightage = new SqlParameter("@CLO_Weightage", (Request.SelectedAssessmentsLab[i].Assessment_Title.Contains("Mids") || Request.SelectedAssessmentsLab[i].Assessment_Title.Contains("Finals")) ? Request.SelectedAssessmentsDetailsLab[j].CLO_Weightage : Request.SelectedAssessmentsLab[i].Weightage);
                                var Performance_Indicator_ID = new SqlParameter("@Performance_Indicator_ID", Request.SelectedAssessmentsDetailsLab[j].Performance_Indicator_ID);
                                var Performance_Indicator_Marks = new SqlParameter("@Performance_Indicator_Marks", Request.SelectedAssessmentsDetailsLab[j].Performance_Indicator_Marks);
                                response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Add_Assessment_Sub_Details_For_Lab @Selected_CLOS_ID,@CLO_Weightage,@Performance_Indicator_ID,@Performance_Indicator_Marks",
                                    Selected_CLOS_ID, CLO_Weightage, Performance_Indicator_ID, Performance_Indicator_Marks);
                            }
                        }
                    }
                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.UpdateAssessmentDetailsLab(SaveAssessmentDetailsForUpdateRequestLab Request)
        {
            try
            {
                //decimal Total_Marks = (from t in Request.Assessment_Sub_Details where t.Is_Deleted == false select t.Question_Marks).Sum();
                using (SqlCommand comm = new SqlCommand())
                {
                    var Selected_Assessment_ID = new SqlParameter("@Selected_Assessment_ID", Request.Selected_Assessment_ID);
                    var Modified_By = new SqlParameter("@Modified_By", Request.Modified_By);
                    var TotalMarks = new SqlParameter("@Total_Marks", Request.Assessment_Marks);
                    var Lab_Remarks_Assessment_Edit = new SqlParameter("@Lab_Remarks_Assessment_Edit", Request.Lab_Remarks_Assessment_Edit);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Assessment_Main_Details_Lab @Selected_Assessment_ID,@Modified_By,@Total_Marks,@Lab_Remarks_Assessment_Edit",
                        Selected_Assessment_ID, Modified_By, TotalMarks, Lab_Remarks_Assessment_Edit);
                    if (response > 0)
                    {
                        for (int j = 0; j < Request.AssessmentSubDetailsLab.Count; j++)
                        {
                            var Assessment_Sub_Details_ID = new SqlParameter("@Assessment_Sub_Details_ID", Request.AssessmentSubDetailsLab[j].Assessment_Sub_Details_ID);
                            var Selected_CLOS_ID = new SqlParameter("@Selected_CLOS_ID", Request.Select_CLO_Assessment_Lab_Edit == 123 ? Request.AssessmentSubDetailsLab[j].Mapped_CLO_ID : Request.Select_CLO_Assessment_Lab_Edit);
                            var CLO_Weightage = new SqlParameter("@CLO_Weightage", Request.Selected_CLO_Assessment_Weightage_Edit == 123 ? Request.AssessmentSubDetailsLab[j].Weightage : Request.Selected_CLO_Assessment_Weightage_Edit);
                            var Question_Marks = new SqlParameter("@Question_Marks", Request.AssessmentSubDetailsLab[j].Performance_Indicator_Marks);
                            var Is_Deleted = new SqlParameter("@Is_Deleted", Request.AssessmentSubDetailsLab[j].Is_Deleted);
                            var QuestionNumber = new SqlParameter("@QuestionNumber", Request.AssessmentSubDetailsLab[j].Performance_Indicator_ID);
                            response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Assessment_Sub_Details_Lab @Assessment_Sub_Details_ID,@Selected_CLOS_ID,@CLO_Weightage,@Question_Marks,@Modified_By,@Is_Deleted,@QuestionNumber",
                                Assessment_Sub_Details_ID, Selected_CLOS_ID, CLO_Weightage, Question_Marks, Modified_By, Is_Deleted, QuestionNumber);
                        }
                    }

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.SaveAssessmentDetailsFYP(SaveAssessmentDetailsFYPRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var FYPAssessmentToolID = new SqlParameter("@FYPAssessmentToolID", Request.AssessmentToolFYPID);
                    var AssessmentMarks = new SqlParameter("@AssessmentMarks", Request.TotalAssessmentMarks);
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    var Created_By = new SqlParameter("@Created_By", Request.CreatedBy);
                    var Lab_Remarks = new SqlParameter("@Lab_Remarks", Request.AssessmentRemarks);

                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Add_Assessment_Main_Details_For_FYP @FYPAssessmentToolID,@AssessmentMarks,@OfferedCourseID,@Lab_Remarks,@Created_By",
                        FYPAssessmentToolID, AssessmentMarks, OfferedCourseID, Lab_Remarks, Created_By);
                    if (response > 0)
                    {
                        for (int j = 0; j < Request.AssessmentDetailsFYP.Count; j++)
                        {
                            var Selected_CLOS_ID = new SqlParameter("@Selected_CLOS_ID", Request.AssessmentDetailsFYP[j].Selected_CLOS_ID);
                            var CLO_Weightage = new SqlParameter("@CLO_Weightage",  Request.AssessmentDetailsFYP[j].CLO_Weightage);
                            var Performance_Indicator_ID = new SqlParameter("@Performance_Indicator_ID", Request.AssessmentDetailsFYP[j].Performance_Indicator_ID);
                            var Performance_Indicator_Marks = new SqlParameter("@Performance_Indicator_Marks", Request.AssessmentDetailsFYP[j].Performance_Indicator_Marks);
                            response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Add_Assessment_Sub_Details_For_FYP @Selected_CLOS_ID,@CLO_Weightage,@Performance_Indicator_ID,@Performance_Indicator_Marks",
                                Selected_CLOS_ID, CLO_Weightage, Performance_Indicator_ID, Performance_Indicator_Marks);
                        }
                    }

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentDetails.UpdateAssessmentDetailsFYP(SaveAssessmentDetailsForUpdateRequestFYP Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Selected_Assessment_ID = new SqlParameter("@Selected_Assessment_ID", Request.Selected_Assessment_ID);
                    var Modified_By = new SqlParameter("@Modified_By", Request.Modified_By);
                    var Lab_Remarks_Assessment_Edit = new SqlParameter("@Lab_Remarks_Assessment_Edit", Request.FYP_Remarks_Assessment_Edit);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Assessment_Main_Details_FYP @Selected_Assessment_ID,@Modified_By,@Lab_Remarks_Assessment_Edit",
                        Selected_Assessment_ID, Modified_By, Lab_Remarks_Assessment_Edit);
                    if (response > 0)
                    {
                        for (int j = 0; j < Request.AssessmentSubDetailsFYP.Count; j++)
                        {
                            var Assessment_Sub_Details_ID = new SqlParameter("@Assessment_Sub_Details_ID", Request.AssessmentSubDetailsFYP[j].Assessment_Sub_Details_ID);
                            var Selected_CLOS_ID = new SqlParameter("@Selected_CLOS_ID", Request.AssessmentSubDetailsFYP[j].Mapped_CLO_ID);
                            var CLO_Weightage = new SqlParameter("@CLO_Weightage", Request.AssessmentSubDetailsFYP[j].Weightage);
                            var Question_Marks = new SqlParameter("@Question_Marks", Request.AssessmentSubDetailsFYP[j].Performance_Indicator_Marks);
                            var Is_Deleted = new SqlParameter("@Is_Deleted", Request.AssessmentSubDetailsFYP[j].Is_Deleted);
                            var QuestionNumber = new SqlParameter("@QuestionNumber", Request.AssessmentSubDetailsFYP[j].Performance_Indicator_ID);
                            response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Assessment_Sub_Details_FYP @Assessment_Sub_Details_ID,@Selected_CLOS_ID,@CLO_Weightage,@Question_Marks,@Modified_By,@Is_Deleted,@QuestionNumber",
                                Assessment_Sub_Details_ID, Selected_CLOS_ID, CLO_Weightage, Question_Marks, Modified_By, Is_Deleted, QuestionNumber);
                        }
                    }
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
