using OBE_Portal.Core.Entities.AssessmentDetails;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Interfaces.AssessmentDetails
{
    public interface IAssessmentDetails
    {
        Task<CoursesAssessmentAndCLOSDetails> GetAssessmentDetailsCourse(GetAssessmentDetailsForSDelectedCourse Request);
        Task<bool> SaveAssessmentDetailsCourse(SaveAssessmentDetailsRequest Request);
        Task<bool> SaveAssessmentDetailsLab(SaveAssessmentDetailsRequestLab Request);
        Task<bool> DeleteSelectedAssessmentDetails(SelectedAssessmentRequest Request);
        Task<bool> UpdateAssessmentDetailsCourse(SaveAssessmentDetailsForUpdateRequest Request);
        Task<bool> UpdateAssessmentDetailsLab(SaveAssessmentDetailsForUpdateRequestLab Request);
        Task<bool> SaveAssessmentDetailsFYP(SaveAssessmentDetailsFYPRequest Request);
        Task<bool> UpdateAssessmentDetailsFYP(SaveAssessmentDetailsForUpdateRequestFYP Request);

    }
}
