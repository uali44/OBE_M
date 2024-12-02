using OBE_Portal.Core.Entities.AssignedCourses;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.AssignedCourses
{
    public interface IAssignedCourses
    {
        Task<List<AssignedCoursesResponse>> GetAssignedCourses(AssignedCoursesRequest Request);
    }
}
