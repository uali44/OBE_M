﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.IndirectAssessment;
using OBE_Portal.Infrastructure.Implementations.IndirectAssessment;
using OBE_Portal.Infrastructure.Implementations.Profile;
using OBE_Portal.Infrastructure.Interfaces.IndirectAssessment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class IndirectAssessmentController : ControllerBase
    {
        private readonly IIndirectAssessment _indirectAssessment;
        public IndirectAssessmentController(IIndirectAssessment indirectAssessment)
        {
            _indirectAssessment = indirectAssessment;
        }
       
    
        [HttpPost("SaveExitForm")]
        public async Task<IActionResult> SaveExitForm(SaveExitFormRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveExitForm(request).ConfigureAwait(true);
                if (respone)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }
    

        [HttpPost("AddSurvey")]
        public async Task<IActionResult> AddSurvey(SurveyCreateRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.AddSurvey(request).ConfigureAwait(true);
                if (respone)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("GetSurvey")]
        public async Task<IActionResult> GetSurvey(getSurveyRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.GetSurvey(request).ConfigureAwait(true);
                if (respone != null)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("GetAllSurvey")]
        public async Task<IActionResult> GetAllSurvey(getSurveyRequest request)
        {
            if (request.SurveyIntakeID == 0)
            {
                return BadRequest("Invalid data received.");

            }
            try
            {
                var respone = await _indirectAssessment.GetAllSurvey(request).ConfigureAwait(true);
                if (respone != null)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }


        [HttpPost("DeleteQuestion")]
        public async Task<IActionResult> DeleteQuestion(DeleteRequest request)
        {
            try
            {
                var response = await _indirectAssessment.DeleteQuestion(request).ConfigureAwait(true);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("SaveSurveyResponses")]
        public async Task<IActionResult> SaveSurveyResponses(List<SaveStudentResponseDTO> request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveSurveyResponses(request).ConfigureAwait(true);
                if (respone)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }
       
        [HttpPost("GetSurveyResponse")]
        public async Task<IActionResult> GetSurveyRespones([FromBody] int studentId)
        {
            try
            {
                var respone = await _indirectAssessment.GetSurveyResponse(studentId).ConfigureAwait(true);
                if (respone != null)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
