﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.IndirectAssessment;
using OBE_Portal.Infrastructure.Interfaces.IndirectAssessment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class IndirectAssessmentController : ControllerBase
    {
        private readonly IIndirectAssessment _indirectAssessment;
        public IndirectAssessmentController(IIndirectAssessment indirectAssessment)
        {
            _indirectAssessment = indirectAssessment;
        }
        [HttpPost("SaveCSPForm")]
        public async Task<IActionResult> SaveCSPForm(SaveCSPFormRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveCSPForm(request).ConfigureAwait(true);
                if (respone)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("SaveExitForm")]
        public async Task<IActionResult> SaveExitForm(SaveExitFormRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveExitForm(request).ConfigureAwait(true);
                if (respone)
                    return Ok(respone);
                else
                    return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [HttpPost("SaveInternshipForm")]
        public async Task<IActionResult> SaveInternshipForm(SaveInternshipFormRequest request)
        {
            try
            {
                var respone = await _indirectAssessment.SaveInternshipForm(request).ConfigureAwait(true);
                if (respone)
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
