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
using OBE_Portal.Core.Entities.Login;


namespace OBE_Portal.Infrastructure.Implementations.Profile
{
   public class Profile :  IProfile
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

                        var FacultyMEmberID = new SqlParameter("@FacultyMemberID", Request[i].FacultyMemberID);
                        var Phone = new SqlParameter("@Phone", Request[i].Phone);
                        var FacultyType = new SqlParameter("@FacultyType", Request[i].FacultyType);
                        var FacultyRole = new SqlParameter("@FacultyRole", Request[i].FacultyRole);

                         response = await _context.Database.ExecuteSqlRawAsync($"EXEC AddFacultyDetail @FacultyMemberID,@Phone,@FacultyType,@FacultyRole", FacultyMEmberID, Phone, FacultyType, FacultyRole);
                    }
                        if (response ==0 || response==1)
                        return true;
                    else
                        return false;
                
                   
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in AddFacultyData: {ex}");
                throw;
            }

        }



    }

  


}
