using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.AssessmentMarks
{
    public class GetRegisteredStudents
    {
        public int Student_ID { get; set; }
        public string Student_Enrollment { get; set; }
        public string Student_Name { get; set; }
    }
    public class AssessmentDetailsResponseForCourse
    {
        public long Assessment_Main_Details_ID { get; set; }
        public string Assessment_Original_Title { get; set; }
        public string Assessment_Title { get; set; }
        public bool IS_LOCKED { get; set; }
        public string Assessment_Sub_Detail_ID { get; set; }
        public string Question_Marks { get; set; }
        public bool Is_Course { get; set; }
        public string Performance_Indicator { get; set; }
        public string Course_Alias { get; set; }
    }
    public class CourseMarksForExcel
    {
        public long AssessmentMainDetailsID { get; set; }
        public string AssessmentTitle { get; set; }
        public long AssessmentMarksID { get; set; }
        public long StudentID { get; set; }
        public double ObtainedMarks { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
    }
    public class Assessment_And_Registered_Studens 
    {
        public List<GetRegisteredStudents> GetRegisteredStudents { get; set; }
        public List<AssessmentDetailsResponseForCourse> AssessmentDetailsResponseForCourse { get; set; }
        public List<CourseMarksForExcel> CourseMarksForExcel { get; set; }
    }
    public class Assessment {
        public long Offered_Course_ID { get; set; }
        public bool Is_Fine { get; set; }
        public long Assessment_ID { get; set; }
        public string Assessment_Title { get; set; }
        public int Question_Count { get; set; }
        public List<Assessment_Details> Assessment_Student_Marks_Details { get; set; }
    }
    public class Assessment_Details
    {
        public long Student_ID { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
        public long Assessment_Sub_Details_ID { get; set; }
        public decimal Question_Marks { get; set; }
        public decimal Obtained_Marks { get; set; }
        public bool Is_Fine { get; set; }
        public long Created_By { get; set; }
        
    }
    public class Assessment_Marks_Requst
    {
        public long Assessment_ID { get; set; }
        public long Student_ID { get; set; }
    }
    public class Assessment_Marks_Update_Reqeust
    {
        public long Offered_Course_ID { get; set; }
        public long Assessment_Marks_ID { get; set; }
        public decimal Obtained_Marks { get; set; }
        public long Modified_By { get; set; }
        
    }
    public class Get_Selected_Assessment_And_Marks
    {
        public long Assessment_ID { get; set; }
        public long Student_ID { get; set; }

    }
    public class GetSelectedAssessmentAndMarksResponse
    {
        public string Assessment_Title { get; set; }
        public bool IS_LOCKED { get; set; }
        public double Assessment_Marks { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
        public string Assessment_Sub_Detail_ID { get; set; }
        public string Question_Marks { get; set; }
        public string Question_Obtained_Marks { get; set; }
        public string Question_Number { get; set; }
        public string Weightage { get; set; }
        public string CLO_Title { get; set; }
        public int StudentID { get; set; }
        public string AssessmentMarksID { get; set; }

    }
}
