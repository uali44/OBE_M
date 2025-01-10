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

        async Task<List<FacultyDetails>> IProfile.GetFacultyDetails(int FacultyID)
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

                        var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request[i].FacultyMemberID);
                        var Degree = new SqlParameter("@degree", Request[i].degree);
                        var EduInstitute = new SqlParameter("@EduInstitute", Request[i].EduInstitute);
                        var Field = new SqlParameter("@Field", Request[i].Field);
                        var Year = new SqlParameter("@year", Request[i].year);


                        response = await _context.Database.ExecuteSqlRawAsync(
                               "EXEC AddFacultyEducation @FacultyMemberID, @EduInstitute, @degree, @Field, @year",
                               FacultyMemberID, EduInstitute, Degree, Field, Year);
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

                        var facultyMemberIdParam = new SqlParameter("@FacultyMemberID", Request[i].FacultyMemberID);
                        var positionParam = new SqlParameter("@Position", Request[i].Position);
                        var companyParam = new SqlParameter("@Company", Request[i].Company);
                        var startDateParam = new SqlParameter("@StartDate", Request[i].StartDate);
                        var endDateParam = new SqlParameter("@EndDate", Request[i].EndDate);


                        await _context.Database.ExecuteSqlRawAsync(
       "EXEC AddFacultyExperience @FacultyMemberID, @Position, @Company, @StartDate, @EndDate",
       facultyMemberIdParam, positionParam, companyParam, startDateParam, endDateParam);

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


         async Task<bool> IProfile.SaveActivityData(ActivityData activityData)
        {
            using (SqlCommand comm = new SqlCommand())
            {
                try
                {
                    var detailIDParam = new SqlParameter("@DetailID", SqlDbType.Int)
                    {
                        Direction = ParameterDirection.Output
                    };


                    // Insert into FacultyActivity
                    var facultyActivityId = await _context.Database.ExecuteSqlRawAsync(
                        "EXEC AddFacultyActivity @FacultyID, @ActivityID, @DetailID OUT",
                        new SqlParameter("@FacultyID", activityData.FacultyID),
                        new SqlParameter("@ActivityID", activityData.ActivityID),
                        detailIDParam
                    );
                    int detailID = (int)detailIDParam.Value;
                    // Insert into FacultyActivityDetail
                    foreach (var detail in activityData.Details)
                    {
                        await _context.Database.ExecuteSqlRawAsync(
                            "EXEC AddFacultyActivityDetail @DetailID, @DetailName, @DetailValue",
                            new SqlParameter("@DetailID", detailID),
                            new SqlParameter("@DetailName", detail.DetailName),
                            new SqlParameter("@DetailValue", detail.DetailValue)
                        );
                    }


                    return true;
                }
                catch
                {

                    throw;
                }
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
                 Details = g.GroupBy(d => d.DetailID)
                            .Select(detailGroup => new ActivityDetailDto
                            {
                                DetailID = detailGroup.Key,
                                DetailName = detailGroup.First().DetailName,
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


    }
}
  



