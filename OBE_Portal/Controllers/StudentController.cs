using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.Student;
using OBE_Portal.Infrastructure.Interfaces.Student;
using System;
using System.Threading.Tasks;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IStudent _Student;
        public StudentController(IStudent Student)
        {
            _Student = Student;
        }
        [HttpPost("GetPLOsResultForStudent")]
        public async Task<IActionResult> GetPLOsResultForStudent([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _Student.GetPLOsResultForStudent(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost("GetRegisteredCoursesDetails")]
        public async Task<IActionResult> GetRegisteredCoursesDetails([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _Student.GetRegisteredCoursesDetails(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost("GetCourseCLOSForStudent")]
        public async Task<IActionResult> GetCourseCLOSForStudent([FromBody] GetCoursesDataRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Student.GetCourseCLOSForStudent(Request).ConfigureAwait(true);
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
        [HttpPost("GetCourseAssessmentDetailsForStudent")]
        public async Task<IActionResult> GetCourseAssessmentDetailsForStudent([FromBody] GetCoursesDataRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Student.GetCourseAssessmentDetailsForStudent(Request).ConfigureAwait(true);
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
    }
}
