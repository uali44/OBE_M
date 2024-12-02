using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.Dashboard;
using OBE_Portal.Infrastructure.Interfaces.Dashboard;


namespace OBE_Portal.Controllers
{

    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboard _dashboard;
        public DashboardController(IDashboard dashboard)
        {
            _dashboard = dashboard;
        }
        [HttpPost("GetAssessmentDataForDashboardCourse")]
        public async Task<IActionResult> GetAssessmentDataForDashboardCourse([FromBody] Dashboard_Request request)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var respone = await _dashboard.GetAssessmentDataForDashboardCourse(request).ConfigureAwait(true);
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
