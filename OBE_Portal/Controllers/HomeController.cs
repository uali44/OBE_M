using System;
using System.Diagnostics;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OBE_Portal.Core.Entities.Login;
using OBE_Portal.Infrastructure.Interfaces.CourseSearch;
using OBE_Portal.Infrastructure.Interfaces.Login;
using OBE_Portal.Models;

namespace OBE_Portal.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ILogin _login;
        private readonly ICourseSearch _courseSearch;
        public HomeController(ILogger<HomeController> logger, ILogin login, ICourseSearch courseSearch)
        {
            _logger = logger;
            _login  = login;
            _courseSearch = courseSearch;
        }
        public async Task<IActionResult> Index()
        {
            var respone = await _courseSearch.GetInstitute().ConfigureAwait(true);
            if (respone != null) { 
                ViewBag.institutes = JsonSerializer.Serialize(respone);
            }
            return View();
        }
        public IActionResult Dashboard()
        {
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        [Route("/Home/AuthenticateUser")]
        [HttpPost]
        public async Task<IActionResult> AuthenticateUsers([FromBody] User_Credentials_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _login.UserAuthentication(request).ConfigureAwait(true);
                    if (response != null)
                        return Ok(response);
                    else
                        return Ok(null);
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
        [Route("/Home/ResetPassword")]
        [HttpPost]
        public async Task<IActionResult> ResetPassword([FromBody] Reset_Password_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _login.ResetPassword(request).ConfigureAwait(true);
                    if (response)
                        return Ok(response);
                    else
                        return Ok(response);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public IActionResult ForgotPassword()
        {
            return View();
        }
        [Route("/Home/Check_For_Valid_Token")]
        [HttpPost]
        public async Task<IActionResult> CheckForValidToken([FromBody] string request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _login.CheckForValidToken(request).ConfigureAwait(true);
                    if (response!=null)
                        return Ok(response);
                    else
                        return Ok(response);
                }
                else
                    return Ok(false);
            }
            catch (Exception)
            {
                throw;
            }
        }
        [Route("/Home/Update_Password")]
        [HttpPost]
        public async Task<IActionResult> UpdatePassword([FromBody] Reset_Password_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _login.UpdatePassword(request).ConfigureAwait(true);
                    if (response)
                        return Ok(response);
                    else
                        return Ok(response);
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
