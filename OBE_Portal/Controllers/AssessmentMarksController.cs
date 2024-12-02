using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.AssessmentMarks;
using OBE_Portal.Infrastructure.Interfaces.AssessmentMarks;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AssessmentMarksController : Controller
    {
        private readonly IAssessmentMarks _assessmentMarks;
        public AssessmentMarksController(IAssessmentMarks assessmentMarks)
        {
            _assessmentMarks = assessmentMarks;
        }
        [HttpPost("GetRegisteredStudent")]
        public async Task<IActionResult> GetRegisteredStudent([FromBody] long Request)
        {
            try
            {
                if (Request> 0 )
                {
                    var respone = await _assessmentMarks.GetRegisteredStudent(Request).ConfigureAwait(true);
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
        [HttpPost("AddMarksThroughExcel")]
        public async Task<IActionResult> AddMarksThroughExcel([FromBody] List<Assessment> Request)
        {
            try
            {
                if (Request!= null)
                {
                    var respone = await _assessmentMarks.AddMarksThroughExcel(Request).ConfigureAwait(true);
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
        [HttpPost("GetStudentsMarksForSelectedAssessment")]
        public async Task<IActionResult> GetStudentsMarksForSelectedAssessment([FromBody] Assessment_Marks_Requst Request)
        {
            try
            {
                if (Request!= null)
                {
                    var respone = await _assessmentMarks.GetStudentsMarksForSelectedAssessment(Request).ConfigureAwait(true);
                    if (respone.Count > 0)
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
        [HttpPost("SaveUpdatedMarks")]
        public async Task<IActionResult> SaveUpdatedMarks([FromBody] List<Assessment_Marks_Update_Reqeust> Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _assessmentMarks.SaveUpdatedMarks(Request).ConfigureAwait(true);
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
