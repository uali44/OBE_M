using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.Header
{
    public class HeaderResponse
    {
        public int Semester_ID { get; set; }
        public string Semester_Alias { get; set; }
    }
    public class Reset_Password
    {
        public string Current_Password { get; set; }
        public string New_Password { get; set; }
        public long UserID { get; set; }
        public bool IsStudent { get; set; }
    }
    public class FacultyPassword
    {
        public string password { get; set; }
    }
}
