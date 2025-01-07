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
                    
                    
                        var FacultyMEmberID = new SqlParameter("@FacultyMemberID",Request[0].FacultyMemberID );
                        var Phone = new SqlParameter("@Phone", Request[0].Phone);
                        var FacultyType = new SqlParameter("@FacultyType", Request[0].FacultyType);
                        var FacultyRole = new SqlParameter("@FacultyRole", Request[0].FacultyRole);

                       var response = await _context.Database.ExecuteSqlRawAsync($"EXEC AddFacultyDetail @FacultyMemberID,@Phone,@FacultyType,@FacultyRole", FacultyMEmberID, Phone, FacultyType, FacultyRole);
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
