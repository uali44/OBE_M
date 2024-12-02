using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;

namespace OBE_Portal.Infrastructure.Implementations.SMTP_Services
{
    public static class EmailServices
    {
        public static void Send_Email(string MessageTo, string Subject, string body, List<string> CC = null, List<string> BCC = null, MemoryStream ms = null)
        {
            try
            {
                CC = new List<string>();
                BCC = new List<string>();

                MailAddress from = new MailAddress("muhammadbilal.buic@bahria.edu.pk", "NoReply");
                MailAddress to = new MailAddress(MessageTo);
                MailMessage message = new MailMessage(from, to);
                message.Subject = Subject;
                message.Body = body;
                message.IsBodyHtml = true;
                if (CC.Count > 0)
                {
                    for (int i = 0; i <= CC.Count - 1; i++)
                    {
                        MailAddress copycc = new MailAddress(CC[i]);
                        message.CC.Add(copycc);
                    }
                }
                if (BCC.Count > 0)
                {
                    for (int i = 0; i <= BCC.Count - 1; i++)
                    {
                        MailAddress copybcc = new MailAddress(BCC[i]);
                        message.Bcc.Add(copybcc);
                    }
                }
                if (ms != null)
                {
                    ms.Position = 0;
                    Attachment attachment = new Attachment(ms, "fileName.pdf", "application/pdf");
                    message.Attachments.Add(attachment);
                }
                //smtp.gmail.com
                NetworkCredential NetworkCred = new NetworkCredential();
                NetworkCred.UserName = message.From.Address;
                NetworkCred.Password = "BseBu@2017@@";
                string server = "smtp-mail.outlook.com";
                SmtpClient client = new SmtpClient(server);
                client.Port = 587;
                client.EnableSsl = true;
                client.Credentials = NetworkCred;
                client.Send(message);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public static void SendSurveyForm(string MessageTo, string Subject, string body,string RootPath)
        {
            try
            {
                MailAddress from = new MailAddress("muhammadbilal.buic@bahria.edu.pk", "NoReply");
                MailAddress to = new MailAddress(MessageTo);
                MailMessage message = new MailMessage(from, to);
                message.Subject = Subject;
                message.Body = body;
                message.IsBodyHtml = true;
                string path = @"" + RootPath;

                if (File.Exists(path))
                {
                    Attachment attachment;
                    attachment = new Attachment(path);
                    message.Attachments.Add(attachment);
                }
                //smtp.gmail.com
                NetworkCredential NetworkCred = new NetworkCredential();
                NetworkCred.UserName = message.From.Address;
                NetworkCred.Password = "BseBu@2017@@";
                string server = "smtp-mail.outlook.com";
                SmtpClient client = new SmtpClient(server);
                client.Port = 587;
                client.EnableSsl = true;
                client.Credentials = NetworkCred;
                client.Send(message);

            }
            catch (Exception ex)
            {
                throw;
            }
        }

    }
}
