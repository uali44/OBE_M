using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.CompiledResult;
using OBE_Portal.Infrastructure.Interfaces.CompiledResult;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CompiledResultController : ControllerBase
    {
        private readonly ICompiledResult _compiledResult;
        public CompiledResultController(ICompiledResult compiledResult)
        {
            _compiledResult = compiledResult;
        }
        [HttpPost("GetAllStudentAndGradesForCourse")]
        public async Task<IActionResult> GetAllStudentAndGradesForCourse([FromBody] CompiledResultModal_Request Request)
        {
            try
            {
                if (Request!= null)
                {
                    var respone = await _compiledResult.Get_All_Student_And_Grades_For_Course(Request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return BadRequest(null);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("GetAssessmentMarksDetails")]
        public async Task<IActionResult> GetAssessmentMarksDetails([FromBody] Assessment_Marks_Modal_Request Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _compiledResult.Get_Assessment_Marks_Details(Request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return BadRequest(null);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("GetCLOSMarksDetails")]
        public async Task<IActionResult> GetCLOSMarksDetails([FromBody] Assessment_Marks_Modal_Request Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _compiledResult.Get_CLOS_Marks_Details(Request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return BadRequest(null);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("SubmitResult")]
        public async Task<IActionResult> SubmitResult([FromBody] CompiledResultModal_Request Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _compiledResult.Freez_Course_Attainment(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return BadRequest(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("GetAllStudentAndGradesForFYP")]
        public async Task<IActionResult> GetAllStudentAndGradesForFYP([FromBody] CompiledResultModal_Request Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _compiledResult.Get_All_Student_And_Grades_For_FYP(Request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return BadRequest(null);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
