using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace OBE_Portal.Core.Entities.Profile
{
    public class RequestData
    {
        public List<FacultyDetails> FacultyDetails { get; set; }
        public List<FacultyEducation> FacultyEducation { get; set; }
        public List<FacultyExperience> facultyExperience {  get; set; }

        public List<ActivityList> ActivityList { get; set; }
        public List<ActivityDetailsDto> ActivityDetails { get; set; }
        public List<ActivitySubDetail> ActivitySubDetail { get; set; }
    }

    public class FacultyDetails
    {
        public int FacultyMemberID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string FacultyType { get; set; }
        public string FacultyRole { get; set; }
      
    }

    public class profileData
    {
        public long FacultyMemberID { get; set; }
        public string Phone { get; set; }
        public string FacultyType { get; set; }
        public string FacultyRole { get; set; }
       

    }
    public class education
    {
        public int FacultyMemberID { get; set; }
        public string EduInstitute { get; set; }
        public string degree { get; set; }
        public string Field { get; set; }
        public int year { get; set; }
        public ImageFileDto ImageFile { get; set; }


    }
    public class ImageFileDto
    {
        public string FileName { get; set; }
        public string FileType { get; set; }
        public string FileContent { get; set; } // Base64 content
    }
    public class FacultyEducation
    {
        public int EduID { get; set; }
        public int FacultyMemberID { get; set; }
        public string EduInstitute { get; set; }
        public string Degree { get; set; }
        public string Field { get; set; }
        public string Year { get; set; }
        public string Image {  get; set; }
    }

    public class experience
    {
        public int FacultyMemberID { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public ImageFileDto ImageFile { get; set; }
    }
    public class FacultyExperience
    {
        public int ExpID { get; set; }
        public int FacultyMemberID { get; set; }
        public string Position { get; set; }
        public string Company { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; } // Nullable if end date is not set
        public string Image { get; set; }
    }

    public class ActivityList
    {
        public int ActivityID { get; set; }
        public string ActivityName { get; set; }
        public string ActivityType { get; set; }
    }
    public class ActivitySubDetail
    {
        public int ActivityID { get; set; }
        public string subDetail { get; set; }
        public string SubType { get; set; }

        public static implicit operator ActivitySubDetail(List<List<ActivitySubDetail>> v)
        {
            throw new NotImplementedException();
        }
    }
    public class SubDetailRequest
    {
       public long ActivityID { get; set; }
    }

    public class ActivityData
    {
        public int FacultyID { get; set; }
        public int ActivityID { get; set; }
        public ImageFileDto ImageFile { get; set; }
        public List<ActivityDetail> Details { get; set; }
    }

    public class ActivityDetail
    {
        public string DetailName { get; set; }
        public string DetailValue { get; set; }
    }

    public class ActivityDetailResult
    {
        public int ActivityID { get; set; }
        public string ActivityName { get; set; }
        public int DetailID { get; set; }
        public string DetailName { get; set; }
        public string DetailValue { get; set; }
        public int FacultyID { get; set; }
        public string ActivityType { get; set; }
        public string Image {  get; set; }
    }

    public class ActivityDetailsDto
    {
        public string ActivityName { get; set; }
        public string ActivityType { get; set; }
        public int FacultyID { get; set; }
     
        public List<ActivityDetailDto> Details { get; set; }
    }

    public class ActivityDetailDto
    {
        public int DetailID { get; set; }
        public string DetailName { get; set; }
        public string Image { get; set; }
        public Dictionary<string, string> SubDetails { get; set; } // DetailName as key, DetailValue as value
    }



}
