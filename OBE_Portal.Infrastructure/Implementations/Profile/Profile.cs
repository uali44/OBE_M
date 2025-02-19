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
using OBE_Portal.Core.Entities.CourseSearch;
using OBE_Portal.Infrastructure.Interfaces.CourseSearch;
using System.Data;
using System.Data.SqlClient;
using System.IO;

namespace OBE_Portal.Infrastructure.Implementations.Profile
{
    public class Profile : IProfile
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
                    if (response == 0 || response == 1)
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
        async Task<RequestData>IProfile.getAllData(long facultyID)
        {
            try
            {
               
                var faculty = await GetFacultyDetails(facultyID);
                var educationd= await GetEducation((int)facultyID);
                var experience=await GetExperience((int)facultyID);
                var facultyActivity=await GetFacultyActivity((int)facultyID);
                var activityList = await GetActivities();
                var activitySubDetail= await _context.Set<ActivitySubDetail>().FromSqlInterpolated($"EXEC GetAllActivitySubDetails").ToListAsync();
                return new RequestData
                {

                    FacultyDetails = faculty,
                    FacultyEducation = educationd,
                    facultyExperience = experience,
                    ActivityDetails=facultyActivity,
                    ActivityList=activityList,
                    ActivitySubDetail=activitySubDetail,

                };
            
            
            }
            catch (Exception)
            {
                throw;
            }

          


        }
      private  async Task<List<FacultyDetails>> GetFacultyDetails(long FacultyID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", FacultyID);
                    List<FacultyDetails> response = await _context.Set<FacultyDetails>().FromSqlInterpolated($"EXEC GetFacultyDetailsByID {FacultyMemberID}").ToListAsync();
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
        async Task<List<FacultyDetails>> IProfile.GetFacultyDetails(long FacultyID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", FacultyID);
                    List<FacultyDetails> response = await _context.Set<FacultyDetails>().FromSqlInterpolated($"EXEC GetFacultyDetailsByID {FacultyMemberID}").ToListAsync();
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


        async Task<bool> IProfile.AddFacultyEducation(List<education> Request)
        {

            try
            {

                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    for (int i = 0; i < Request.Count; i++)
                    {

                        string relativePath = ""; // To store the relative file path

                        // Check if the ImageFile property contains a file
                        if (Request[i].ImageFile != null && !string.IsNullOrWhiteSpace(Request[i].ImageFile.FileContent))
                        {
                            // Decode the base64 file content
                            var fileContentBytes = Convert.FromBase64String(Request[i].ImageFile.FileContent);

                            // Ensure the uploads directory exists
                            var uploadFolder = Path.Combine("wwwroot", "uploads", "faculty-education");
                            if (!Directory.Exists(uploadFolder))
                            {
                                Directory.CreateDirectory(uploadFolder);
                            }

                            // Generate a unique file name
                            var uniqueFileName = $"{Guid.NewGuid()}_{Request[i].ImageFile.FileName}";
                            var fullFilePath = Path.Combine(uploadFolder, uniqueFileName);

                            // Save the file to the server
                            await File.WriteAllBytesAsync(fullFilePath, fileContentBytes);

                            // Save the relative file path to the database
                            relativePath = Path.Combine("uploads", "faculty-education", uniqueFileName).Replace("\\", "/");
                        }

                        var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request[i].FacultyMemberID);
                        var Degree = new SqlParameter("@degree", Request[i].degree);
                        var EduInstitute = new SqlParameter("@EduInstitute", Request[i].EduInstitute);
                        var Field = new SqlParameter("@Field", Request[i].Field);
                        var Year = new SqlParameter("@year", Request[i].year);
                        var Image = new SqlParameter("@Image", relativePath);
                        var CreatedBy = new SqlParameter("@CreatedBy", Request[i].CreatedBy);
                        var CreatedDate=new SqlParameter("@CreatedDate",DateTime.UtcNow);
                        response = await _context.Database.ExecuteSqlRawAsync(
                               "EXEC AddFacultyEducation @FacultyMemberID, @EduInstitute, @degree, @Field, @year,@Image,@CreatedBy,@CreatedDate",
                               FacultyMemberID, EduInstitute, Degree, Field, Year,Image,CreatedBy,CreatedDate);
                    }
                    if (response > 0)
                        return true;
                    else
                        return false;


                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in AddFacultyEducation: {ex}");
                throw;
            }

        }


        async Task<bool> IProfile.AddFacultyExperience(List<experience> Request)
        {

            try
            {

                using (SqlCommand comm = new SqlCommand())
                {
                    int response = 0;
                    for (int i = 0; i < Request.Count; i++)
                    {

                        string relativePath = ""; // To store the relative file path

                        // Check if the ImageFile property contains a file
                        if (Request[i].ImageFile != null && !string.IsNullOrWhiteSpace(Request[i].ImageFile.FileContent))
                        {
                            // Decode the base64 file content
                            var fileContentBytes = Convert.FromBase64String(Request[i].ImageFile.FileContent);

                            // Ensure the uploads directory exists
                            var uploadFolder = Path.Combine("wwwroot", "uploads", "faculty-education");
                            if (!Directory.Exists(uploadFolder))
                            {
                                Directory.CreateDirectory(uploadFolder);
                            }

                            // Generate a unique file name
                            var uniqueFileName = $"{Guid.NewGuid()}_{Request[i].ImageFile.FileName}";
                            var fullFilePath = Path.Combine(uploadFolder, uniqueFileName);

                            // Save the file to the server
                            await File.WriteAllBytesAsync(fullFilePath, fileContentBytes);

                            // Save the relative file path to the database
                            relativePath = Path.Combine("uploads", "faculty-education", uniqueFileName).Replace("\\", "/");
                        }



                        var facultyMemberIdParam = new SqlParameter("@FacultyMemberID", Request[i].FacultyMemberID);
                        var positionParam = new SqlParameter("@Position", Request[i].Position);
                        var companyParam = new SqlParameter("@Company", Request[i].Company);
                        var startDateParam = new SqlParameter("@StartDate", Request[i].StartDate);
                        var endDateParam = new SqlParameter("@EndDate", Request[i].EndDate ?? (object)DBNull.Value);
                        var Image = new SqlParameter("@Image", relativePath);
                        var CreatedBy = new SqlParameter("@CreatedBy", Request[i].CreatedBy);
                        var CreatedDate = new SqlParameter("@CreatedDate", DateTime.UtcNow);
                        await _context.Database.ExecuteSqlRawAsync(
       "EXEC AddFacultyExperience @FacultyMemberID, @Position, @Company, @StartDate, @EndDate,@Image,@CreatedBy,@CreatedDate",
       facultyMemberIdParam, positionParam, companyParam, startDateParam, endDateParam,Image, CreatedBy, CreatedDate);

                    }
                    if (response > 0)
                        return true;
                    else
                        return false;


                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in AddFacultyEducation: {ex}");
                throw;
            }

        }





        async Task<List<ActivityList>> IProfile.GetActivities()
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    List<ActivityList> response = await _context.Set<ActivityList>().FromSqlInterpolated($"EXEC GetAllActivities").ToListAsync();
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


        async Task<List<ActivitySubDetail>> GetActivitySubDetails(long ActivityID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Activity = new SqlParameter("@ActivityID", ActivityID);
                    List<ActivitySubDetail> response = await _context.Set<ActivitySubDetail>().FromSqlInterpolated($"EXEC GetActivitySubDetails {Activity}").ToListAsync();
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














        async Task<List<ActivityList>> GetActivities()
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    List<ActivityList> response = await _context.Set<ActivityList>().FromSqlInterpolated($"EXEC GetAllActivities").ToListAsync();
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


        async Task<List<ActivitySubDetail>> IProfile.GetActivitySubDetails(long ActivityID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Activity = new SqlParameter("@ActivityID", ActivityID);
                    List<ActivitySubDetail> response = await _context.Set<ActivitySubDetail>().FromSqlInterpolated($"EXEC GetActivitySubDetails {Activity}").ToListAsync();
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


         async Task<bool> IProfile.SaveActivityData(List<ActivityData> activityData)
        {


            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    for (int i = 0; i < activityData.Count; i++)
                    {


                        string relativePath = ""; // To store the relative file path

                        // Check if the ImageFile property contains a file
                        if (activityData[i].ImageFile != null && !string.IsNullOrWhiteSpace(activityData[i].ImageFile.FileContent))
                        {
                            // Decode the base64 file content
                            var fileContentBytes = Convert.FromBase64String(activityData[i].ImageFile.FileContent);

                            // Ensure the uploads directory exists
                            var uploadFolder = Path.Combine("wwwroot", "uploads", "faculty-education");
                            if (!Directory.Exists(uploadFolder))
                            {
                                Directory.CreateDirectory(uploadFolder);
                            }

                            // Generate a unique file name
                            var uniqueFileName = $"{Guid.NewGuid()}_{activityData[i].ImageFile.FileName}";
                            var fullFilePath = Path.Combine(uploadFolder, uniqueFileName);

                            // Save the file to the server
                            await File.WriteAllBytesAsync(fullFilePath, fileContentBytes);

                            // Save the relative file path to the database
                            relativePath = Path.Combine("uploads", "faculty-education", uniqueFileName).Replace("\\", "/");
                        }





                        var detailIDParam = new SqlParameter("@DetailID", SqlDbType.Int)
                        {
                            Direction = ParameterDirection.Output
                        };


                        // Insert into FacultyActivity
                        var facultyActivityId = await _context.Database.ExecuteSqlRawAsync(
                            "EXEC AddFacultyActivity @FacultyID, @ActivityID,@Image,@CreatedBy,@CreatedDate,@DetailID OUT",
                            new SqlParameter("@FacultyID", activityData[i].FacultyID),
                            new SqlParameter("@ActivityID", activityData[i].ActivityID),
                             new SqlParameter("@Image", relativePath),
                               new SqlParameter("@CreatedBy", activityData[i].CreatedBy),
                       new SqlParameter("@CreatedDate", DateTime.UtcNow),
                            detailIDParam
                        );
                        int detailID = (int)detailIDParam.Value;
                        // Insert into FacultyActivityDetail
                        foreach (var detail in activityData[i].Details)
                        {
                            await _context.Database.ExecuteSqlRawAsync(
                                "EXEC AddFacultyActivityDetail @DetailID, @DetailName, @DetailValue",
                                new SqlParameter("@DetailID", detailID),
                                new SqlParameter("@DetailName", detail.DetailName),
                                new SqlParameter("@DetailValue", detail.DetailValue)
                            );
                        }


                       
                    }
                    return true;

                }
            }
            catch
            {
                return false;
                throw;
            }
          
            }
        

        




        async Task<List<ActivityDetailsDto>> GetFacultyActivity(int FacultyID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var faculty = new SqlParameter("@FacultyID", FacultyID);
                    var response = await _context.Set<ActivityDetailResult>().FromSqlInterpolated($"EXEC GetFacultyActivity {faculty}").ToListAsync();
                    if (response != null)
                    {
                        var groupedActivities = response
             .GroupBy(d => d.ActivityName)
             .Select(g => new ActivityDetailsDto
             {
                 ActivityName = g.Key,
                 FacultyID = g.First().FacultyID,
                 ActivityType = g.First().ActivityType,
                
                 Details = g.GroupBy(d => d.DetailID)
                            .Select(detailGroup => new ActivityDetailDto
                            {
                                DetailID = detailGroup.Key,
                                DetailName = detailGroup.First().DetailName,
                                Image = detailGroup.First().Image,
                                SubDetails = detailGroup.ToDictionary(d => d.DetailName, d => d.DetailValue)
                            }).ToList()
             }).ToList();

                        return groupedActivities;
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














        async Task<List<ActivityDetailsDto>> IProfile.GetFacultyActivity(int FacultyID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var faculty = new SqlParameter("@FacultyID", FacultyID);
                    var response = await _context.Set<ActivityDetailResult>().FromSqlInterpolated($"EXEC GetFacultyActivity {faculty}").ToListAsync();
                    if (response != null)
                    {
                        var groupedActivities = response
             .GroupBy(d => d.ActivityName)
             .Select(g => new ActivityDetailsDto
             {
                 ActivityName = g.Key,
                 FacultyID = g.First().FacultyID,
                 ActivityType = g.First().ActivityType,
                 Details = g.GroupBy(d => d.DetailID)
                            .Select(detailGroup => new ActivityDetailDto
                            {
                                DetailID = detailGroup.Key,
                                DetailName = detailGroup.First().DetailName,
                                Image = detailGroup.First().Image,
                                SubDetails = detailGroup.ToDictionary(d => d.DetailName, d => d.DetailValue)
                            }).ToList()
             }).ToList();

                        return groupedActivities;
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



        async Task<List<FacultyEducation>> GetEducation(int facultyMemberID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var facultyMemberIDParam = new SqlParameter("@FacultyMemberID", facultyMemberID);
                    List<FacultyEducation> response = await _context.Set<FacultyEducation>().FromSqlInterpolated($"EXEC GetFacultyEducation {facultyMemberIDParam}")
                    .ToListAsync();
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
            catch (Exception ex)
            {
                throw new Exception("Error fetching education data", ex);
            }
        }


        async Task<List<FacultyEducation>> IProfile.GetEducation(int facultyMemberID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var facultyMemberIDParam = new SqlParameter("@FacultyMemberID", facultyMemberID);
                    List<FacultyEducation> response = await _context.Set<FacultyEducation>().FromSqlInterpolated($"EXEC GetFacultyEducation {facultyMemberIDParam}")
                    .ToListAsync();
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
            catch (Exception ex)
            {
                throw new Exception("Error fetching education data", ex);
            }
        }


        async Task<List<FacultyExperience>> GetExperience(int facultyMemberID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var facultyMemberIDParam = new SqlParameter("@FacultyMemberID", facultyMemberID);
                    var response = await _context.Set<FacultyExperience>().FromSqlInterpolated($"EXEC GetFacultyExperience  {facultyMemberIDParam}")
                    .ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    { return null; }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error fetching education data", ex);
            }
        }



        async Task<List<FacultyExperience>> IProfile.GetExperience(int facultyMemberID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var facultyMemberIDParam = new SqlParameter("@FacultyMemberID", facultyMemberID);
                    var response = await _context.Set<FacultyExperience>().FromSqlInterpolated($"EXEC GetFacultyExperience  {facultyMemberIDParam}")
                    .ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    { return null; }

                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error fetching education data", ex);
            }
        }


        async Task<bool> IProfile.DeleteExperience(DeleteRequest request)
        {
            try
            {
                var ExpIDParam = new SqlParameter("@ExpID", request.ID);
                var ModifiedBy=new SqlParameter("@ModifiedBy",request.ModifiedBy);
                int result = await _context.Database.ExecuteSqlRawAsync("EXEC DeleteExperience @ExpID,@ModifiedBy", ExpIDParam,ModifiedBy);

                return result > 0; // Returns true if at least one row was deleted
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> IProfile.DeleteEducation(DeleteRequest request)
        {
            try
            {
                var EduIDParam = new SqlParameter("@EduID",request.ID);
                var ModifiedBy = new SqlParameter("@ModifiedBy", request.ModifiedBy);
                int result = await _context.Database.ExecuteSqlRawAsync("EXEC DeleteEducation @EduID,@ModifiedBy", EduIDParam,ModifiedBy);

                return result > 0; // Returns true if at least one row was deleted
            }
            catch (Exception)
            {
                throw;
            }
        }



        async Task<bool> IProfile.DeleteActivity(DeleteRequest request)
        {
            try
            {
                var DetailIDParam = new SqlParameter("@DetailID", request. ID);
                var ModifiedBy = new SqlParameter("@ModifiedBy", request.ModifiedBy);
                int result = await _context.Database.ExecuteSqlRawAsync("EXEC DeleteActivityDetail @DetailID,@ModifiedBy", DetailIDParam, ModifiedBy);

                return result > 0; // Returns true if at least one row was deleted
            }
            catch (Exception)
            {
                throw;
            }
        }
    
    




}
}
  



