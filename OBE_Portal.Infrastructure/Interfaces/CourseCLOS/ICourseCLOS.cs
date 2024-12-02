using OBE_Portal.Core.Entities.CourseCLOS;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces
{
    public interface ICourseCLOS
    {
        Task<AddedCLOSWithDetailsResponse> GetCourseCLOS(long Request);
        Task<bool> SaveCourseAddedCLOS(List<Save_Course_Added_CLOS_Request> Request);
        Task<bool> DeleteCourseAddedCLOS(Update_Course_CLOS_Request Request);
        Task<bool> UpdateCourseAddedCLOS(Update_Course_Added_CLOS_Request Request);
    }
}
