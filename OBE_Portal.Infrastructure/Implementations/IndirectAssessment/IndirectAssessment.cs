using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.IndirectAssessment;
using OBE_Portal.Infrastructure.Interfaces.IndirectAssessment;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.IndirectAssessment
{
    public class IndirectAssessment: IIndirectAssessment
    {
        private readonly ApplicationDbContext _context;
        public IndirectAssessment(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<bool> IIndirectAssessment.SaveCSPForm(SaveCSPFormRequest request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var CSPQuestion1 = new SqlParameter("@CSPQuestion1", request.CSPQuestion1);
                    var CSPQuestion2 = new SqlParameter("@CSPQuestion2", request.CSPQuestion2);
                    var CSPQuestion3 = new SqlParameter("@CSPQuestion3", request.CSPQuestion3);
                    var CSPQuestion4 = new SqlParameter("@CSPQuestion4", request.CSPQuestion4);
                    var CSPQuestion5 = new SqlParameter("@CSPQuestion5", request.CSPQuestion5);
                    var CSPQuestion6 = new SqlParameter("@CSPQuestion6", request.CSPQuestion6);
                    var CSPQuestion7 = new SqlParameter("@CSPQuestion7", request.CSPQuestion7);
                    var CSPSurveyFormRemarks = new SqlParameter("@CSPSurveyFormRemarks", request.CSPSurveyFormRemarks);
                    var StudentID = new SqlParameter("@StudentID", request.StudentID);

                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Save_CSP_Survey_Student_Details @CSPQuestion1,@CSPQuestion2,@CSPQuestion3,@CSPQuestion4,@CSPQuestion5,@CSPQuestion6,@CSPQuestion7,@CSPSurveyFormRemarks,@StudentID",
                            CSPQuestion1, CSPQuestion2, CSPQuestion3, CSPQuestion4, CSPQuestion5, CSPQuestion6, CSPQuestion7, CSPSurveyFormRemarks, StudentID);
                    if (response > 0)
                    {
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
        async Task<bool> IIndirectAssessment.SaveExitForm(SaveExitFormRequest request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var ExitQuestion1 = new SqlParameter("@ExitQuestion1", request.ExitQuestion1);
                    var ExitQuestion2 = new SqlParameter("@ExitQuestion2", request.ExitQuestion2);
                    var ExitQuestion3 = new SqlParameter("@ExitQuestion3", request.ExitQuestion3);
                    var ExitQuestion4 = new SqlParameter("@ExitQuestion4", request.ExitQuestion4);
                    var ExitQuestion5 = new SqlParameter("@ExitQuestion5", request.ExitQuestion5);
                    var ExitQuestion6 = new SqlParameter("@ExitQuestion6", request.ExitQuestion6);
                    var ExitQuestion7 = new SqlParameter("@ExitQuestion7", request.ExitQuestion7);
                    var ExitQuestion8 = new SqlParameter("@ExitQuestion8", request.ExitQuestion8);
                    var ExitQuestion9 = new SqlParameter("@ExitQuestion9", request.ExitQuestion9);
                    var ExitQuestion10 = new SqlParameter("@ExitQuestion10", request.ExitQuestion10);
                    var ExitQuestion11 = new SqlParameter("@ExitQuestion11", request.ExitQuestion11);
                    var ExitQuestion12 = new SqlParameter("@ExitQuestion12", request.ExitQuestion12);
                    var ExitSurveyFormRemarks = new SqlParameter("@ExitSurveyFormRemarks", request.ExitSurveyFormRemarks);
                    var StudentID = new SqlParameter("@StudentID", request.StudentID);

                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Save_Exit_Survey_Student_Details @ExitQuestion1,@ExitQuestion2,@ExitQuestion3,@ExitQuestion4,@ExitQuestion5,@ExitQuestion6,@ExitQuestion7,@ExitQuestion8,@ExitQuestion9,@ExitQuestion10,@ExitQuestion11,@ExitQuestion12,@ExitSurveyFormRemarks,@StudentID",
                            ExitQuestion1, ExitQuestion2, ExitQuestion3, ExitQuestion4, ExitQuestion5, ExitQuestion6, ExitQuestion7, ExitQuestion8, ExitQuestion9, ExitQuestion10, ExitQuestion11, ExitQuestion12, ExitSurveyFormRemarks, StudentID);
                    if (response > 0)
                    {
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
        async Task<bool> IIndirectAssessment.SaveInternshipForm(SaveInternshipFormRequest request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var InternshipQuestion1 = new SqlParameter("@InternshipQuestion1", request.InternshipQuestion1);
                    var InternshipQuestion2 = new SqlParameter("@InternshipQuestion2", request.InternshipQuestion2);
                    var InternshipQuestion3 = new SqlParameter("@InternshipQuestion3", request.InternshipQuestion3);
                    var InternshipQuestion4 = new SqlParameter("@InternshipQuestion4", request.InternshipQuestion4);
                    var InternshipQuestion5 = new SqlParameter("@InternshipQuestion5", request.InternshipQuestion5);
                    var InternshipQuestion6 = new SqlParameter("@InternshipQuestion6", request.InternshipQuestion6);
                    var InternshipQuestion7 = new SqlParameter("@InternshipQuestion7", request.InternshipQuestion7);
                    var InternshipQuestion8 = new SqlParameter("@InternshipQuestion8", request.InternshipQuestion8);
                    var InternshipQuestion9 = new SqlParameter("@InternshipQuestion9", request.InternshipQuestion9);
                    var InternshipQuestion10 = new SqlParameter("@InternshipQuestion10", request.InternshipQuestion10);
                    var InternshipQuestion11 = new SqlParameter("@InternshipQuestion11", request.InternshipQuestion11);
                    var InternshipQuestion12 = new SqlParameter("@InternshipQuestion12", request.InternshipQuestion12);
                    var InternshipSurveyFormRemarks = new SqlParameter("@InternshipSurveyFormRemarks", request.InternshipSurveyFormRemarks);
                    var StudentID = new SqlParameter("@StudentID", request.StudentID);

                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Save_Internship_Survey_Student_Details @InternshipQuestion1,@InternshipQuestion2,@InternshipQuestion3,@InternshipQuestion4,@InternshipQuestion5,@InternshipQuestion6,@InternshipQuestion7,@InternshipQuestion8,@InternshipQuestion9,@InternshipQuestion10,@InternshipQuestion11,@InternshipQuestion12,@InternshipSurveyFormRemarks,@StudentID",
                            InternshipQuestion1, InternshipQuestion2, InternshipQuestion3, InternshipQuestion4, InternshipQuestion5, InternshipQuestion6, InternshipQuestion7, InternshipQuestion8, InternshipQuestion9, InternshipQuestion10, InternshipQuestion11, InternshipQuestion12, InternshipSurveyFormRemarks, StudentID);
                    if (response > 0)
                    {
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

        async Task<bool> IIndirectAssessment.AddSurvey(SurveyCreateRequest request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    // Step 1: Insert SurveyMainDetail
                    var surveyType = new SqlParameter("@SurveyType", request.SurveyMainDetail.SurveyType);
                    var surveyDeptID = new SqlParameter("@SurveyDeptID", request.SurveyMainDetail.SurveyDeptID);
                    var surveyID = new SqlParameter("@SurveyID", SqlDbType.Int) { Direction = ParameterDirection.Output };

                    // Execute usp_InsertSurveyMainDetail
                    var responseMain = await _context.Database.ExecuteSqlRawAsync(
                        "EXEC AddSurveyMainDetail @SurveyType, @SurveyDeptID, @SurveyID OUTPUT",
                        surveyType, surveyDeptID, surveyID
                    );

                    if (responseMain <= 0)
                    {
                        return false; // Failed to insert SurveyMainDetail
                    }

                    int generatedSurveyID = (int)surveyID.Value; // Get the generated SurveyID

                    // Step 2: Insert SurveySubDetail and SurveySubDetailOption
                    foreach (var question in request.SurveySubDetails)
                    {
                        var questionParam = new SqlParameter("@Question", question.Question);
                        var qTypeParam = new SqlParameter("@QType", question.QType);
                        var mappingParam = new SqlParameter("@Mapping", question.Mapping);
                        var createdByParam = new SqlParameter("@CreatedBy", request.SurveyMainDetail.CreatedBy); // Replace with actual user
                        var createdDateParam = new SqlParameter("@CreatedDate", DateTime.UtcNow);
                        var qid = new SqlParameter("@QID", SqlDbType.Int) { Direction = ParameterDirection.Output };

                        // Execute usp_InsertSurveySubDetail
                        var responseSub = await _context.Database.ExecuteSqlRawAsync(
                            "EXEC AddSurveySubDetail @SurveyID, @Question, @QType, @Mapping, @CreatedBy, @CreatedDate, @QID OUTPUT",
                            new SqlParameter("@SurveyID", generatedSurveyID),
                            questionParam,
                            qTypeParam,
                            mappingParam,
                            createdByParam,
                            createdDateParam,
                            qid
                        );

                        if (responseSub <= 0)
                        {
                            return false; // Failed to insert SurveySubDetail
                        }

                        int generatedQID = (int)qid.Value; // Get the generated QID

                        // Step 3: Insert SurveySubDetailOption (if QType is Multiple Choice)
                        if (question.QType == "Multiple Choice")
                        {
                            foreach (var option in question.Options)
                            {
                                var optionParam = new SqlParameter("@Options", option);

                                // Execute usp_InsertSurveySubDetailOption
                                var responseOption = await _context.Database.ExecuteSqlRawAsync(
                                    "EXEC AddSurveySubDetailOption @QID, @Options",
                                    new SqlParameter("@QID", generatedQID),
                                    optionParam
                                );

                                if (responseOption <= 0)
                                {
                                    return false; // Failed to insert SurveySubDetailOption
                                }
                            }
                        }
                    }

                    return true; // Successfully saved all data
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

         async Task<SurveyResponseDto> IIndirectAssessment.GetSurvey(getSurveyRequest request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var survey = new SurveyResponseDto();
                    var surveyType = request.Surveytype;
                    var surveyDeptID = request.Deptid;
                    // Step 1: Get SurveyMainDetail
                    var surveyMainDetailParams = new SqlParameter("@SurveyType", surveyType);
                    var surveyDeptIDParam = new SqlParameter("@SurveyDeptID", surveyDeptID);

                    var mainDetail = await _context.Set<SurveyMainDetail>()
                        .FromSqlInterpolated($"EXEC GetSurveyMainDetail @SurveyType={surveyType}, @SurveyDeptID={surveyDeptID}").ToListAsync();
                    //.AsNoTracking()
                    //.FirstOrDefaultAsync();

                    if (mainDetail == null ||mainDetail.Count<=0)
                    {
                        return null; // No data found
                    }
                    else
                    {
                        var mainDetailList = mainDetail.FirstOrDefault();
                        // Map SurveyMainDetail
                        if (mainDetailList != null)
                        {
                            survey.SurveyID = mainDetailList.SurveyID;
                            survey.SurveyType = mainDetailList.SurveyType;
                            survey.SurveyDeptID = mainDetailList.SurveyDeptID;
                        }

                        // Step 2: Get SurveySubDetails
                        var questions = await _context.Set<SurveySubDetail>()
                            .FromSqlInterpolated($"EXEC GetSurveySubDetailsA @SurveyType={surveyType}, @SurveyDeptID={ surveyDeptID}")
                            .ToListAsync();

                        survey.Questions = new List<SurveyQuestionDto>();

                        foreach (var question in questions)
                        {
                            var questionDto = new SurveyQuestionDto
                            {
                                QID = question.QID,
                                Question = question.Question,
                                QType = question.QType,
                                Mapping = question.Mapping,
                                Options = new List<string>()
                            };

                            // Step 3: Get SurveySubDetailOptions (if QType is Multiple Choice)
                            if (question.QType == "Multiple Choice")
                            {
                                //.FromSqlRaw("EXEC GetSurveySubDetailOptions @QID", new SqlParameter("@QID", question.QID))
                                //        .AsNoTracking()

                                var options = await _context.Set<SurveySubDetailOption>().FromSqlInterpolated($"EXEC GetSurveySubDetailOptions @QID={question.QID}").AsEnumerable())  // Forces EF Core to execute on the client side
    .Select(o => o.Options)
    .ToList(); ;



                                questionDto.Options = options;
                            }

                            survey.Questions.Add(questionDto);
                        }

                        return survey;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
