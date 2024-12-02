using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.AssessmentDetails
{
    public class AssessmentDetailsResponseCourse
    {
        public long ASSESSMENTMAINDETAILSID { get; set; }
        public string ASSESSMENTTITLE { get; set; }
        public double ASSESSMENTMARKS { get; set; }
        public bool IS_MARKS_SUBMITTED { get; set; }
        public bool IS_LOCKED { get; set; }
        public string WEIGHTAGE { get; set; }
        public string QUESTIONNUMBER { get; set; }
        public string QUESTIONMARKS { get; set; }
        public string ASSESSMENTSUBDETAILS { get; set; }
        public string MAPPEDCLOTITLE { get; set; }
        public string BEST_PERFORMAR_NAME { get; set; }
        public string BEST_PERFORMAR_ENROLLMENT { get; set; }
        public string LOWEST_PERFORMAR_NAME { get; set; }
        public string LOWEST_PERFORMAR_NAME_ENROLLMENT { get; set; }
        public string ASSESSMENT_ATTAINMENT { get; set; }
        public string CLOS_ATTAINMENT { get; set; }
        public string Scheduled_Date { get; set; }
        public string AssessmentSubDetailsRemarks { get; set; }
        public string AssessmentRemarks { get; set; }
        public string MAPPEDCLOID { get; set; }
        public int Course_Category { get; set; }
        
    }
    public class AssessmentDetails_Response_FYP
    {
        public long ASSESSMENTMAINDETAILSID { get; set; }
        public string AssessmentRemarks { get; set; }
        public string ASSESSMENTTITLE { get; set; }
        public double ASSESSMENTMARKS { get; set; }
        public bool IS_MARKS_SUBMITTED { get; set; }
        public bool IS_LOCKED { get; set; }
        public string WEIGHTAGE { get; set; }
        public string QUESTIONNUMBER { get; set; }
        public string QUESTIONMARKS { get; set; }
        public string ASSESSMENTSUBDETAILS { get; set; }
        public string AssessmentSubDetailsRemarks { get; set; }
        public string MAPPEDCLOID { get; set; }
        public string MAPPEDCLOTITLE { get; set; }
        public string BEST_PERFORMAR_NAME { get; set; }
        public string BEST_PERFORMAR_ENROLLMENT { get; set; }
        public string LOWEST_PERFORMAR_NAME { get; set; }
        public string LOWEST_PERFORMAR_NAME_ENROLLMENT { get; set; }
        public string ASSESSMENT_ATTAINMENT { get; set; }
        public string CLOS_ATTAINMENT { get; set; }
        public string Scheduled_Date { get; set; }
        public int Course_Category { get; set; }

    }
    public class CourseAddedCLOS
    {
        public long CoursesCLOSID { get; set; }
        public string CLOTitle { get; set; }
        
    }
    public class LabPerformanceIndicator
    {
        public long Performance_Indicators_ID { get; set; }
        public string Performance_Indicators_Title { get; set; }

    }
    public class FYPAssessmentToolsStatus
    {
        public long FYPAssessmentToolID { get; set; }
        public string Title { get; set; }
        public double TotalMarks { get; set; }
        public bool IsAdded { get; set; }
      
        
    }
    public class CoursesAssessmentAndCLOSDetails
    {
        public List<AssessmentDetailsResponseCourse> getAssessmentDetailsForCourses { get; set; }
        public List<CourseAddedCLOS> getCourseAddedCLOS { get; set; }
        public List<LabPerformanceIndicator> labPerformanceIndicator { get; set; }
        public List<FYPAssessmentToolsStatus> FYPAssessmentToolsStatus { get; set; }

    }
    public class SelectedAssessmentMainDetails
    {
        public string Assessment_Title { get; set; }
        public int OfferedCourseID { get; set; }
        public int Created_By { get; set; }
        public string Scheduled_date { get; set; }
        public string Assessment_Remarks { get; set; }
        public decimal Assessment_Marks { get; set; }
    }
    public class SelectedAssessmentSubDetails
    {
        public long Question_Number { get; set; }
        public string Question_Remarks { get; set; }
        public long Selected_CLOS_ID { get; set; }
        public string Selected_CLOS_Title { get; set; }
        public decimal CLO_Weightage { get; set; }
        public decimal Question_Marks { get; set; }
        public long Created_By { get; set; }
        public long OfferedCourseID { get; set; }
    }
    public class SaveAssessmentDetailsRequest
    {
        public List<SelectedAssessmentMainDetails> SelectedAssessments { get; set; }
        public List<SelectedAssessmentSubDetails> SelectedAssessmentsDetails { get; set; }
    }
    public class SelectedAssessmentMainDetailsLab
    {
        public string Assessment_Title { get; set; }
        public long OfferedCourseID { get; set; }
        public decimal Assessment_Marks { get; set; }
        public long Created_By { get; set; }
        public string Lab_Remarks { get; set; }
        public long Select_CLO { get; set; }
        public long Weightage { get; set; }
      
    }
    public class SelectedAssessmentSubDetailsLab
    {
        public long Performance_Indicator_ID { get; set; }
        public string Performance_Indicator_Title { get; set; }
        public decimal Performance_Indicator_Marks { get; set; }
        public long Created_By { get; set; }
        public decimal CLO_Weightage { get; set; }
        public long Selected_CLOS_ID { get; set; }
        public string Selected_CLOS_Title { get; set; }
    }
    public class SelectedAssessmentSubDetailsFYP
    {
        public long Performance_Indicator_ID { get; set; }
        public string Performance_Indicator_Title { get; set; }
        public decimal Performance_Indicator_Marks { get; set; }
        public long Created_By { get; set; }
        public decimal CLO_Weightage { get; set; }
        public long Selected_CLOS_ID { get; set; }
        public string Selected_CLOS_Title { get; set; }
        public long OfferedCourseID { get; set; }
    }
    public class SaveAssessmentDetailsRequestLab
    {
        public List<SelectedAssessmentMainDetailsLab> SelectedAssessmentsLab { get; set; }
        public List<SelectedAssessmentSubDetailsLab> SelectedAssessmentsDetailsLab { get; set; }
    }

    public class SelectedAssessmentRequest
    {
        public long AssessmentMainDetailsID { get; set; }
        public long Modified_By { get; set; }

    }
    public class SaveAssessmentDetailsForUpdateRequest
    {
        public int Selected_Assessment_ID { get; set; }
        public string Assessment_Edit_Date { get; set; }
        public string Assessment_Edit_Remarks { get; set; }
        public int Modified_By { get; set; }
        public decimal Assessment_Marks { get; set; }
        public List<SelectedAssessmentSubDetailsForEdit> AssessmentSubDetails { get; set; }
    }

    public class SelectedAssessmentSubDetailsForEdit
    {
        public string Assessment_Sub_Remarks { get; set; }
        public string Mapped_CLO_Title { get; set; }
        public bool Is_Edited { get; set; }
        public bool Is_Deleted { get; set; }
        public long Assessment_Sub_Details_ID { get; set; }
        public long Mapped_CLO_ID { get; set; }
        public long Modified_By { get; set; }
        public decimal Question_Marks { get; set; }
        public long Question_Number { get; set; }
        public decimal Weightage { get; set; }
      
    }
    public class SaveAssessmentDetailsForUpdateRequestLab
    {
        public string Lab_Remarks_Assessment_Edit { get; set; }
        public long Select_CLO_Assessment_Lab_Edit { get; set; }
        public decimal Selected_CLO_Assessment_Weightage_Edit { get; set; }
        public long Selected_Assessment_ID { get; set; }
        public decimal Assessment_Marks { get; set; }
        public long Modified_By { get; set; }
        public List<SelectedAssessmentSubDetailsForEditLab> AssessmentSubDetailsLab { get; set; }
    }

    public class SelectedAssessmentSubDetailsForEditLab
    {
        public long Assessment_Sub_Details_ID { get; set; }
        public string Assessment_Sub_Remarks { get; set; }
        public bool Is_Deleted { get; set; }
        public bool Is_Edited { get; set; }
        public long Mapped_CLO_ID { get; set; }
        public string Mapped_CLO_Title { get; set; }
        public long Modified_By { get; set; }
        public string Performance_Indicator { get; set; }
        public long Performance_Indicator_ID { get; set; }
        public decimal Performance_Indicator_Marks { get; set; }
        public decimal Weightage { get; set; }

    }
    public class SelectedAssessmentSubDetailsForEditFYP
    {
        public long Assessment_Sub_Details_ID { get; set; }
        public string Assessment_Sub_Remarks { get; set; }
        public bool Is_Deleted { get; set; }
        public bool Is_Edited { get; set; }
        public long Mapped_CLO_ID { get; set; }
        public string Mapped_CLO_Title { get; set; }
        public long Modified_By { get; set; }
        public string Performance_Indicator { get; set; }
        public long Performance_Indicator_ID { get; set; }
        public decimal Performance_Indicator_Marks { get; set; }
        public decimal Weightage { get; set; }

    }
    public class GetAssessmentDetailsForSDelectedCourse
    {
        public long OfferedCourseID { get; set; }
        public long CourseCategory { get; set; }
        

    }
    public class SaveAssessmentDetailsFYPRequest
    {
        public int AssessmentToolFYPID { get; set; }
        public string AssessmentRemarks { get; set; }
        public decimal TotalAssessmentMarks { get; set; }
        public long OfferedCourseID { get; set; }
        public long CreatedBy { get; set; }
        public List<SelectedAssessmentSubDetailsFYP> AssessmentDetailsFYP { get; set; }
    }
    public class SaveAssessmentDetailsForUpdateRequestFYP
    {
        public string FYP_Remarks_Assessment_Edit { get; set; }
        public long Selected_Assessment_ID { get; set; }
        public long Modified_By { get; set; }
        public List<SelectedAssessmentSubDetailsForEditFYP> AssessmentSubDetailsFYP { get; set; }
    }
}
