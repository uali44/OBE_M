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
using System.Diagnostics;
using OBE_Portal.Infrastructure.Implementations.Student;

namespace OBE_Portal.Infrastructure.Implementations.IndirectAssessment
{
    public class IndirectAssessment : IIndirectAssessment
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
                   
                    var mainDetail= await _context.Set<SurveyMainDetail>()
                        .FromSqlInterpolated($"EXEC GetSurveyMainDetail @SurveyType={request.SurveyMainDetail.SurveyType},@SurveyIntakeID={request.SurveyMainDetail.SurveyIntakeID}").ToListAsync();
                 
                    if (mainDetail != null && mainDetail.Count > 0)
                  
                    {
                        var mainDetailList = mainDetail.FirstOrDefault();
                      
                        foreach (var question in request.SurveySubDetails)
                        {
                            // Add new question to the existing survey
                            var qid = new SqlParameter("@QID", SqlDbType.Int) { Direction = ParameterDirection.Output };

                            var responseSub = await _context.Database.ExecuteSqlRawAsync(
                                "EXEC AddSurveySubDetail @SurveyID, @Question, @QType, @CreatedBy,@Marks,@PLOID,@PEOID ,@QID OUTPUT",
                                new SqlParameter("@SurveyID", mainDetailList.SurveyID),
                                new SqlParameter("@Question", question.Question),
                                new SqlParameter("@QType", question.QType),
                              
                                new SqlParameter("@CreatedBy", request.SurveyMainDetail.CreatedBy),
                          
                                
                                   new SqlParameter("@Marks", question.Marks),
                                     new SqlParameter("@PLOID", question.PLOID),
                                       new SqlParameter("@PEOID", question.PEOID),
                                qid
                            );

                            int generatedQID = (int)qid.Value; // Get the generated QID

                            // Add options if the question is "Multiple Choice"
                            if (question.QType == "Multiple Choice")
                            {
                                foreach (var option in question.Options)
                                {
                                    await _context.Database.ExecuteSqlRawAsync(
                                       "EXEC AddSurveySubDetailOption @QID, @Options,@CreatedBy",
                                       new SqlParameter("@QID", generatedQID),
                                       new SqlParameter("@Options", option),
                                       new SqlParameter("@CreatedBy", request.SurveyMainDetail.CreatedBy)
                                       );
                                }
                            }
                        }

                        return true; // Successfully added new questions/options
                    }
                    else
                    {
                        // Step 3: Create a New Survey (if it does not exist)
                        var surveyType = new SqlParameter("@SurveyType", request.SurveyMainDetail.SurveyType);
                    
                        var surveyID = new SqlParameter("@SurveyID", SqlDbType.Int) { Direction = ParameterDirection.Output };
                        var surveyIntakeID = new SqlParameter("@SurveyIntakeID", request.SurveyMainDetail.SurveyIntakeID);
                        var createdBy = new SqlParameter("@CreatedBy", request.SurveyMainDetail.CreatedBy);



                        var responseMain = await _context.Database.ExecuteSqlRawAsync(
                            "EXEC AddSurveyMainDetail @SurveyType, @SurveyIntakeID,@CreatedBy, @SurveyID OUTPUT",
                            surveyType,surveyIntakeID,createdBy, surveyID
                        );

                        if (responseMain <= 0)
                        {
                            return false; // Failed to create new survey
                        }
                        
                        int generatedSurveyID = (int)surveyID.Value;

                        // Step 4: Insert SurveySubDetails and SurveySubDetailOptions
                        foreach (var question in request.SurveySubDetails)
                        {
                            var qid = new SqlParameter("@QID", SqlDbType.Int) { Direction = ParameterDirection.Output };

                            var responseSub = await _context.Database.ExecuteSqlRawAsync(
                               "EXEC AddSurveySubDetail @SurveyID, @Question, @QType, @CreatedBy,@Marks,@PLOID,@PEOID ,@QID OUTPUT",
                               new SqlParameter("@SurveyID", generatedSurveyID),
                               new SqlParameter("@Question", question.Question),
                               new SqlParameter("@QType", question.QType),

                               new SqlParameter("@CreatedBy", request.SurveyMainDetail.CreatedBy),


                                  new SqlParameter("@Marks", question.Marks),
                                    new SqlParameter("@PLOID", question.PLOID),
                                      new SqlParameter("@PEOID", question.PEOID),
                               qid
                           );

                            int generatedQID = (int)qid.Value;

                            // Add options for "Multiple Choice"
                            if (question.QType == "Multiple Choice")
                            {
                                foreach (var option in question.Options)
                                {
                                    await _context.Database.ExecuteSqlRawAsync(
                                        "EXEC AddSurveySubDetailOption @QID, @Options,@CreatedBy",
                                        new SqlParameter("@QID", generatedQID),
                                        new SqlParameter("@Options", option),
                                        new SqlParameter("@CreatedBy",request.SurveyMainDetail.CreatedBy)
                                    );
                                }
                            }
                        }
                        return true;
                    }
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
                  
                    var surveyIntakeID = request.SurveyIntakeID;
                    // Step 1: Get SurveyMainDetail
                    var surveyMainDetailParams = new SqlParameter("@SurveyType", surveyType);
               

                    var mainDetail = await _context.Set<SurveyMainDetail>()
                        .FromSqlInterpolated($"EXEC GetSurveyMainDetail @SurveyType={surveyType}, @SurveyIntakeID={surveyIntakeID}").ToListAsync();
                    

                    if (mainDetail == null || mainDetail.Count <= 0)
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
                        
                        }

                        // Step 2: Get SurveySubDetails
                        var questions = await _context.Set<SurveySubDetail>()
                            .FromSqlInterpolated($"EXEC GetSurveySubDetailsA @SurveyType={surveyType},@SurveyIntakeID={surveyIntakeID}")
                            .ToListAsync();

                        survey.Questions = new List<SurveyQuestionDto>();

                        foreach (var question in questions)
                        {
                            var questionDto = new SurveyQuestionDto
                            {
                                QID = question.QID,
                                Question = question.Question,
                                QType = question.QType,
                              
                                Options = new List<SurveySubDetailOption>(),
                                  PLOID = question.PLOID,
                                PEOID = question.PEOID,

                            };

                            // Step 3: Get SurveySubDetailOptions (if QType is Multiple Choice)
                            if (question.QType == "Multiple Choice")
                            {
                                //.FromSqlRaw("EXEC GetSurveySubDetailOptions @QID", new SqlParameter("@QID", question.QID))
                                //        .AsNoTracking()

                                var options = await _context.Set<SurveySubDetailOption>().FromSqlInterpolated($"EXEC GetSurveySubDetailOptions @QID={question.QID}").ToListAsync();




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



        async Task<bool> IIndirectAssessment.DeleteQuestion(DeleteRequest request)
        {
            try
            {


                // Then delete the question
                var result = await _context.Database.ExecuteSqlRawAsync(
                    "EXEC DeleteSurveySubDetail @QID,@ModifiedBy",
                    new SqlParameter("@QID", request.QID),
                     new SqlParameter("@ModifiedBy", request.ModifiedBy)
                );

                return result > 0; // Return true if deletion was successful
            }
            catch (Exception)
            {
                throw;
            }
        }



        async Task<Allsurvey> IIndirectAssessment.GetAllSurvey(getSurveyRequest request)
        {
            if (request.SurveyIntakeID == 0)
            {
                return null;

            }

            try
            {
            
                var CSP = await GetSurvey("CSP", request.SurveyIntakeID);
                var Internship = await GetSurvey("Internship",request.SurveyIntakeID);
                var Alumni = await GetSurvey("Alumni",  request.SurveyIntakeID);
                var Exit = await GetSurvey("Exit", request.SurveyIntakeID);
                var Employer = await GetSurvey("Employer", request.SurveyIntakeID);
                return new Allsurvey
                {
                    CSP = CSP,
                    Internship = Internship,
                    Alumni = Alumni,
                    Exit = Exit,
                    Employer = Employer
                };








            }
            catch (Exception)
            {
                throw;
            }
        }


        async Task<SurveyResponseDto> GetSurvey(String Surveytype, int intakeID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                   
                    var survey = new SurveyResponseDto();
                    var surveyType = Surveytype;
                  
                    if (intakeID == 0)
                    {
                        return null;

                    }
                    // Step 1: Get SurveyMainDetail
                    var surveyMainDetailParams = new SqlParameter("@SurveyType", surveyType);
            

                    var mainDetail = await _context.Set<SurveyMainDetail>()
                        .FromSqlInterpolated($"EXEC GetSurveyMainDetail @SurveyType={surveyType},@SurveyIntakeID={intakeID}").ToListAsync();
                  

                    if (mainDetail == null || mainDetail.Count <= 0)
                    {
                        return survey; // No data found
                    }
                    else
                    {
                        //var mainDetailList = mainDetail.FirstOrDefault();
                        //// Map SurveyMainDetail
                        //if (mainDetailList != null)
                        //{
                        //    survey.SurveyID = mainDetailList.SurveyID;
                        //    survey.SurveyType = mainDetailList.SurveyType;
                        
                        //}

                        // Step 2: Get SurveySubDetails
                        var questions = await _context.Set<SurveySubDetail>()
                            .FromSqlInterpolated($"EXEC GetSurveySubDetailsA @SurveyType={surveyType},@SurveyIntakeID={intakeID}")
                            .ToListAsync();

                        survey.Questions = new List<SurveyQuestionDto>();

                        foreach (var question in questions)
                        {
                            var questionDto = new SurveyQuestionDto
                            {
                                QID = question.QID,
                                Question = question.Question,
                                QType = question.QType,
                              
                                Options = new List<SurveySubDetailOption>(),
                                PLOID=question.PLOID,
                                PEOID = question.PEOID,
                            };

                            // Step 3: Get SurveySubDetailOptions (if QType is Multiple Choice)
                            if (question.QType == "Multiple Choice")
                            {
                               

                                var options = await _context.Set<SurveySubDetailOption>().FromSqlInterpolated($"EXEC GetSurveySubDetailOptions @QID={question.QID}").ToListAsync();




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


        async Task<bool> IIndirectAssessment.SaveSurveyResponses(List<SaveStudentResponseDTO> request)
        {
            try
            {
                int rowsAffected = 0;

                foreach (var response in request)
                {
                    rowsAffected += await _context.Database.ExecuteSqlRawAsync(
                        "EXEC AddStudentResponse @StudentID, @QID, @OptionID, @Answer, @CreatedBy",
                        new SqlParameter("@StudentID", response.StudentID),
                        new SqlParameter("@QID", response.QID),
                        new SqlParameter("@OptionID", response.OptionID ?? (object)DBNull.Value),
                        new SqlParameter("@Answer", response.Answer ?? (object)DBNull.Value),
                        new SqlParameter("@CreatedBy", response.CreatedBy)
                    );
                }

                return rowsAffected > 0; 

            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<List<SurveyResponse>> IIndirectAssessment.GetSurveyResponse(int studentId)
        {
            try
            {
              
                var response = await _context.Set<SurveyResponse>()
             .FromSqlRaw("EXEC GetStudentResponses @StudentID",
                 new SqlParameter("@StudentID", studentId)).ToListAsync();
            


                return response;
            }
            catch (Exception)
            {
               throw;
            }
        
    }

      







    } }

