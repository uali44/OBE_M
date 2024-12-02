using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.Header;
using OBE_Portal.Infrastructure.Interfaces.Header;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class HeaderController : ControllerBase
    {
        private readonly IHeader _header;
        public HeaderController(IHeader header) {
            _header = header;
        }
        [HttpPost("GetSemesterListBasedOnFaculty")]
        public async Task<IActionResult> GetSemesterListBasedOnFaculty([FromBody] int request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _header.GetSemesterListBasedOnFaculty(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else {
                        return Ok(null);
                    }
                }
                else {
                    return Ok(null);
                }
            }
            catch (Exception)
            {
                throw;
            }
            
        }
        [HttpPost("UpdatePassword")]
        public async Task<IActionResult> UpdatePassword([FromBody] Reset_Password request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _header.UpdatePassword(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(false);
                    }
                }
                else
                {
                    return Ok(false);
                }
            }
            catch (Exception)
            {
                throw;
            }

        }
    }
}
