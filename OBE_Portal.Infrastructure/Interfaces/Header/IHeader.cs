using OBE_Portal.Core.Entities.Header;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Header
{
    public interface IHeader
    {
        Task<List<HeaderResponse>> GetSemesterListBasedOnFaculty(int Request);
        Task<bool> UpdatePassword(Reset_Password Request);
    }
}
