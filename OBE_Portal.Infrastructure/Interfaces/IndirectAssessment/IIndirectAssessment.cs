﻿using OBE_Portal.Core.Entities.IndirectAssessment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.IndirectAssessment
{
    public interface IIndirectAssessment
    {
        Task<bool> AddSurvey(SurveyCreateRequest request);
        Task<bool> DeleteQuestion(int qid);
        Task<Allsurvey> GetAllSurvey(getSurveyRequest request);
        Task<SurveyResponseDto> GetSurvey(getSurveyRequest request);
        Task<StudentSurveyDetail> GetSurveyResponse(getstudentSurveyrequest request);
        Task<bool> SaveCSPForm(SaveCSPFormRequest request);
        Task<bool> SaveExitForm(SaveExitFormRequest request);
        Task<bool> SaveInternshipForm(SaveInternshipFormRequest request);
        Task<bool> SaveSurveyResponse(List<SurveyResponseRequest> request);
        Task<bool> SaveSurveyResponses(StdSurveyResponseDto request);
    }
}
