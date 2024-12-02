using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace OBE_Portal.Core.Entities.AssignedCourses
{
    public class AssignedCoursesRequest
    {
        [Required]
        public int FacultyMember_ID { get; set; }
        [Required]
        public int Semester_ID { get; set; }

    }
    public class AssignedCoursesResponse
    {
        public long Sr_Number { get; set; }
        public int OfferedCourseID { get; set; }
        public int CourseID { get; set; }
        public int CourseCategory { get; set; }
        public int Section { get; set; }
        public string SemesterAlia { get; set; }
        public string Title { get; set; }
        public int CLOS_Count { get; set; }
        public int Assessment_Count { get; set; }
        public int Marks_Added_Assessment_Count { get; set; }
        public int Student_Count { get; set; }
        public int Failed_CLOs_Students_Count { get; set; }
        public string Course_Alias { get; set; }
        public bool Is_Course { get; set; }
        public bool? Is_Completed { get; set; }
        public string CourseCode { get; set; }

        
    }
}
