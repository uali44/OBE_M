using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.CourseCLOS;
using OBE_Portal.Core.Entities.CourseSearch;
using OBE_Portal.Infrastructure.Interfaces;
using OBE_Portal.Infrastructure.Interfaces.CourseSearch;


namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class CourseSearchController : ControllerBase
    {
        private readonly ICourseSearch _courseSearch;
        public CourseSearchController(ICourseSearch courseSearch)
        {
            _courseSearch = courseSearch;
        }
        [HttpGet("GetInstitute")]
        public async Task<IActionResult> GetInstitute()
        {
            try
            {
                var respone = await _courseSearch.GetInstitute().ConfigureAwait(true);
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
        [HttpGet("GetAllSemester")]
        public async Task<IActionResult> GetAllSemester()
        {
            try
            {
                var respone = await _courseSearch.GetAllSemester().ConfigureAwait(true);
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
        [HttpPost("GetDepartment")]
        public async Task<IActionResult> GetDepartment([FromBody] long InstitueID)
        {
            try
            {
                var respone = await _courseSearch.GetDepartment(InstitueID).ConfigureAwait(true);
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
        [HttpPost("GetFacultyMembersForSelectedDepartmentAndSemester")]
        public async Task<IActionResult> GetFacultyMembersForSelectedDepartmentAndSemester([FromBody] GetFacultyMembersRequest request)
        {
            try
            {
                if (request != null) {
                    var respone = await _courseSearch.GetFacultyMembersForSelectedDepartmentAndSemester(request.Department_ID, request.Semester_ID).ConfigureAwait(true);
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
        [HttpPost("GetIntakes")]
        public async Task<IActionResult> GetIntakes([FromBody] long request)
        {
            try
            {
                if (request > 0)
                {
                    var respone = await _courseSearch.GetIntakes(request).ConfigureAwait(true);
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
        [HttpPost("GetPrograms")]
        public async Task<IActionResult> GetPrograms([FromBody] long request)
        {
            try
            {
                if (request > 0)
                {
                    var respone = await _courseSearch.GetPrograms(request).ConfigureAwait(true);
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
        [HttpPost("GetStatus")]
        public async Task<IActionResult> GetStatus([FromBody] long request)
        {
            try
            {
                if (request > 0)
                {
                    var respone = await _courseSearch.GetStatus(request).ConfigureAwait(true);
                    if (respone != null)
                        return Ok(respone);
                    else
                        return Ok(respone);
                }
                else
                    return Ok(null);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message); 
                throw;
            }
        }
        [HttpPost("GetIntakeStudents")]
        public async Task<IActionResult> GetIntakeStudents([FromBody] long request)
        {
            try
            {
                if (request > 0)
                {
                    var respone = await _courseSearch.GetIntakeStudents(request).ConfigureAwait(true);
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

        [HttpPost("GetCQILevelCourses")]
        public async Task<IActionResult> GetCQILevelCourses([FromBody] GetFacultyMembersRequest request)
        {
            try
            {
                if (request != null)
                {
                    var respone = await _courseSearch.GetCQILevelCourses(request).ConfigureAwait(true);
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

        [HttpPost("DeleteStudentFromCourse")]
        public async Task<IActionResult> DeleteStudentFromCourse([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var respone = await _courseSearch.DeleteStudentFromCourse(request).ConfigureAwait(true);
                    if (respone)
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

        [HttpGet("getFacultyMember")]
        public async Task<IActionResult> getFacultyMember([FromQuery] string username)
            {
            try
            {
                var respone = await _courseSearch.getFacultyMember(username).ConfigureAwait(true);
                return Ok(respone);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
