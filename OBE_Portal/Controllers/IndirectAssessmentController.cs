using Microsoft.AspNetCore.Authorization;
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
        [HttpPost("SaveCSPForm")]
        public async Task<IActionResult> SaveCSPForm(SaveCSPFormRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveCSPForm(request).ConfigureAwait(true);
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
        [HttpPost("SaveInternshipForm")]
        public async Task<IActionResult> SaveInternshipForm(SaveInternshipFormRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveInternshipForm(request).ConfigureAwait(true);
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
            if (request.Deptid == 0)
            {
                return BadRequest("Invalid Deptid received.");

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
        public async Task<IActionResult> DeleteQuestion([FromBody] int QID)
        {
            try
            {
                var response = await _indirectAssessment.DeleteQuestion(QID).ConfigureAwait(true);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("SaveSurveyResponses")]
        public async Task<IActionResult> SaveSurveyResponses(StdSurveyResponseDto request)
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
        [HttpPost("SaveSurveyResponse")]
        public async Task<IActionResult> SaveSurveyResponse(List<SurveyResponseRequest> request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveSurveyResponse(request).ConfigureAwait(true);
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
        [HttpPost("GetSurveyRespones")]
        public async Task<IActionResult> GetSurveyRespones(getstudentSurveyrequest request)
        {
            try
            {
                var respone = await _indirectAssessment.GetSurveyResponse(request).ConfigureAwait(true);
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
