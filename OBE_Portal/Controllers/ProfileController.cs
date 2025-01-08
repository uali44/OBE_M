using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.Profile;
using OBE_Portal.Infrastructure.Interfaces.Profile;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]

    public class ProfileController : ControllerBase
    {
        private readonly IProfile profile;
        public ProfileController(IProfile Profile)
        {
            profile = Profile;

        }
        [HttpPost("AddFacultyData")]
        public async Task<IActionResult> AddFacultyData([FromBody] List<profileData> Request)
        {
            try
            {
                if (Request == null || !Request.Any())
                    return BadRequest("Invalid input data");
                if (Request != null)
                {
                    var respone = await profile.AddFacultyData(Request).ConfigureAwait(true);
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
