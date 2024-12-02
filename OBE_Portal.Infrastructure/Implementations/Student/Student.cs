using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.Student;
using OBE_Portal.Infrastructure.Interfaces.Student;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.Student
{
    public class Student: IStudent
    {
        private readonly ApplicationDbContext _context;
        public Student(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<AllStudentPLOsDetails> GetPLOsResultForStudent(long StudentID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    AllStudentPLOsDetails AllStudentPLOsDetailsObj = new AllStudentPLOsDetails();
                    var Student_ID = new SqlParameter("@StudentID", StudentID);
                    List<StudentPLOsAnalysisResult> StudentPLOsAnalysisResult = await _context.Set<StudentPLOsAnalysisResult>().
                        FromSqlInterpolated($"EXEC Sp_PLO_Analysis_Student {Student_ID}").ToListAsync();
                    if (StudentPLOsAnalysisResult.Count > 0)
                    {
                        List<AllPLOSStudentResponse> response = await _context.Set<AllPLOSStudentResponse>().FromSqlInterpolated($"EXEC Sp_Get_All_PLO_Details_Student {Student_ID}").ToListAsync();
                        List<StudentSummaryResponse> StudentSummaryResponse = await _context.Set<StudentSummaryResponse>().FromSqlInterpolated($"EXEC Sp_Get_Summary_Count_Student {Student_ID}").ToListAsync();
                        if (response != null)
                        {
                            AllStudentPLOsDetailsObj.StudentPLOsAnalysisResult = StudentPLOsAnalysisResult[0];
                            AllStudentPLOsDetailsObj.AllPLOSStudentResponse = response;
                            AllStudentPLOsDetailsObj.StudentSummaryResponse = StudentSummaryResponse[0];
                            return AllStudentPLOsDetailsObj;
                        }
                        else
                        {
                            return null;
                        }
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public async Task<List<AllRegisteredCoursesDetailsResponse>> GetRegisteredCoursesDetails(long StudentID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    AllStudentPLOsDetails AllStudentPLOsDetailsObj = new AllStudentPLOsDetails();
                    var Student_ID = new SqlParameter("@StudentID", StudentID);
                    List<AllRegisteredCoursesDetailsResponse> response = await _context.Set<AllRegisteredCoursesDetailsResponse>().FromSqlInterpolated($"EXEC SP_Get_All_Registered_Courses_Details_For_Student {Student_ID}").ToListAsync();
                    if (response.Count > 0)
                        return response;
                    else
                        return null;
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public async Task<List<GetCourseCLOSResponse>> GetCourseCLOSForStudent(GetCoursesDataRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    var StudentID = new SqlParameter("@StudentID", Request.StudentID);
                    List<GetCourseCLOSResponse> getCourseCLOS = await _context.Set<GetCourseCLOSResponse>().FromSqlInterpolated($"EXEC Sp_Get_Course_CLOS_For_Student {OfferedCourseID},{StudentID}").ToListAsync();
                    if (getCourseCLOS.Count > 0)
                    {
                        return getCourseCLOS;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        public async Task<List<GetAllAssessmentAndMarksResponse>> GetCourseAssessmentDetailsForStudent(GetCoursesDataRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request.OfferedCourseID);
                    var StudentID = new SqlParameter("@StudentID", Request.StudentID);
                    List<GetAllAssessmentAndMarksResponse> getCourseCLOS = await _context.Set<GetAllAssessmentAndMarksResponse>().FromSqlInterpolated($"EXEC Sp_Get_Selected_Assessment_And_Student_Marks_Details_For_Student {OfferedCourseID},{StudentID}").ToListAsync();
                    if (getCourseCLOS.Count > 0)
                    {
                        return getCourseCLOS;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
