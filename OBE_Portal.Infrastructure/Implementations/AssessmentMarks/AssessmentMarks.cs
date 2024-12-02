using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.AssessmentMarks;
using OBE_Portal.Infrastructure.Interfaces.AssessmentMarks;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.AssessmentMarks
{
    public class AssessmentMarks : IAssessmentMarks
    {
        private readonly ApplicationDbContext _context;
        public AssessmentMarks(ApplicationDbContext context)
        {
            _context = context;
        }

        async Task<bool> IAssessmentMarks.SaveUpdatedMarks(List<Assessment_Marks_Update_Reqeust> Request)
        {
            try
            {
                for (int i = 0; i < Request.Count; i++)
                {
                    using (SqlCommand comm = new SqlCommand())
                    {
                        var Assessment_ID = new SqlParameter("@Assessment_Marks_ID", Request[i].Assessment_Marks_ID);
                        var Student_ID = new SqlParameter("@Obtained_Marks", Request[i].Obtained_Marks);
                        var Modified_By = new SqlParameter("@Modified_By", Request[i].Modified_By);
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC sp_update_marks @Assessment_Marks_ID,@Obtained_Marks,@Modified_By",
                            Assessment_ID, Student_ID, Modified_By
                            );
                    }
                }
                var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request[0].Offered_Course_ID);
                var response1 = await _context.Database.ExecuteSqlRawAsync($"EXEC SET_ASSESSMENT_BEST_LOWEST_PERFORMAR_ASSESSMENT_CLO_ATTAIMENT @OfferedCourseID",
                       OfferedCourseID);
                return true;
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> IAssessmentMarks.AddMarksThroughExcel(List<Assessment> Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    DataTable Dt = new DataTable("AssessmentMarks");
                    Dt.Columns.Add("StudentID", typeof(long));
                    Dt.Columns.Add("questionObtainedMarks", typeof(float));
                    Dt.Columns.Add("AssessmentSubDetailsID", typeof(long));
                    Dt.Columns.Add("Is_Deleted", typeof(bool));
                    Dt.Columns.Add("Modified_By", typeof(long));
                    Dt.Columns.Add("Modified_Date", typeof(DateTime));
                    for (int i = 0; i < Request.Count; i++)
                    {
                        var Assessment_ID = new SqlParameter("@Assessment_ID", Request[i].Assessment_ID);
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Delete_Added_Assessment_Marks @Assessment_ID",
                           Assessment_ID);
                        for (int j = 0; j < Request[i].Assessment_Student_Marks_Details.Count; j++)
                        {
                            Dt.Rows.Add(
                                Request[i].Assessment_Student_Marks_Details[j].Student_ID,
                                Request[i].Assessment_Student_Marks_Details[j].Obtained_Marks < 0 ? 0: Request[i].Assessment_Student_Marks_Details[j].Obtained_Marks,
                                Request[i].Assessment_Student_Marks_Details[j].Assessment_Sub_Details_ID,
                                false,
                                Request[i].Assessment_Student_Marks_Details[j].Created_By,
                                DateTime.Now
                                );
                        }
                    }
                    if (Dt.Rows.Count > 0)
                    {
                        SqlParameter param = new SqlParameter();
                        param.ParameterName = "@Assessment_Marks";
                        param.SqlDbType = SqlDbType.Structured;
                        param.TypeName = "dbo.AssessmentMarks_Test_Type";
                        param.Value = Dt;
                        var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Add_Assessment_Marks @Assessment_Marks",
                            param);
                        var Offered_Course_ID = new SqlParameter("@Offered_Course_ID", Request[0].Offered_Course_ID);
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request[0].Offered_Course_ID);
                        response = await _context.Database.ExecuteSqlRawAsync($"EXEC Update_CLO_Attainment @Offered_Course_ID",
                            Offered_Course_ID);
                        response = await _context.Database.ExecuteSqlRawAsync($"EXEC SET_ASSESSMENT_BEST_LOWEST_PERFORMAR_ASSESSMENT_CLO_ATTAIMENT @OfferedCourseID",
                            OfferedCourseID);
                        

                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<Assessment_And_Registered_Studens> IAssessmentMarks.GetRegisteredStudent(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    Assessment_And_Registered_Studens obj = new Assessment_And_Registered_Studens();
                    var OfferedCourseID = new SqlParameter("@OFFEREDCOURSEID", Request);
                    List<AssessmentDetailsResponseForCourse> AssessmentDetailsResponseForCourse = await _context.Set<AssessmentDetailsResponseForCourse>().FromSqlInterpolated($"EXEC SP_GET_ASSESSMENT_DETAILS_FOR_COURSE_ASSESSMENT_MARKS {OfferedCourseID}").ToListAsync();
                    List<GetRegisteredStudents> GetRegisteredStudents = await _context.Set<GetRegisteredStudents>().FromSqlInterpolated($"EXEC Sp_Get_Registered_Student {OfferedCourseID}").ToListAsync();
                    List<CourseMarksForExcel> CourseMarksForExcel = await _context.Set<CourseMarksForExcel>().FromSqlInterpolated($"EXEC SP_Get_Marks_For_Excel {OfferedCourseID}").ToListAsync();
                    
                    obj.GetRegisteredStudents = GetRegisteredStudents;
                    obj.AssessmentDetailsResponseForCourse = AssessmentDetailsResponseForCourse;
                    obj.CourseMarksForExcel = CourseMarksForExcel;
                    if (obj != null)
                        return obj;
                    else
                        return null;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetSelectedAssessmentAndMarksResponse>> IAssessmentMarks.GetStudentsMarksForSelectedAssessment(Assessment_Marks_Requst Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Assessment_ID = new SqlParameter("@Assessment_ID", Request.Assessment_ID);
                    var Student_ID = new SqlParameter("@Student_ID", Request.Student_ID);
                    List<GetSelectedAssessmentAndMarksResponse> GetSelectedAssessmentAndMarks = await _context.Set<GetSelectedAssessmentAndMarksResponse>().FromSqlInterpolated($"EXEC Sp_Get_Selected_Assessment_And_Student_Marks_Details {Assessment_ID},{Student_ID}").ToListAsync();
                    return GetSelectedAssessmentAndMarks;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
