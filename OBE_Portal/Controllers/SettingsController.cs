using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.Setting;
using OBE_Portal.Infrastructure.Interfaces.Setting;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class SettingsController : ControllerBase
    {
        string RootPath;
        private readonly ISetting _Setting;
        public SettingsController(ISetting Setting, IWebHostEnvironment env)
        {
            _Setting = Setting;
            //RootPath = env.ContentRootPath;
        }
        [HttpPost("EnableExitSurveyForSelctedIntake")]
        public async Task<IActionResult> EnableExitSurveyForSelctedIntake([FromBody] long Request)
        {
            try
            {
                if (Request != 0)
                {
                    var respone = await _Setting.EnableExitSurveyForSelctedIntake(Request).ConfigureAwait(false); ;
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

        [HttpPost("getUserForUpdates")]
        public async Task<IActionResult> getUserForUpdates([FromBody] GetUserRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.getUserForUpdates(Request).ConfigureAwait(false); ;
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

        [HttpPost("updatePassword")]
        public async Task<IActionResult> updatePassword([FromBody] UpdatePasswordRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.updatePassword(Request).ConfigureAwait(false); ;
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
        [HttpPost("updateRole")]
        public async Task<IActionResult> updateRole([FromBody] UpdateRoleRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.updateRole(Request).ConfigureAwait(false); ;
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

        [HttpPost("SaveAddedPEOS")]
        public async Task<IActionResult> SaveAddedPEOS([FromBody] List<SaveAddedPeoRequest> Request)
        {
            try
            {
                if (Request != null && Request.Count > 0)
                {
                    var respone = await _Setting.SaveAddedPEOS(Request).ConfigureAwait(false);
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

        [HttpPost("AddNewPeos")]
        public async Task<IActionResult> AddNewPeos([FromBody] List<SaveAddedPeoRequest> Request)
        {
            try
            {
                if (Request != null && Request.Count > 0)
                {
                    var respone = await _Setting.AddNewPeos(Request).ConfigureAwait(false);
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

        [HttpPost("getPeosInformation")]
        public async Task<IActionResult> getPeosInformation([FromBody] GetPeosInformationRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.getPeosInformation(Request).ConfigureAwait(false); ;
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

        [HttpPost("GetPlosInformation")]
        public async Task<IActionResult> GetPlosInformation([FromBody] GetPlosInformationRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.GetPlosInformation(Request).ConfigureAwait(false); ;
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

        [HttpPost("DeletePeo")]
        public async Task<IActionResult> DeletePeo([FromBody] PeoDeleteRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.DeletePeo(Request).ConfigureAwait(false); ;
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

        [HttpPost("SaveAddedPLOS")]
        public async Task<IActionResult> SaveAddedPLOS([FromBody] List<SaveAddedPloRequest> Request)
        {
            try
            {
                if (Request != null && Request.Count > 0)
                {
                    var respone = await _Setting.SaveAddedPLOS(Request).ConfigureAwait(false);
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

        [HttpPost("DeletePlo")]
        public async Task<IActionResult> DeletePlo([FromBody] PloDeleteRequest Request)
        {
            try
            {
                if (Request != null)
                {
                    var respone = await _Setting.DeletePlo(Request).ConfigureAwait(false); ;
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

        [HttpPost("AddNewPlos")]
        public async Task<IActionResult> AddNewPlos([FromBody] List<SaveAddedPloRequest> Request)
        {
            try
            {
                if (Request != null && Request.Count > 0)
                {
                    var respone = await _Setting.AddNewPlos(Request).ConfigureAwait(false);
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
