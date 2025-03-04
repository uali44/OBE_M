﻿using System;
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
        public async Task<IActionResult> SaveActivityData([FromBody] List<ActivityData> activityData)
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
        public async Task<IActionResult> GetFacultyDetails([FromBody] long FacultyID)
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


        [HttpPost("GetEducation")]
        public async Task<IActionResult> GetEducation([FromBody] int facultyMemberID)
        {
            try
            {
                var educationData = await profile.GetEducation(facultyMemberID).ConfigureAwait(true) ;
                return Ok(educationData);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("GetExperience")]
        public async Task<IActionResult> GetExperience([FromBody] int facultyMemberID)
        {
            try
            {
                var educationData = await profile.GetExperience(facultyMemberID).ConfigureAwait(true);
                return Ok(educationData);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("DeleteExperience")]
        public async Task<IActionResult> DeleteExperience(DeleteRequest request)
        {
            try
            {
                var response = await profile.DeleteExperience(request).ConfigureAwait(true);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost("DeleteEducation")]
        public async Task<IActionResult> DeleteEducation(DeleteRequest request)
        {
            try
            {
                var response = await profile.DeleteEducation(request).ConfigureAwait(true);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }



        [HttpPost("DeleteActivity")]
        public async Task<IActionResult> DeleteActivity(DeleteRequest request)
        {
            try
            {
                var response = await profile.DeleteActivity(request).ConfigureAwait(true);
                return Ok(response);
            }
            catch (Exception)
            {
                throw;
            }
        }



        [HttpPost("GetAllData")]
        public async Task<IActionResult> getAllData([FromBody] long facultyMemberID)
        {
            try
            {
                var educationData = await profile.getAllData(facultyMemberID).ConfigureAwait(true);
                return Ok(educationData);
            }
            catch (Exception)
            {
                throw;
            }
        }



    }
}
