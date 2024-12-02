using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.AssessmentDetails;
using OBE_Portal.Infrastructure.Interfaces.AssessmentDetails;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AssessmentDetailsController : ControllerBase
    {
        private readonly IAssessmentDetails _assessmentDetails;
        public AssessmentDetailsController(IAssessmentDetails assessmentDetails)
        {
            _assessmentDetails = assessmentDetails;
        }
        [HttpPost("GetAssessmentDetailsCourse")]
        public async Task<IActionResult> GetAssessmentDetailsCourse([FromBody] GetAssessmentDetailsForSDelectedCourse Request)
        {
            try
            {
                if (Request!= null)
                {
                    var respone = await _assessmentDetails.GetAssessmentDetailsCourse(Request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(null);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("SaveAssessmentDetailsCourse")]
        public async Task<IActionResult> SaveAssessmentDetailsCourse([FromBody] SaveAssessmentDetailsRequest Request)
        {
            try
            {
                if (Request!=null)
                {
                    var respone = await _assessmentDetails.SaveAssessmentDetailsCourse(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("SaveAssessmentDetailsLab")]
        public async Task<IActionResult> SaveAssessmentDetailsLab([FromBody] SaveAssessmentDetailsRequestLab Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentDetails.SaveAssessmentDetailsLab(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("DeleteSelectedAssessmentDetails")]
        public async Task<IActionResult> DeleteSelectedAssessmentDetails([FromBody] SelectedAssessmentRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentDetails.DeleteSelectedAssessmentDetails(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("UpdateAssessmentDetailsCourse")]
        public async Task<IActionResult> UpdateAssessmentDetailsCourse([FromBody] SaveAssessmentDetailsForUpdateRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentDetails.UpdateAssessmentDetailsCourse(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("UpdateAssessmentDetailsLab")]
        public async Task<IActionResult> UpdateAssessmentDetailsLab([FromBody] SaveAssessmentDetailsForUpdateRequestLab Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentDetails.UpdateAssessmentDetailsLab(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("SaveAssessmentDetailsFYP")]
        public async Task<IActionResult> SaveAssessmentDetailsFYP([FromBody] SaveAssessmentDetailsFYPRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentDetails.SaveAssessmentDetailsFYP(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("UpdateAssessmentDetailsFYP")]
        public async Task<IActionResult> UpdateAssessmentDetailsFYP([FromBody] SaveAssessmentDetailsForUpdateRequestFYP Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentDetails.UpdateAssessmentDetailsFYP(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
