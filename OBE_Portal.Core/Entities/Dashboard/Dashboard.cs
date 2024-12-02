using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.Dashboard
{
    public class Dashboard_Request
    {
        public long FacultyMember_ID { get; set; }
        public long Semester_ID { get; set; }
    }
    public class DashboardResponse
    {
        public int OfferedCourseID { get; set; }
        public int CourseID { get; set; }
        public string Title { get; set; }
        public string Course_Alias { get; set; }
        public string CoursesCLOSID { get; set; }
        public string CLOTitle { get; set; }
        public string CLO_Attainment { get; set; }
        public long Assignment_Attainment { get; set; }
        public long Quiz_Attainment { get; set; }
        public long Mids_Attainment { get; set; }
        public long Finals_Attainment { get; set; }
        public long Assessment_Attainment { get; set; }
        public long Journals_Attainment { get; set; }
        public bool Is_Course { get; set; }
        public int CLOS_Count { get; set; }
    }
}
