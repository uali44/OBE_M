
using OBE_Portal.Core.Entities.Login;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Login
{
    //Interface of Login class
    public interface ILogin
    {
        Task<UserResponse> UserAuthentication(User_Credentials_Request model);
        Task<bool> ResetPassword(Reset_Password_Request model);
        Task<CheckForValidToken> CheckForValidToken(string model);
        Task<bool> UpdatePassword(Reset_Password_Request model);
    }
}
