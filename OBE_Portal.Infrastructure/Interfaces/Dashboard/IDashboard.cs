using OBE_Portal.Core.Entities.Dashboard;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Dashboard
{
    public interface IDashboard
    {
        Task<List<DashboardResponse>> GetAssessmentDataForDashboardCourse(Dashboard_Request obj);
    }
}
