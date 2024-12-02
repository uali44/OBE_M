using OBE_Portal.Infrastructure.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.CourseCLOS;

namespace OBE_Portal.Infrastructure.Implementations.CourseCLOS
{
    public class CourseCLOS : ICourseCLOS
    {
        private readonly ApplicationDbContext _context;
        public CourseCLOS(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<AddedCLOSWithDetailsResponse> ICourseCLOS.GetCourseCLOS(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    AddedCLOSWithDetailsResponse response = new AddedCLOSWithDetailsResponse();
                    var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request);
                    List<CourseCLOSResponse> getCourseCLOS = await _context.Set<CourseCLOSResponse>().FromSqlInterpolated($"EXEC Sp_Get_Course_CLOS {OfferedCourseID}").ToListAsync();
                    List<PLOSResponse> getPLOS = await _context.Set<PLOSResponse>().FromSqlInterpolated($"EXEC SP_Get_PLOS_And_Details {OfferedCourseID}").ToListAsync();
                    List<PLOSSkillsResponse> getSkills = await _context.Set<PLOSSkillsResponse>().FromSqlInterpolated($"EXEC SP_Get_PLOS_Skills").ToListAsync();
                    List<PLOSSkillLevelResponse> getSkillsLevel = await _context.Set<PLOSSkillLevelResponse>().FromSqlInterpolated($"EXEC SP_Get_PLOS_Skills_levels").ToListAsync();
                    response.Course_CLOS = getCourseCLOS;
                    response.All_PLOS = getPLOS;
                    response.All_PLOS_Skills = getSkills;
                    response.All_PLOS_Skills_Levels = getSkillsLevel;
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ICourseCLOS.SaveCourseAddedCLOS(List<Save_Course_Added_CLOS_Request> Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    for (int i = 0; i < Request.Count; i++)
                    {
                        var CLO_Title = new SqlParameter("@CLO_Title", Request[i].CLO_Title);
                        var Description = new SqlParameter("@Description", Request[i].Description);
                        var Selected_Skill_ID = new SqlParameter("@Selected_Skill_ID", Request[i].Selected_Skill_ID);
                        var Selected_Skill_Level_ID = new SqlParameter("@Selected_Skill_Level_ID", Request[i].Selected_Skill_Level_ID);
                        var Created_By = new SqlParameter("@Created_By", Request[i].Created_By);
                        var OfferedCourseID = new SqlParameter("@OfferedCourseID", Request[i].OfferedCourseID);
                        var Selected_PLO_ID = new SqlParameter("@Selected_PLO_ID", Request[i].Selected_PLO_ID);
                        response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Add_Course_CLOS @CLO_Title,@Description,@Selected_Skill_ID,@Selected_Skill_Level_ID,@Created_By,@OfferedCourseID,@Selected_PLO_ID",
                            CLO_Title, Description, Selected_Skill_ID, Selected_Skill_Level_ID, Created_By, OfferedCourseID, Selected_PLO_ID
                            );
                    }
                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ICourseCLOS.DeleteCourseAddedCLOS(Update_Course_CLOS_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Course_CLO_IS = new SqlParameter("@Course_CLO_IS", Request.Course_CLO_IS);
                    var Modified_By = new SqlParameter("@Modified_By", Request.Modified_By);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Update_Course_CLOS @Course_CLO_IS,@Modified_By",
                       Course_CLO_IS, Modified_By
                        );
                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ICourseCLOS.UpdateCourseAddedCLOS(Update_Course_Added_CLOS_Request Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    var Course_CLO_ID = new SqlParameter("@Course_CLO_ID", Request.Course_CLO_ID);
                    var Description = new SqlParameter("@Description", Request.Description);
                    var Selected_Skill_ID = new SqlParameter("@Selected_Skill_ID", Request.Selected_Skill_ID);
                    var Selected_Skill_Level_ID = new SqlParameter("@Selected_Skill_Level_ID", Request.Selected_Skill_Level_ID);
                    var Modified_By = new SqlParameter("@Modified_By", Request.Modified_By);
                    var Selected_PLO_ID = new SqlParameter("@Selected_PLO_ID", Request.Selected_PLO_ID);
                    response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Update_Course_CLOS_And_Details @Course_CLO_ID,@Description,@Selected_Skill_ID,@Selected_Skill_Level_ID,@Modified_By,@Selected_PLO_ID",
                        Course_CLO_ID, Description, Selected_Skill_ID, Selected_Skill_Level_ID, Modified_By, Selected_PLO_ID );
                    if (response > 0)
                        return true;
                    else
                        return false;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
