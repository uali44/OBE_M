
using OBE_Portal.Infrastructure.Interfaces.Email;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Services.Email
{
	//Describe the email interface methods here
	public class EmailSender : IEmailSender
	{
		public Task SendEmailAsync(string email, string subject, string message)
		{
			return Task.CompletedTask;
		}
	}
}
