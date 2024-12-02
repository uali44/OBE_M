using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.AssignedCourses;
using OBE_Portal.Infrastructure.Interfaces.AssignedCourses;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;

namespace OBE_Portal.Infrastructure.Implementations.AssignedCourses
{
    public class AssignedCourses : IAssignedCourses
    {
        private readonly ApplicationDbContext _context;
        public AssignedCourses(ApplicationDbContext context) {
            _context = context;
        }
        async Task<List<AssignedCoursesResponse>> IAssignedCourses.GetAssignedCourses(AssignedCoursesRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var FacultyMember_ID = new SqlParameter("@FacultyMember_ID", Request.FacultyMember_ID);
                    var Semester_ID = new SqlParameter("@Semester_ID", Request.Semester_ID);
                    List<AssignedCoursesResponse> getAssignedCourses = await _context.Set<AssignedCoursesResponse>().FromSqlInterpolated($"EXEC SP_Get_Users_Assigned_Courses {FacultyMember_ID},{Semester_ID}").ToListAsync();
                    if (getAssignedCourses.Count > 0)
                    {
                        return getAssignedCourses;
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
