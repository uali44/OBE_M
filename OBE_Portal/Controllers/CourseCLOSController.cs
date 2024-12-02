using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.CourseCLOS;
using OBE_Portal.Infrastructure.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CourseCLOSController : ControllerBase
    {
        private readonly ICourseCLOS _courseCLOS;
        public CourseCLOSController(ICourseCLOS courseCLOS)
        {
            _courseCLOS = courseCLOS;
        }
        [HttpPost("GetCourseCLOS")]
        public async Task<IActionResult> GetCourseCLOS([FromBody] long Request)
        {
            try
            {
                if (Request > 0)
                {
                    var respone = await _courseCLOS.GetCourseCLOS(Request).ConfigureAwait(true);
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
        [HttpPost("SaveCourseAddedCLOS")]
        public async Task<IActionResult> SaveCourseAddedCLOS([FromBody] List<Save_Course_Added_CLOS_Request> Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _courseCLOS.SaveCourseAddedCLOS(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(false);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("DeleteCourseAddedCLOS")]
        public async Task<IActionResult> DeleteCourseAddedCLOS([FromBody] Update_Course_CLOS_Request Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _courseCLOS.DeleteCourseAddedCLOS(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(false);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("UpdateCourseAddedCLOS")]
        public async Task<IActionResult> UpdateCourseAddedCLOS([FromBody] Update_Course_Added_CLOS_Request Request)
        {
            try
            {
                if (Request !=  null)
                {
                    var respone = await _courseCLOS.UpdateCourseAddedCLOS(Request).ConfigureAwait(true);
                    if (respone)
                        return Ok(respone);
                    else
                        return Ok(false);
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
