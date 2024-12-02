using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.Dashboard;
using OBE_Portal.Infrastructure.Interfaces.Dashboard;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace OBE_Portal.Infrastructure.Implementations.Dashboard
{
    public class Dashboard : IDashboard
    {
        private readonly ApplicationDbContext _context;
        public Dashboard(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<List<DashboardResponse>> IDashboard.GetAssessmentDataForDashboardCourse(Dashboard_Request obj)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var FacultyMember_ID = new SqlParameter("@FacultyMember_ID", obj.FacultyMember_ID);
                    var Semester_ID = new SqlParameter("@Semester_ID", obj.Semester_ID);
                    List<DashboardResponse> getAssignedCoursesDataForDashboard = await _context.Set<DashboardResponse>().FromSqlInterpolated($"EXEC Sp_Get_Data_For_Dashboard {FacultyMember_ID},{Semester_ID}").ToListAsync();
                    if (getAssignedCoursesDataForDashboard.Count > 0)
                    {
                        return getAssignedCoursesDataForDashboard;
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
