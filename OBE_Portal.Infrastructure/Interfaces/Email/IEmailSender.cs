using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.Email
{
	//EmailSender class interface
	public interface IEmailSender
	{
		Task SendEmailAsync(string email, string subject, string message);
	}
}
