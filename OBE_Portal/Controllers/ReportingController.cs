using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OBE_Portal.Core.Entities.CompiledResult;
using OBE_Portal.Core.Entities.Reports;
using OBE_Portal.Infrastructure.Interfaces.CompiledResult;
using OBE_Portal.Infrastructure.Interfaces.Reports;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ReportingController : ControllerBase 
    {
        private readonly IReport _report;
        private readonly ICompiledResult _ICompiledResult;
        public ReportingController(IReport report, ICompiledResult ICompiledResult)
        {
            _report = report;
            _ICompiledResult = ICompiledResult;
        }
        [HttpPost("GetAllOfferedCoursesSemesterWise")]
        public async Task<IActionResult> GetAllOfferedCoursesSemesterWise([FromBody] OfferedCourses_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.Get_All_OfferedCourses_SemesterWise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetPLOsAnalysisForSelectedIntake")]
        public async Task<IActionResult> GetPLOsAnalysisForSelectedIntake([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.Get_PLOs_Analysis_For_Selected_Intake(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetPLOsAnalysisForSelectedIntakeAverageAttainment")]
        public async Task<IActionResult> GetPLOsAnalysisForSelectedIntakeAverageAttainment([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.Get_PLOs_Analysis_For_Selected_Intake_Average_Attainment(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("Get_PLOs_Analysis_For_Selected_Intake_CQI")]
        public async Task<IActionResult> Get_PLOs_Analysis_For_Selected_Intake_CQI([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.Get_PLOs_Analysis_For_Selected_Intake_CQI(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetPLOsAnalysisForSelectedIntakeIncludedFGrade")]
        public async Task<IActionResult> GetPLOsAnalysisForSelectedIntakeIncludedFGrade([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetPLOsAnalysisForSelectedIntakeIncludedFGrade(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetSelectedPLOStudentDetails")]
        public async Task<IActionResult> GetSelectedPLOStudentDetails([FromBody] PLO_Student_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.Get_Selected_PLO_Student_Details(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetAllSkillsCountIntakeWise")]
        public async Task<IActionResult> GetAllSkillsCountIntakeWise([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.Get_All_Skills_Count_Intake_wise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetAllSkillsDetailsIntakeWise")]
        public async Task<IActionResult> GetAllSkillsDetailsIntakeWise([FromBody] PLO_Skill_Coverage_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.Get_All_Skills_Details_Intake_wise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetAllPLOsCoverageCountIntakeWise")]
        public async Task<IActionResult> GetAllPLOsCoverageCountIntakeWise([FromBody] long request)
        {
            try
            {
                if (request > 0)
                {
                    var response = await _report.Get_All_PLOs_Coverage_Count_Intake_wise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetPLOsCourseWiseDetails")]
        public async Task<IActionResult> GetPLOsCourseWiseDetails([FromBody] long request)
        {
            try
            {
                if (request > 0)
                {
                    var response = await _report.Get_PLOs_Course_Wise_Details(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("GetAllCLOsDetailsIntakeWise")]
        public async Task<IActionResult> GetAllCLOsDetailsIntakeWise([FromBody] PLOs_Coverage_Request request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.Get_All_CLOs_Details_Intake_wise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetAllCourseDataForAnalysis")]
        public async Task<IActionResult> GetAllCourseDataForAnalysis([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.Get_All_Course_Data_For_Analysis(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("SaveDirectRemarks")]
        public async Task<IActionResult> SaveDirectRemarks([FromBody] List<SaveRemarksRequest> request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.SaveDirectRemarks(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("SaveIndirectRemarks")]
        public async Task<IActionResult> SaveIndirectRemarks([FromBody] List<SaveRemarksRequest> request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.SaveIndirectRemarks(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("SaveTable1Form")]
        public async Task<IActionResult> SaveTable1Form([FromBody] SaveTable1FormRequest request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.SaveTable1Form(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("SaveTable2Form")]
        public async Task<IActionResult> SaveTable2Form([FromBody] SaveTable1FormRequest request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.SaveTable2Form(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("SaveTable3Form")]
        public async Task<IActionResult> SaveTable3Form([FromBody] SaveTable3FormRequest request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.SaveTable3Form(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("SaveTable4Form")]
        public async Task<IActionResult> SaveTable4Form([FromBody] SaveTable4FormRequest request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.SaveTable4Form(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("CLOPLOMappingIntakewise")]
        public async Task<IActionResult> CLOPLOMappingIntakewise([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.CLO_PLO_Mapping_Intakewise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("CLOPLOSkillsMappingIntakeWise")]
        public async Task<IActionResult> CLOPLOSkillsMappingIntakeWise([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.CLO_PLO_Skills_Mapping_Intakewise(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("UpdateCourseStatus")]
        public async Task<IActionResult> UpdateCourseStatus([FromBody] MarksStatusRequest Request)
        {
            try
            {
                
                if (Request != null)
                {
                    if (Request.Status == 1)
                    {
                        CompiledResultModal_Request obj = new CompiledResultModal_Request();
                        obj.Offered_Course_ID = Request.Offered_Course_ID;
                        obj.CourseCategory = Request.CourseCategory;
                        var response = await _ICompiledResult.Freez_Course_Attainment(obj).ConfigureAwait(true);
                        return Ok(response);
                    }
                    else
                    {
                        CompiledResultModal_Request obj = new CompiledResultModal_Request();
                        obj.Offered_Course_ID = Request.Offered_Course_ID;
                        obj.CourseCategory = Request.CourseCategory;
                        var response = await _ICompiledResult.UnFreez_Course_Attainment(obj).ConfigureAwait(true);
                        return Ok(response);

                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        
        [HttpPost("UpdateCourseCategory")]
        public async Task<IActionResult> UpdateCourseCategory([FromBody] CourseStatusRequest request)
        {
            try
            {

                if (Request != null)
                {
                    var response = await _report.UpdateCourseCategory(request).ConfigureAwait(true);
                    return Ok(response);
                    
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpPost("DeleteStudentFromAnalysis")]
        public async Task<IActionResult> DeleteStudentFromAnalysis([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.DeleteStudentFromAnalysis(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("ExcludeCLOFromAnalysis")]
        public async Task<IActionResult> ExcludeCLOFromAnalysis([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.ExcludeCLOFromAnalysis(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetCLOsAttainment")]
        public async Task<IActionResult> GetCLOsAttainment([FromBody] CLOsAttainmentRequest request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.GetCLOsAttainment(request).ConfigureAwait(true);
                    if (response!=null)
                    {
                        return Ok(response);
                    }
                    else
                    {   
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetCLOsAttainmentDetails")]
        public async Task<IActionResult> GetCLOsAttainmentDetails([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetCLOsAttainmentDetails(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetCoursesInWhichStudentPassedButCLOsFailed")]
        public async Task<IActionResult> GetCoursesInWhichStudentPassedButCLOsFailed([FromBody] CLOsAttainmentRequest request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.GetCoursesInWhichStudentPassedButCLOsFailed(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed")]
        public async Task<IActionResult> GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetAllStudentOfCourseInWhichStudentPassedButCLOsFailed(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("AddCQIActionForStudent")]
        public async Task<IActionResult> AddCQIActionForStudent([FromBody] List<AddCQICycleRequest> request)
        {
            try
            {
                if (request != null)
                {
                    var response = await _report.AddCQIActionForStudent(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("CQISubmitted")]
        public async Task<IActionResult> CQISubmitted([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.CQISubmitted(request).ConfigureAwait(true);
                    if (response)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetCSPData")]
        public async Task<IActionResult> GetCSPData([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetCSPData(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        [HttpPost("GetExitData")]
        public async Task<IActionResult> GetExitData([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetExitData(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost("GetInternshipData")]
        public async Task<IActionResult> GetInternshipData([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetInternshipData(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost("GetAllIntakeStudents")]
        public async Task<IActionResult> GetAllIntakeStudents([FromBody] long request)
        {
            try
            {
                if (request != 0)
                {
                    var response = await _report.GetAllIntakeStudents(request).ConfigureAwait(true);
                    if (response != null)
                    {
                        return Ok(response);
                    }
                    else
                    {
                        return Ok(response);
                    }
                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception ex)
            {

                throw;
            }
        }
        [HttpPost("updateFacultyAssignedCourses")]
        public async Task<IActionResult> updateFacultyAssignedCourses([FromBody] FacultyChangeRequest request)
        {
            try
            {

                if (Request != null)
                {
                    var response = await _report.updateFacultyAssignedCourses(request).ConfigureAwait(true);
                    return Ok(response);

                }
                else
                {
                    return Ok(null);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
