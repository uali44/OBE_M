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
        Task<bool> SaveAddedPEOS(List<SaveAddedPeoRequest> Request);
        Task<bool> AddNewPeos(List<SaveAddedPeoRequest> Request);
        Task<List<PeosInformationResponse>> getPeosInformation(GetPeosInformationRequest Request);
        Task<List<PlosInformationResponse>> GetPlosInformation(GetPlosInformationRequest Request);
        Task<bool> DeletePeo(PeoDeleteRequest Request);
        Task<bool> DeletePlo(PloDeleteRequest Request);
        Task<bool> SaveAddedPLOS(List<SaveAddedPloRequest> Request);
        Task<bool> AddNewPlos(List<SaveAddedPloRequest> Request);
    }
}
