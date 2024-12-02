using OBE_Portal.Core.Entities.Setting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Setting
{
    public interface ISetting
    {

        Task<bool> EnableExitSurveyForSelctedIntake(long Request);
        Task<dynamic> getUserForUpdates(GetUserRequest Request);
        Task<bool> updatePassword(UpdatePasswordRequest Request);
        Task<bool> updateRole(UpdateRoleRequest Request);
    }
}
