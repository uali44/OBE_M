using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OBE_Portal.Infrastructure.Interfaces.Profile;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.Profile;


namespace OBE_Portal.Infrastructure.Implementations.Profile
{
    class Profile :  IProfile
    {
        private readonly ApplicationDbContext _context;
        public Profile(ApplicationDbContext context)
        {
            _context = context;
        }


        async Task<bool> IProfile.AddFacultyData(List<profileData> Request)
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



    }

  


}
