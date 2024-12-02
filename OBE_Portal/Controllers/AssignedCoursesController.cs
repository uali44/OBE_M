using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.AssignedCourses;
using OBE_Portal.Infrastructure.Interfaces.AssignedCourses;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AssignedCoursesController : ControllerBase
    {
        private readonly IAssignedCourses IAssignedCourses;
        public AssignedCoursesController(IAssignedCourses assignedCourses)
        {
            IAssignedCourses = assignedCourses;
        }
        [HttpPost("GetAssignedCourses")]
        public async Task<IActionResult> GetAssignedCourses([FromBody] AssignedCoursesRequest Request) 
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var respone = await IAssignedCourses.GetAssignedCourses(Request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(null);
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
