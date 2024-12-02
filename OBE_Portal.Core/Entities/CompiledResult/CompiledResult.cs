using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.CompiledResult
{
    public class CompiledResultModal
    {
        public int AdmissionOpenProgramID { get; set; }
        public int OfferedCourseID { get; set; }
        public int StudentID { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
        public double Assignmnet_Marks { get; set; }
        public double Quiz_Marks { get; set; }
        public double Mid_Marks { get; set; }
        public double Final_Marks { get; set; }
        public double Total { get; set; }
        public string Grade { get; set; }
        public string Clo_Name { get; set; }
        public string Clo_Result { get; set; }
        public string CoursesCLOSID { get; set; }
        public int RegisteredCourseID { get; set; }
    }
    public class CompiledResultFYPModal
    {
        public int AdmissionOpenProgramID { get; set; }
        public int RegisteredCourseID { get; set; }
        public int StudentID { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
        public double FYPCoordinatorObtainedMarks { get; set; }
        public double FYPSupervisorObtainedMarks { get; set; }
        public double InitialPresentationObtainedMarks { get; set; }
        public double MidTermPresentationObtainedMarks { get; set; }
        public double FinalPresentationObtainedMarks { get; set; }
        public double Total { get; set; }
        public string Grade { get; set; }
        public string Clo_Name { get; set; }
        public string Clo_Result { get; set; }
        public string CoursesCLOSID { get; set; }
    }
    public class CompiledResultModal_Request
    {
        public long Offered_Course_ID { get; set; }
        public long CourseCategory { get; set; }
    }
    public class Assessment_Marks_Modal_Request
    {
        public long Offered_Course_ID { get; set; }
        public string Type { get; set; }
        public long Student_ID { get; set; }
    }
    public class AssessmentMarksModalResponse
    {
        public string Assessment_Title { get; set; }
        public string Assessment_Name { get; set; }
        public string Assessment_Number { get; set; }
        public double Assessment_Marks { get; set; }
        public bool IS_LOCKED { get; set; }
        public string Enrollment { get; set; }
        public int StudentID { get; set; }
        public string Name { get; set; }
        public string Assessment_Sub_Detail_ID { get; set; }
        public string Question_Number { get; set; }
        public string Weightage { get; set; }
        public string CLO_Title { get; set; }
        public string Question_Marks { get; set; }
        public string Question_Obtained_Marks { get; set; }
        public string AssessmentMarksID { get; set; }
        
    }
    public class AssessmentCLOModalResponse
    {
        public string CLOTitle { get; set; }
        public string AssessmentTitle { get; set; }
        public string QuestionNumberOrPerformanceIndicator { get; set; }
        public double QuestionMarks { get; set; }
        public double ObtainedMarks { get; set; }
        public double Weightage { get; set; }
        public double Weightaged_Total_Marks { get; set; }
        public double Weightaged_Obtained_Marks { get; set; }


    }
}
