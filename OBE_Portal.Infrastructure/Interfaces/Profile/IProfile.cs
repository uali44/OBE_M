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
       
        Task<bool> AddFacultyEducation(List<education> Request);
        Task<bool> AddFacultyExperience(List<experience> Request);
        Task<List<ActivityList>> GetActivities();
        Task<List<ActivitySubDetail>> GetActivitySubDetails(long ActivityID);
        Task<bool> SaveActivityData(List<ActivityData> activityData);
        Task<List<ActivityDetailsDto>> GetFacultyActivity(int FacultyID);
        Task<List<FacultyDetails>> GetFacultyDetails(long FacultyID);
        Task<List<FacultyEducation>> GetEducation(int facultyMemberID);
        Task<List<FacultyExperience>> GetExperience(int facultyMemberID);
        Task<bool> DeleteExperience(int expID);
        Task<bool> DeleteEducation(int eduID);
        Task<bool> DeleteActivity(int eduID);
        Task<RequestData> getAllData(long facultyID);
    }
}
