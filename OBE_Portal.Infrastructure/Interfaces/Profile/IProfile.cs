using OBE_Portal.Core.Entities.Profile;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace OBE_Portal.Infrastructure.Interfaces.Profile
{
    public interface IProfile
    {
        Task<bool> AddFacultyData(List<profileData> Request);
    }
}
