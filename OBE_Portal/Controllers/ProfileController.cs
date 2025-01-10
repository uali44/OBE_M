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


        [HttpPost("AddFacultyEducation")]
        public async Task<IActionResult> AddFacultyEducation([FromBody] List<education> Request)
        {
            try
            {
                if (Request == null || !Request.Any())
                    return BadRequest("Invalid input data");
                if (Request != null)
                {
                    var respone = await profile.AddFacultyEducation(Request).ConfigureAwait(true);
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

        [HttpPost("AddFacultyExperience")]
        public async Task<IActionResult> AddFacultyExperience([FromBody] List<experience> Request)
        {
            try
            {
                if (Request == null || !Request.Any())
                    return BadRequest("Invalid input data");
                if (Request != null)
                {
                    var respone = await profile.AddFacultyExperience(Request).ConfigureAwait(true);
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


        [HttpGet("GetActivities")]
        public async Task<IActionResult> GetActivities()
        {
            try
            {
                var respone = await profile.GetActivities().ConfigureAwait(true);
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

        [HttpPost("GetActivitySubDetails")]
        public async Task<IActionResult> GetActivitySubDetails([FromBody] SubDetailRequest Request )
        {
            try
            {
                var respone = await profile.GetActivitySubDetails(Request.ActivityID).ConfigureAwait(true);
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

        [HttpPost("SaveActivityData")]
        public async Task<IActionResult> SaveActivityData([FromBody] ActivityData activityData)
        {
            try
            {
                var response = await profile.SaveActivityData(activityData).ConfigureAwait(true);
                return Ok(response);
            }
            catch (Exception )
            {
                throw;
            }
        }



        [HttpPost("GetFacultyActivity")]
        public async Task<IActionResult> GetFacultyActivity([FromBody] int FacultyID)
        {
            try
            {
                var respone = await profile.GetFacultyActivity(FacultyID).ConfigureAwait(true);
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

        [HttpPost("GetFacultyDetails")]
        public async Task<IActionResult> GetFacultyDetails([FromBody] int FacultyID)
        {
            try
            {
                var respone = await profile.GetFacultyDetails(FacultyID).ConfigureAwait(true);
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
