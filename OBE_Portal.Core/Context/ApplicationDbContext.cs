using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Entities.AssessmentDetails;
using OBE_Portal.Core.Entities.AssessmentMarks;
using OBE_Portal.Core.Entities.AssignedCourses;
using OBE_Portal.Core.Entities.CompiledResult;
using OBE_Portal.Core.Entities.CourseCLOS;
using OBE_Portal.Core.Entities.CourseSearch;
using OBE_Portal.Core.Entities.Dashboard;
using OBE_Portal.Core.Entities.Header;
using OBE_Portal.Core.Entities.Login;
using OBE_Portal.Core.Entities.Profile;
using OBE_Portal.Core.Entities.Reports;
using OBE_Portal.Core.Entities.Setting;
using OBE_Portal.Core.Entities.Student;

namespace OBE_Portal.Core.Context
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<AuthenticatedUserResponse>();
            modelBuilder.Entity<HeaderResponse>().HasNoKey();
            modelBuilder.Entity<AssignedCoursesResponse>().HasNoKey();
            modelBuilder.Entity<CourseCLOSResponse>().HasNoKey();
            modelBuilder.Entity<AssessmentDetailsResponseCourse>().HasNoKey();
            modelBuilder.Entity<DashboardResponse>().HasNoKey();
            modelBuilder.Entity<PLOSResponse>().HasNoKey();
            modelBuilder.Entity<PLOSSkillsResponse>().HasNoKey();
            modelBuilder.Entity<PLOSSkillLevelResponse>().HasNoKey();
            modelBuilder.Entity<CourseAddedCLOS>().HasNoKey();
            modelBuilder.Entity<GetRegisteredStudents>().HasNoKey();
            modelBuilder.Entity<AssessmentDetailsResponseForCourse>().HasNoKey();
            modelBuilder.Entity<GetSelectedAssessmentAndMarksResponse>().HasNoKey();
            modelBuilder.Entity<CompiledResultModal>().HasNoKey();
            modelBuilder.Entity<LabPerformanceIndicator>().HasNoKey();
            modelBuilder.Entity<ResetPasswordResponse>().HasNoKey();
            modelBuilder.Entity<CheckForValidToken>().HasNoKey();
            modelBuilder.Entity<CourseSearchModels>().HasNoKey();
            modelBuilder.Entity<Deparments>().HasNoKey();
            modelBuilder.Entity<FacultyMembers>().HasNoKey();
            modelBuilder.Entity<FacultyPassword>().HasNoKey();
            modelBuilder.Entity<Permissions>().HasNoKey();
            modelBuilder.Entity<CourseMarksForExcel>().HasNoKey();
            modelBuilder.Entity<AssessmentMarksModalResponse>().HasNoKey();
            modelBuilder.Entity<AssessmentCLOModalResponse>().HasNoKey();
            modelBuilder.Entity<GetIntakeForSelectedDepartment>().HasNoKey();
            modelBuilder.Entity<GetOfferedCoursesDeparmentAndSemesterwise>().HasNoKey();
            modelBuilder.Entity<GetAllSemester>().HasNoKey();
            modelBuilder.Entity<GetPLOsAnalysisResult>().HasNoKey();
            modelBuilder.Entity<PLOStudentResponse>().HasNoKey();
            modelBuilder.Entity<SkillCoverageResponse>().HasNoKey();
            modelBuilder.Entity<SkillCoverageDetailsResponse>().HasNoKey();
            modelBuilder.Entity<PLOsCoverageResponse>().HasNoKey();
            modelBuilder.Entity<CourseGradeCountResponse>().HasNoKey();
            modelBuilder.Entity<CourseCLOsAttainmentCountResponse>().HasNoKey();
            modelBuilder.Entity<CLOsMarksDetailResponse>().HasNoKey();
            modelBuilder.Entity<CourseCLOSOverPLOSResponse>().HasNoKey();
            modelBuilder.Entity<CourseCLOSCARResponse>().HasNoKey();
            modelBuilder.Entity<CourseGradeDistribution>().HasNoKey();
            modelBuilder.Entity<CarFeedbackResponse>().HasNoKey();
            modelBuilder.Entity<PLOsCoverageCourseWiseResponse>().HasNoKey();
            modelBuilder.Entity<FYPAssessmentToolsStatus>().HasNoKey();
            modelBuilder.Entity<CompiledResultFYPModal>().HasNoKey();
            modelBuilder.Entity<CLOPLOMappingResponse>().HasNoKey();
            modelBuilder.Entity<CLOPLOSkillsMappingResponse>().HasNoKey();
            modelBuilder.Entity<StudentDetails>().HasNoKey();
            modelBuilder.Entity<StudentPLOsAnalysisResult>().HasNoKey();
            modelBuilder.Entity<AllPLOSStudentResponse>().HasNoKey();
            modelBuilder.Entity<StudentSummaryResponse>().HasNoKey();
            modelBuilder.Entity<ResetPasswordStudentResponse>().HasNoKey();
            modelBuilder.Entity<AllRegisteredCoursesDetailsResponse>().HasNoKey();
            modelBuilder.Entity<GetCourseCLOSResponse>().HasNoKey();
            modelBuilder.Entity<GetAllAssessmentAndMarksResponse>().HasNoKey();
            modelBuilder.Entity<CLOAttainmentResponse>().HasNoKey();
            modelBuilder.Entity<CLOAttainmentDetailsResponse>().HasNoKey();
            modelBuilder.Entity<GetAllStudentWhoPassedCourseButFailedCLOMainResponse>().HasNoKey();
            modelBuilder.Entity<GetAllStudentWhoPassedCourseButFailedCLODetailsResponse>().HasNoKey();
            modelBuilder.Entity<GetIntakeStudentsResponse>().HasNoKey();
            modelBuilder.Entity<GetCourseResponse>().HasNoKey();
            modelBuilder.Entity<CSPSummaryResponse>().HasNoKey();
            modelBuilder.Entity<ExitSummaryResponse>().HasNoKey();
            modelBuilder.Entity<InternshipSummaryResponse>().HasNoKey();
            modelBuilder.Entity<IntakeAllStudentResponse>().HasNoKey();
            modelBuilder.Entity<FacultyMembersResponse>().HasNoKey();
            modelBuilder.Entity<GetUserResponse>().HasNoKey();
            modelBuilder.Entity<Roles>().HasNoKey();
            modelBuilder.Entity<GetProgramsForSelectedDepartment>().HasNoKey();
            modelBuilder.Entity<getstatus>().HasNoKey();
            modelBuilder.Entity<ActivityList>().HasNoKey();
            modelBuilder.Entity<ActivitySubDetail>().HasNoKey();
            modelBuilder.Entity<ActivityDetailResult>().HasNoKey();
            modelBuilder.Entity<FacultyDetails>().HasNoKey();
            modelBuilder.Entity<FacultyEducation>().HasNoKey();
            modelBuilder.Entity<FacultyExperience>().HasNoKey();
        }
        
        //public DbSet<Authentication> user { get; set; }
        //public DbSet<UserRefreshToken> UserRefreshTokens { get; set; }

    }
}
