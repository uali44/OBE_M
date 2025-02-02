using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.IndirectAssessment
{
    public class SaveCSPFormRequest {
        public string CSPQuestion1 { get; set; }
        public string CSPQuestion2 { get; set; }
        public string CSPQuestion3 { get; set; }
        public string CSPQuestion4 { get; set; }
        public string CSPQuestion5 { get; set; }
        public string CSPQuestion6 { get; set; }
        public string CSPQuestion7 { get; set; }
        public string CSPSurveyFormRemarks { get; set; }
        public int StudentID { get; set; }
    }
    public class SaveExitFormRequest
    {
        public string ExitQuestion1 { get; set; }
        public string ExitQuestion2 { get; set; }
        public string ExitQuestion3 { get; set; }
        public string ExitQuestion4 { get; set; }
        public string ExitQuestion5 { get; set; }
        public string ExitQuestion6 { get; set; }
        public string ExitQuestion7 { get; set; }
        public string ExitQuestion8 { get; set; }
        public string ExitQuestion9 { get; set; }
        public string ExitQuestion10 { get; set; }
        public string ExitQuestion11 { get; set; }
        public string ExitQuestion12 { get; set; }
        public string ExitSurveyFormRemarks { get; set; }
        public int StudentID { get; set; }
    }
    public class SaveInternshipFormRequest
    {
        public string InternshipQuestion1 { get; set; }
        public string InternshipQuestion2 { get; set; }
        public string InternshipQuestion3 { get; set; }
        public string InternshipQuestion4 { get; set; }
        public string InternshipQuestion5 { get; set; }
        public string InternshipQuestion6 { get; set; }
        public string InternshipQuestion7 { get; set; }
        public string InternshipQuestion8 { get; set; }
        public string InternshipQuestion9 { get; set; }
        public string InternshipQuestion10 { get; set; }
        public string InternshipQuestion11 { get; set; }
        public string InternshipQuestion12 { get; set; }
        public string InternshipSurveyFormRemarks { get; set; }
        public int StudentID { get; set; }
    }


    public class SurveyCreateRequest
    {
        public SurveyMainDetailDto SurveyMainDetail { get; set; }
        public List<SurveySubDetailDto> SurveySubDetails { get; set; }
    }

    public class SurveyMainDetailDto
    {
        public string SurveyType { get; set; }
        public int SurveyDeptID { get; set; }
        public int CreatedBy { get; set; }
    }

    public class SurveySubDetailDto
    {
        public string Question { get; set; }
        public string QType { get; set; }
        public string Mapping { get; set; }
        public List<string> Options { get; set; }
    }

    public class SurveyMainDetail
    {
        public int SurveyID { get; set; }
        public string SurveyType { get; set; }
        public int SurveyDeptID { get; set; }
        public ICollection<SurveySubDetail> SurveySubDetails { get; set; }
    }

    public class SurveySubDetail
    {
        public int QID { get; set; }
        public int SurveyID { get; set; }
        public string Question { get; set; }
        public string QType { get; set; }
        public string Mapping { get; set; }
        public int createdBy { get; set; }
        public DateTime createdDate { get; set; }
        public ICollection<SurveySubDetailOption> SurveySubDetailOptions { get; set; }
    }

    public class SurveySubDetailOption
    {
        public int QID { get; set; }
        public string Options { get; set; }
    }

    public class SurveyResponseDto
    {
        public int SurveyID { get; set; }
        public string SurveyType { get; set; }
        public int SurveyDeptID { get; set; }
        public List<SurveyQuestionDto> Questions { get; set; }
    }

    public class SurveyQuestionDto
    {
        public int QID { get; set; }
        public string Question { get; set; }
        public string QType { get; set; }
        public string Mapping { get; set; }
        public List<SurveySubDetailOption> Options { get; set; }
    }
    public class OoptionsDto
    {
        public int QID { get; set; }
        public string Options { get; set; }
    }
    public class getSurveyRequest
    {
        public string Surveytype { get; set; }
        public int Deptid { get; set; }
    }
}
