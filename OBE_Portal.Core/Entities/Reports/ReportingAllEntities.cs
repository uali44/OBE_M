using OBE_Portal.Core.Entities.CourseCLOS;
using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.Reports
{
    public class OfferedCourses_Request
    {
        public long DepartmentID { get; set; }
        public long SemesterID { get; set; }
        public long Status { get; set; }
        
    }
    public class GetOfferedCoursesDeparmentAndSemesterwise
    {
        public long SrNumber { get; set; }
        public int OfferedCourseID { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Title { get; set; }
        public string Course_Alias { get; set; }
        public bool Is_Completed { get; set; }
        public int courseCategory { get; set; }
        
    }
    public class GetPLOsAnalysisResult
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
        public int? CSPQuestion1 { get; set; }
        public int? CSPQuestion2 { get; set; }
        public int? CSPQuestion3 { get; set; }
        public int? CSPQuestion4 { get; set; }
        public int? CSPQuestion5 { get; set; }
        public int? CSPQuestion6 { get; set; }
        public int? CSPQuestion7 { get; set; }
        public string CSPRemarks { get; set; }
        public int? ExitQuestion1 { get; set; }
        public int? ExitQuestion2 { get; set; }
        public int? ExitQuestion3 { get; set; }
        public int? ExitQuestion4 { get; set; }
        public int? ExitQuestion5 { get; set; }
        public int? ExitQuestion6 { get; set; }
        public int? ExitQuestion7 { get; set; }
        public int? ExitQuestion8 { get; set; }
        public int? ExitQuestion9 { get; set; }
        public int? ExitQuestion10 { get; set; }
        public int? ExitQuestion11 { get; set; }
        public int? ExitQuestion12 { get; set; }
        public string ExitRemarks { get; set; }

        public int? InternshipQuestion1 { get; set; }
        public int? InternshipQuestion2 { get; set; }
        public int? InternshipQuestion3 { get; set; }
        public int? InternshipQuestion4 { get; set; }
        public int? InternshipQuestion5 { get; set; }
        public int? InternshipQuestion6 { get; set; }
        public int? InternshipQuestion7 { get; set; }
        public int? InternshipQuestion8 { get; set; }
        public int? InternshipQuestion9 { get; set; }
        public int? InternshipQuestion10 { get; set; }
        public int? InternshipQuestion11 { get; set; }
        public int? InternshipQuestion12 { get; set; }
        public string InternshipRemarks { get; set; }
    }
    public class PLO_Student_Request
    {
        public long StudentID { get; set; }
        public long PLOID { get; set; }
    }
    public class PLO_Skill_Coverage_Request
    {
        public long Intake { get; set; }
        public long Skill { get; set; }
        public long Seleced_PLO { get; set; }
    }
    public class PLOStudentResponse
    {
        public long CLOResultID { get; set; }
        public int OfferedCourseID { get; set; }
        public string semesterAlia { get; set; }    
        public string Title { get; set; }
        public string Name { get; set; }
        public string CLOTitle { get; set; }
        public string CLOResult { get; set; }
        public int courseCategory { get; set; }
        public string Grade { get; set; }
        public int Status { get; set; }
        
    }
    public class SkillCoverageResponse
    {
        public string CLO_Skill_Title { get; set; }
        public int PLO_One_Skill_Mapped_Count { get; set; }
        public int PLO_Two_Skill_Mapped_Count { get; set; }
        public int PLO_Three_Skill_Mapped_Count { get; set; }
        public int PLO_Four_Skill_Mapped_Count { get; set; }
        public int PLO_Five_Skill_Mapped_Count { get; set; }
        public int PLO_Six_Skill_Mapped_Count { get; set; }
        public int PLO_Seven_Skill_Mapped_Count { get; set; }
        public int PLO_Eight_Skill_Mapped_Count { get; set; }
        public int PLO_Nine_Skill_Mapped_Count { get; set; }
        public int PLO_Ten_Skill_Mapped_Count { get; set; }
        public int PLO_Eleven_Skill_Mapped_Count { get; set; }
        public int PLO_Twelth_Skill_Mapped_Count { get; set; }
    }
    public class SkillCoverageDetailsResponse
    {
        public string Faculty_Name { get; set; }
        public string Course_Title { get; set; }
        public string CLOTitle { get; set; }
        public string CLODescription { get; set; }
        public string CLO_Skill_Title { get; set; }
        public string PLO_Title { get; set; }
        public string CLO_Skill_Level_Title { get; set; }
        public string semesterAlia { get; set; }
        
    }
    public class PLOsCoverageResponse
    {
        public Int16 SemesterID { get; set; }
        public string semesterAlia { get; set; }
        public int PLO_One_Skill_Mapped_Count { get; set; }
        public int PLO_Two_Skill_Mapped_Count { get; set; }
        public int PLO_Three_Skill_Mapped_Count { get; set; }
        public int PLO_Four_Skill_Mapped_Count { get; set; }
        public int PLO_Five_Skill_Mapped_Count { get; set; }
        public int PLO_Six_Skill_Mapped_Count { get; set; }
        public int PLO_Seven_Skill_Mapped_Count { get; set; }
        public int PLO_Eight_Skill_Mapped_Count { get; set; }
        public int PLO_Nine_Skill_Mapped_Count { get; set; }
        public int PLO_Ten_Skill_Mapped_Count { get; set; }
        public int PLO_Eleven_Skill_Mapped_Count { get; set; }
        public int PLO_Twelth_Skill_Mapped_Count { get; set; }
    }
    public class PLOsCoverageCourseWiseResponse
    {
        public Int16 SemesterID { get; set; }
        public string semesterAlia { get; set; }
        public string Title { get; set; }
        public int PLO_One_Skill_Mapped_Count { get; set; }
        public int PLO_Two_Skill_Mapped_Count { get; set; }
        public int PLO_Three_Skill_Mapped_Count { get; set; }
        public int PLO_Four_Skill_Mapped_Count { get; set; }
        public int PLO_Five_Skill_Mapped_Count { get; set; }
        public int PLO_Six_Skill_Mapped_Count { get; set; }
        public int PLO_Seven_Skill_Mapped_Count { get; set; }
        public int PLO_Eight_Skill_Mapped_Count { get; set; }
        public int PLO_Nine_Skill_Mapped_Count { get; set; }
        public int PLO_Ten_Skill_Mapped_Count { get; set; }
        public int PLO_Eleven_Skill_Mapped_Count { get; set; }
        public int PLO_Twelth_Skill_Mapped_Count { get; set; }
    }
    public class CLOPLOMappingResponse
    {
        public Int16 SemesterID { get; set; }
        public string semesterAlia { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string CLOTitle { get; set; }
        public string CLODescription { get; set; }
        public int CLO_Attainment { get; set; }
        public string PLO_Title { get; set; }
        public string CLO_Skill_Title { get; set; }
        public string CLO_Skill_Level_Title { get; set; }
    }
    public class CLOAttainmentResponse
    {
        public Int16 SemesterID { get; set; }
        public long CoursesCLOSID { get; set; }
        public string semesterAlia { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string Intake { get; set; }
        public string CLOTitle { get; set; }
        public string CLODescription { get; set; }
        public int CLO_Attainment { get; set; }
        public string PLO_Title { get; set; }
        public string CLO_Skill_Title { get; set; }
        public string CLO_Skill_Level_Title { get; set; }
        public int CLOStatus { get; set; }
    }
    public class CLOAttainmentDetailsResponse
    {
        public string Name { get; set; }
        public string Enrollment { get; set; }
        public string CLOResult { get; set; }
        public bool CLOStatus { get; set; }
    }
    public class GetAllStudentWhoPassedCourseButFailedCLOMainResponse
    {
        public int OfferedCourseID { get; set; }
        public string Intake { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public int StudentFailedCount { get; set; }
        public int TotalStudentCount { get; set; }
    }
    public class GetAllStudentWhoPassedCourseButFailedCLODetailsResponse
    {
        
        public long CLOResultID { get; set; }
        public int RegisteredCourseID { get; set; }
        public int OfferedCourseID { get; set; }
        public Int16 SemesterID { get; set; }
        public int StudentID { get; set; }
        public long CourseCLOID { get; set; }
        public string Intake { get; set; }
        public string Name { get; set; }
        public string Enrollment { get; set; }
        public string Title { get; set; }
        public double Total_Marks { get; set; }
        public string Grade { get; set; }
        public string CLOTitle { get; set; }
        public string CLOResult { get; set; }
        public bool CLOStatus { get; set; }
        public bool IsCQISubmitted { get; set; }
        public string CQIAction { get; set; }
        

    }
    public class PLOs_Coverage_Request
    {
        public long Intake { get; set; }
        public long Semester { get; set; }
        public long Seleced_PLO { get; set; }
    }
    public class SaveRemarksRequest
    {
        public long CourseCLOID { get; set; }
        public string Remarks { get; set; }
    }   
    public class CourseGradeCountResponse
    {
        public string Grade_Title { get; set; }
        public double Min_Range { get; set; }
        public double Max_Range { get; set; }
        
        public int Grade_Count { get; set; }
        public int Total_Student_Count { get; set; }
        public double Grade_Percentage { get; set; }
    }
    public class CourseCLOsAttainmentCountResponse
    {
        public string CLOTitle { get; set; }
        public int Less_Then_Fifty { get; set; }
        public int Greater_Or_Equal_Fifty_Less_Then_Seventy { get; set; }
        public int Greater_Or_Equal_Seventy_Less_Then_Eigthy_Four { get; set; }
        public int Greater_Or_Equal_Eigthy_Four { get; set; }
    }
    public class CLOsMarksDetailResponse
    {
        public string CLOTitle { get; set; }
        public string Assessment_Title { get; set; }
        public double QuestionMarks { get; set; }
        public int QuestionNumber { get; set; }
        public double Weightage { get; set; }
        public double Weighted_Marks { get; set; }
    }

    public class CourseCLOSOverPLOSResponse
    {
        public string CLOTitle { get; set; }
        public double P1Marks { get; set; }
        public double P1Weightage { get; set; }
        public double P2Marks { get; set; }
        public double P2Weightage { get; set; }
        public double P3Marks { get; set; }
        public double P3Weightage { get; set; }
        public double P4Marks { get; set; }
        public double P4Weightage { get; set; }
        public double P5Marks { get; set; }
        public double P5Weightage { get; set; }
        public double P6Marks { get; set; }
        public double P6Weightage { get; set; }
        public double P7Marks { get; set; }
        public double P7Weightage { get; set; }
        public double P8Marks { get; set; }
        public double P8Weightage { get; set; }
        public double P9Marks { get; set; }
        public double P9Weightage { get; set; }
        public double P10Marks { get; set; }
        public double P10Weightage { get; set; }
        public double P11Marks { get; set; }
        public double P11Weightage { get; set; }
        public double P12Marks { get; set; }
        public double P12Weightage { get; set; }
        public int AssesssmentMappedCount { get; set; }
    }
    public class CourseCLOSCARResponse
    {
        public long Sr_Number { get; set; }
        public long CoursesCLOSID { get; set; }
        public string CLOTitle { get; set; }
        public string CLODescription { get; set; }
        public string CLO_Skill_Title { get; set; }
        public string PLO_Title { get; set; }
        public string CLO_Skill_Level_Title { get; set; }
        public bool Can_Change { get; set; }
        public string CLOSkill { get; set; }
        public string CLOSkillLevel { get; set; }
        public int MappedPLO { get; set; }
        public int CLO_Attainment { get; set; }
        public bool Is_Course { get; set; }
        public string Direct_Remarks_CQI_Cycle { get; set; }
        public string Indirect_Remarks { get; set; }
    }
    public class CourseGradeDistribution
    {
        public long GradingSchemeID { get; set; }
        public string Grades { get; set; }
        public string MinMarks { get; set; }
        public string MaxMarks { get; set; }
        public double AverageMarks { get; set; }
        public string AverageGrade { get; set; }
        public double AverageGPAPoints { get; set; }
        public string GradesCount { get; set; }
    }
    public class CarFeedbackResponse
    {
        public string Tb1Q1Answer { get; set; }
        public string Tb1Q1Remarks { get; set; }
        public string Tb1Q2Answer { get; set; }
        public string Tb1Q2Remarks { get; set; }
        public string Tb1Q3Answer { get; set; }
        public string Tb1Q3Remarks { get; set; }
        public string Tb2Q1Answer { get; set; }
        public string Tb2Q1Remarks { get; set; }
        public string Tb2Q2Answer { get; set; }
        public string Tb2Q2Remarks { get; set; }
        public string Tb2Q3Answer { get; set; }
        public string Tb2Q3Remarks { get; set; }
        public double? QuizPerformance { get; set; }
        public double? AssignmentPerformance { get; set; }
        public double? ProjectPerformance { get; set; }
        public double? MidsFinalPerformance { get; set; }
        public double? PresentationPerformance { get; set; }
        public double? CEPPerformance { get; set; }
        public string Tb3Q1Remarks { get; set; }
        public string Tb3Q2Answer { get; set; }
        public string Tb3Q2Remarks { get; set; }
        public int? NumberOfCLOFailed { get; set; }
        public int? NumberOfStudentFailedInCLO { get; set; }
        public int? NumberOfPLOFailed { get; set; }
        public int? NumberOfStudentFailedInPLO { get; set; }
        public string Tb4Q1Answer { get; set; }
        public string Tb4Q2Remarks { get; set; }
    }

    public class Course_Assessment_Details_Response {
        public List<CourseCLOSCARResponse> GetCourseCLOS { get; set; }
        public List<CourseGradeCountResponse> GetCourseGrade { get; set; }
        public List<CourseCLOsAttainmentCountResponse> GetCourseCLOsAttainmentCount { get; set; }
        public List<CLOsMarksDetailResponse> GetCourseCLOsMarksDetails { get; set; }
        public List<CourseCLOSOverPLOSResponse> CourseCLOSOverPLOS { get; set; }
        public List<CourseGradeDistribution> CourseGradeDistribution { get; set; }
        public List<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse> GetAllStudentWhoPassedCourseButFailedCLODetailsResponse { get; set; }
        public CarFeedbackResponse CarFeedbackResponse { get; set; }
        
    }
    public class SaveTable1FormRequest
    {
        public string Q1Answer { get; set; }
        public string Q1Remarks { get; set; }
        public string Q2Answer { get; set; }
        public string Q2Remarks { get; set; }
        public string Q3Answer { get; set; }
        public string Q3Remarks { get; set; }
        public long OfferedCourseID { get; set; }
        public long UserID { get; set; }
    }
    public class SaveTable3FormRequest
    {
        public long Quiz { get; set; }
        public long Assignment { get; set; }
        public long CourseProject { get; set; }
        public long MidsFinals { get; set; }
        public long Presentation { get; set; }
        public long CEP { get; set; }
        public string Tb3Q1Remarks { get; set; }
        public string Tb3Q2 { get; set; }
        public string Tb3Q2Remarks { get; set; }
        public long OfferedCourseID { get; set; }
        public long UserID { get; set; }
    }
    public class SaveTable4FormRequest
    {
        public long FailedCLOS { get; set; }
        public long FailedStudentsInCLOS { get; set; }
        public long FailedPLOS { get; set; }
        public long FailedStudentsInPLOS { get; set; }
        public string Tb4Q1 { get; set; }
        public string Tb4Q2Remarks { get; set; }
        public long OfferedCourseID { get; set; }
        public long UserID { get; set; }
    }
    public class CLOPLOSkillsMappingResponse
    {
        public Int16 SemesterID { get; set; }
        public string semesterAlia { get; set; }
        public string Name { get; set; }
        public string Title { get; set; }
        public string PLO1Mapping { get; set; }
        public string PLO2Mapping { get; set; }
        public string PLO3Mapping { get; set; }
        public string PLO4Mapping { get; set; }
        public string PLO5Mapping { get; set; }
        public string PLO6Mapping { get; set; }
        public string PLO7Mapping { get; set; }
        public string PLO8Mapping { get; set; }
        public string PLO9Mapping { get; set; }
        public string PLO10Mapping { get; set; }
        public string PLO11Mapping { get; set; }
        public string PLO12Mapping { get; set; }
    }
    public class MarksStatusRequest
    {
        public long Offered_Course_ID { get; set; }
        public long CourseCategory { get; set; }
        public long Status { get; set; }
    }

    public class CourseStatusRequest
    {
        public long Offered_Course_ID { get; set; }
        public long Status { get; set; }
    }

    public class FacultyChangeRequest
    {
        public long FacultyMemberID { get; set; }
        public long OfferedCourseID { get; set; }
    }
    public class CLOsAttainmentRequest
    {
        public long Institute { get; set; }
        public long Deaprtment { get; set; }
        public long Semester { get; set; }
    }
    public class AddCQICycleRequest
    {
        public long StudentID { get; set; }
        public long RegisteredCourseID { get; set; }
        public long CourseCLOID { get; set; }
        public string Action { get; set; }
    }
    public class CSPSummaryResponse
    {
        public int TotalStudentCount { get; set; }

        public int? CSPQuestion1Count5 { get; set; }
        public int? CSPQuestion1Count4 { get; set; }
        public int? CSPQuestion1Count3 { get; set; }
        public int? CSPQuestion1Count2 { get; set; }
        public int? CSPQuestion1Count1 { get; set; }

        public int? CSPQuestion2Count5 { get; set; }
        public int? CSPQuestion2Count4 { get; set; }
        public int? CSPQuestion2Count3 { get; set; }
        public int? CSPQuestion2Count2 { get; set; }
        public int? CSPQuestion2Count1 { get; set; }

        public int? CSPQuestion3Count5 { get; set; }
        public int? CSPQuestion3Count4 { get; set; }
        public int? CSPQuestion3Count3 { get; set; }
        public int? CSPQuestion3Count2 { get; set; }
        public int? CSPQuestion3Count1 { get; set; }
                  
        public int? CSPQuestion4Count5 { get; set; }
        public int? CSPQuestion4Count4 { get; set; }
        public int? CSPQuestion4Count3 { get; set; }
        public int? CSPQuestion4Count2 { get; set; }
        public int? CSPQuestion4Count1 { get; set; }
                  
        public int? CSPQuestion5Count5 { get; set; }
        public int? CSPQuestion5Count4 { get; set; }
        public int? CSPQuestion5Count3 { get; set; }
        public int? CSPQuestion5Count2 { get; set; }
        public int? CSPQuestion5Count1 { get; set; }
                  
        public int? CSPQuestion6Count5 { get; set; }
        public int? CSPQuestion6Count4 { get; set; }
        public int? CSPQuestion6Count3 { get; set; }
        public int? CSPQuestion6Count2 { get; set; }
        public int? CSPQuestion6Count1 { get; set; }
                  
        public int? CSPQuestion7Count5 { get; set; }
        public int? CSPQuestion7Count4 { get; set; }
        public int? CSPQuestion7Count3 { get; set; }
        public int? CSPQuestion7Count2 { get; set; }
        public int? CSPQuestion7Count1 { get; set; }
    }
    public class ExitSummaryResponse
    {
        public int TotalStudentCount { get; set; }

        public int? ExitQuestion1Count5 { get; set; }
        public int? ExitQuestion1Count4 { get; set; }
        public int? ExitQuestion1Count3 { get; set; }
        public int? ExitQuestion1Count2 { get; set; }
        public int? ExitQuestion1Count1 { get; set; }
                  
        public int? ExitQuestion2Count5 { get; set; }
        public int? ExitQuestion2Count4 { get; set; }
        public int? ExitQuestion2Count3 { get; set; }
        public int? ExitQuestion2Count2 { get; set; }
        public int? ExitQuestion2Count1 { get; set; }
                  
        public int? ExitQuestion3Count5 { get; set; }
        public int? ExitQuestion3Count4 { get; set; }
        public int? ExitQuestion3Count3 { get; set; }
        public int? ExitQuestion3Count2 { get; set; }
        public int? ExitQuestion3Count1 { get; set; }
                  
        public int? ExitQuestion4Count5 { get; set; }
        public int? ExitQuestion4Count4 { get; set; }
        public int? ExitQuestion4Count3 { get; set; }
        public int? ExitQuestion4Count2 { get; set; }
        public int? ExitQuestion4Count1 { get; set; }
                  
        public int? ExitQuestion5Count5 { get; set; }
        public int? ExitQuestion5Count4 { get; set; }
        public int? ExitQuestion5Count3 { get; set; }
        public int? ExitQuestion5Count2 { get; set; }
        public int? ExitQuestion5Count1 { get; set; }
                  
        public int? ExitQuestion6Count5 { get; set; }
        public int? ExitQuestion6Count4 { get; set; }
        public int? ExitQuestion6Count3 { get; set; }
        public int? ExitQuestion6Count2 { get; set; }
        public int? ExitQuestion6Count1 { get; set; }
                  
        public int? ExitQuestion7Count5 { get; set; }
        public int? ExitQuestion7Count4 { get; set; }
        public int? ExitQuestion7Count3 { get; set; }
        public int? ExitQuestion7Count2 { get; set; }
        public int? ExitQuestion7Count1 { get; set; }
                  
        public int? ExitQuestion8Count5 { get; set; }
        public int? ExitQuestion8Count4 { get; set; }
        public int? ExitQuestion8Count3 { get; set; }
        public int? ExitQuestion8Count2 { get; set; }
        public int? ExitQuestion8Count1 { get; set; }
                  
        public int? ExitQuestion9Count5 { get; set; }
        public int? ExitQuestion9Count4 { get; set; }
        public int? ExitQuestion9Count3 { get; set; }
        public int? ExitQuestion9Count2 { get; set; }
        public int? ExitQuestion9Count1 { get; set; }
                  
        public int? ExitQuestion10Count5 { get; set; }
        public int? ExitQuestion10Count4 { get; set; }
        public int? ExitQuestion10Count3 { get; set; }
        public int? ExitQuestion10Count2 { get; set; }
        public int? ExitQuestion10Count1 { get; set; }
                  
        public int? ExitQuestion11Count5 { get; set; }
        public int? ExitQuestion11Count4 { get; set; }
        public int? ExitQuestion11Count3 { get; set; }
        public int? ExitQuestion11Count2 { get; set; }
        public int? ExitQuestion11Count1 { get; set; }
                  
        public int? ExitQuestion12Count5 { get; set; }
        public int? ExitQuestion12Count4 { get; set; }
        public int? ExitQuestion12Count3 { get; set; }
        public int? ExitQuestion12Count2 { get; set; }
        public int? ExitQuestion12Count1 { get; set; }
    }
    public class InternshipSummaryResponse
    {
        public int TotalStudentCount { get; set; }

        public int? InternshipQuestion1Count5 { get; set; }
        public int? InternshipQuestion1Count4 { get; set; }
        public int? InternshipQuestion1Count3 { get; set; }
        public int? InternshipQuestion1Count2 { get; set; }
        public int? InternshipQuestion1Count1 { get; set; }
                  
        public int? InternshipQuestion2Count5 { get; set; }
        public int? InternshipQuestion2Count4 { get; set; }
        public int? InternshipQuestion2Count3 { get; set; }
        public int? InternshipQuestion2Count2 { get; set; }
        public int? InternshipQuestion2Count1 { get; set; }
                  
        public int? InternshipQuestion3Count5 { get; set; }
        public int? InternshipQuestion3Count4 { get; set; }
        public int? InternshipQuestion3Count3 { get; set; }
        public int? InternshipQuestion3Count2 { get; set; }
        public int? InternshipQuestion3Count1 { get; set; }
                  
        public int? InternshipQuestion4Count5 { get; set; }
        public int? InternshipQuestion4Count4 { get; set; }
        public int? InternshipQuestion4Count3 { get; set; }
        public int? InternshipQuestion4Count2 { get; set; }
        public int? InternshipQuestion4Count1 { get; set; }
                  
        public int? InternshipQuestion5Count5 { get; set; }
        public int? InternshipQuestion5Count4 { get; set; }
        public int? InternshipQuestion5Count3 { get; set; }
        public int? InternshipQuestion5Count2 { get; set; }
        public int? InternshipQuestion5Count1 { get; set; }
                  
        public int? InternshipQuestion6Count5 { get; set; }
        public int? InternshipQuestion6Count4 { get; set; }
        public int? InternshipQuestion6Count3 { get; set; }
        public int? InternshipQuestion6Count2 { get; set; }
        public int? InternshipQuestion6Count1 { get; set; }
                  
        public int? InternshipQuestion7Count5 { get; set; }
        public int? InternshipQuestion7Count4 { get; set; }
        public int? InternshipQuestion7Count3 { get; set; }
        public int? InternshipQuestion7Count2 { get; set; }
        public int? InternshipQuestion7Count1 { get; set; }
                  
        public int? InternshipQuestion8Count5 { get; set; }
        public int? InternshipQuestion8Count4 { get; set; }
        public int? InternshipQuestion8Count3 { get; set; }
        public int? InternshipQuestion8Count2 { get; set; }
        public int? InternshipQuestion8Count1 { get; set; }
                  
        public int? InternshipQuestion9Count5 { get; set; }
        public int? InternshipQuestion9Count4 { get; set; }
        public int? InternshipQuestion9Count3 { get; set; }
        public int? InternshipQuestion9Count2 { get; set; }
        public int? InternshipQuestion9Count1 { get; set; }
                  
        public int? InternshipQuestion10Count5 { get; set; }
        public int? InternshipQuestion10Count4 { get; set; }
        public int? InternshipQuestion10Count3 { get; set; }
        public int? InternshipQuestion10Count2 { get; set; }
        public int? InternshipQuestion10Count1 { get; set; }
                  
        public int? InternshipQuestion11Count5 { get; set; }
        public int? InternshipQuestion11Count4 { get; set; }
        public int? InternshipQuestion11Count3 { get; set; }
        public int? InternshipQuestion11Count2 { get; set; }
        public int? InternshipQuestion11Count1 { get; set; }
                  
        public int? InternshipQuestion12Count5 { get; set; }
        public int? InternshipQuestion12Count4 { get; set; }
        public int? InternshipQuestion12Count3 { get; set; }
        public int? InternshipQuestion12Count2 { get; set; }
        public int? InternshipQuestion12Count1 { get; set; }
    }
    public class IntakeAllStudentResponse
    {
        public int StudentID { get; set; }
        public string Name { get; set; }
        public string Enrollment { get; set; }
        public bool IsActive { get; set; }
    }
}
