using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.Setting;
using OBE_Portal.Infrastructure.Interfaces.Setting;
using System;
using System.Collections.Generic;
using System.Linq;
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
                    var respone = await _Setting.EnableExitSurveyForSelctedIntake(Request).ConfigureAwait(true); ;
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
                    var respone = await _Setting.getUserForUpdates(Request).ConfigureAwait(true); ;
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
                    var respone = await _Setting.updatePassword(Request).ConfigureAwait(true); ;
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
                    var respone = await _Setting.updateRole(Request).ConfigureAwait(true); ;
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
