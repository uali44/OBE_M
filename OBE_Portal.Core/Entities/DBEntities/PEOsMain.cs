using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class PEOsMain: CommonAttributes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long peoMainId { get; set; }
        public long programId { get; set; }
        public long AdmissionOpenProgramId { get; set; }
        public string description { get; set; }
    }
}
