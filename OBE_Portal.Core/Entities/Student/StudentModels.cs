using System.Collections.Generic;

namespace OBE_Portal.Core.Entities.Student
{
    public class StudentPLOsAnalysisResult
    {
        public int StudentID { get; set; }
        public int AdmissionOpenProgramID { get; set; }
        public string Name { get; set; }
        public string Enrollment { get; set; }
        public int Total_PLO_One_Count { get; set; }
        public int PLO_One_Pass_Count { get; set; }
        public int PLO_One_Fail_Count { get; set; }
        public double PLO_One_Attainment { get; set; }
        public int Total_PLO_Two_Count { get; set; }
        public int PLO_Two_Pass_Count { get; set; }
        public int PLO_Two_Fail_Count { get; set; }
        public double PLO_Two_Attainment { get; set; }
        public int Total_PLO_Three_Count { get; set; }
        public int PLO_Three_Pass_Count { get; set; }
        public int PLO_Three_Fail_Count { get; set; }
        public double PLO_Three_Attainment { get; set; }
        public int Total_PLO_Four_Count { get; set; }
        public int PLO_Four_Pass_Count { get; set; }
        public int PLO_Four_Fail_Count { get; set; }
        public double PLO_Four_Attainment { get; set; }
        public int Total_PLO_Five_Count { get; set; }
        public int PLO_Five_Pass_Count { get; set; }
        public int PLO_Five_Fail_Count { get; set; }
        public double PLO_Five_Attainment { get; set; }
        public int Total_PLO_Six_Count { get; set; }
        public int PLO_Six_Pass_Count { get; set; }
        public int PLO_Six_Fail_Count { get; set; }
        public double PLO_Six_Attainment { get; set; }
        public int Total_PLO_Seven_Count { get; set; }
        public int PLO_Seven_Pass_Count { get; set; }
        public int PLO_Seven_Fail_Count { get; set; }
        public double PLO_Seven_Attainment { get; set; }
        public int Total_PLO_Eight_Count { get; set; }
        public int PLO_Eight_Pass_Count { get; set; }
        public int PLO_Eight_Fail_Count { get; set; }
        public double PLO_Eight_Attainment { get; set; }
        public int Total_PLO_Nine_Count { get; set; }
        public int PLO_Nine_Pass_Count { get; set; }
        public int PLO_Nine_Fail_Count { get; set; }
        public double PLO_Nine_Attainment { get; set; }
        public int Total_PLO_Ten_Count { get; set; }
        public int PLO_Ten_Pass_Count { get; set; }
        public int PLO_Ten_Fail_Count { get; set; }
        public double PLO_Ten_Attainment { get; set; }
        public int Total_PLO_Eleven_Count { get; set; }
        public int PLO_Eleven_Pass_Count { get; set; }
        public int PLO_Eleven_Fail_Count { get; set; }
        public double PLO_Eleven_Attainment { get; set; }
        public int Total_PLO_Twelth_Count { get; set; }
        public int PLO_Twelth_Pass_Count { get; set; }
        public int PLO_Twelth_Fail_Count { get; set; }
        public double PLO_Twelth_Attainment { get; set; }
        public bool Need_Attention { get; set; }
        public bool Below_Average { get; set; }
        public long PLO_Passing_Criteria { get; set; }
    }
    public class AllPLOSStudentResponse
    {
        public long CLOResultID { get; set; }
        public int OfferedCourseID { get; set; }
        public string semesterAlia { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string CLOTitle { get; set; }
        public double CLOResult { get; set; }
        public int courseCategory { get; set; }
        public string Grade { get; set; }
        public int Status { get; set; }
        public int MappedPLO { get; set; }
    }
    public class StudentSummaryResponse
    {
        public int TotalCoursesCount { get; set; }
        public int TotalPassedCourses { get; set; }
        public int TotalFailedCourses { get; set; }
        public int TotalCLOSCount { get; set; }
        public int TotalPassedCLOS { get; set; }
        public int TotalFailedCLO { get; set; }
        public long PLOPassingCriteria { get; set; }        
    }
    public class AllStudentPLOsDetails 
    {
        public StudentPLOsAnalysisResult StudentPLOsAnalysisResult { get; set; }
        public List<AllPLOSStudentResponse> AllPLOSStudentResponse { get; set; }
        public StudentSummaryResponse StudentSummaryResponse { get; set; }
    }
    public class AllRegisteredCoursesDetailsResponse
    {
        public long UniqueSemester { get; set; }
        public int StudentID { get; set; }
        public string Name { get; set; }
        public int OfferedCourseID { get; set; }
        public short SemesterID { get; set; }
        public string SemesterAlias { get; set; }
        public string Title { get; set; }
        public int IsPassed { get; set; }
        public string TotalMarks { get; set; }
        public string Grade { get; set; }
        public string CLOTitle { get; set; }
        public string CLOResults { get; set; }
        
    }
    public class GetCoursesDataRequest
    {
        public long StudentID { get; set; }
        public long OfferedCourseID { get; set; }

    }
    public class GetCourseCLOSResponse
    {
        public long SrNumber { get; set; }
        public string CLOTitle { get; set; }
        public string CLODescription { get; set; }
        public string CLOSkillTitle { get; set; }
        public string CLOSkillLevelTitle { get; set; }
        public string PLOTitle { get; set; }
        public string CLOResult { get; set; }
        public bool IsCLOPassed { get; set; }
        
    }
    public class GetAllAssessmentAndMarksResponse
    {
        public string AssessmentTitle { get; set; }
        public double AssessmentMarks { get; set; }
        public string QuestionMarks { get; set; }
        public string QuestionObtainedMarks { get; set; }
        public string QuestionNumber { get; set; }
        public string Weightage { get; set; }
        public string CLOTitle { get; set; }
        public int CourseCategory { get; set; }
        
    }
}
