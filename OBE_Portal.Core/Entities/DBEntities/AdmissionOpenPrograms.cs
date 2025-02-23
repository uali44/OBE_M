using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class AdmissionOpenPrograms
    {
        [Key]
        public int AdmissionOpenProgramID { get; set; }
        public Int16 SemesterID { get; set; }
        public int ProgramID { get; set; }
        public long? PEO_Scheme_ID { get; set; }
        public long? PLO_Scheme_ID { get; set; }
        public long? Assessment_Total_Marks_ID { get; set; }
        public long?  Grading_Scheme_ID { get; set; }
    }
}
