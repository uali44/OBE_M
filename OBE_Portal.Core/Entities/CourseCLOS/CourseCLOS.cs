using System;
using System.Collections.Generic;
using System.Text;

namespace OBE_Portal.Core.Entities.CourseCLOS
{
    public class CourseCLOSResponse
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
    }
    public class PLOSResponse
    {
        public long PLO_ID { get; set; }
        public string PLO_Title { get; set; }
    }
    public class PLOSSkillsResponse
    {
        public long CLO_Skill_ID { get; set; }
        public string CLO_Skill_Title { get; set; }
    }
    public class PLOSSkillLevelResponse
    {
        public long CLO_Skill_ID { get; set; }
        public long CLO_Skill_Level_ID { get; set; }
        public string CLO_Skill_Level_Title { get; set; }
    }
    public class AddedCLOSWithDetailsResponse
    {
        public List<CourseCLOSResponse> Course_CLOS { get; set; }
        public List<PLOSResponse> All_PLOS { get; set; }
        public List<PLOSSkillsResponse> All_PLOS_Skills { get; set; }
        public List<PLOSSkillLevelResponse> All_PLOS_Skills_Levels { get; set; }
    }
    public class Save_Course_Added_CLOS_Request
    {
        public string CLO_Title { get; set; }
        public string Description { get; set; }
        public int Selected_PLO_ID { get; set; }
        public string Selected_PLO_Title { get; set; }
        public int Selected_Skill_ID { get; set; }
        public string Selected_Skill_Title { get; set; }
        public int Selected_Skill_Level_ID { get; set; }
        public string Selected_Skill_Level_Title { get; set; }
        public int Created_By { get; set; }
        public int OfferedCourseID { get; set; }
        
    }
    public class Update_Course_Added_CLOS_Request
    {
        public int Course_CLO_ID { get; set; }
        public string Description { get; set; }
        public int Selected_PLO_ID { get; set; }
        public int Selected_Skill_ID { get; set; }
        public int Selected_Skill_Level_ID { get; set; }
        public int Modified_By { get; set; }

    }
    public class Update_Course_CLOS_Request
    {
        public int Course_CLO_IS { get; set; }
        public int Modified_By { get; set; }

    }
}
