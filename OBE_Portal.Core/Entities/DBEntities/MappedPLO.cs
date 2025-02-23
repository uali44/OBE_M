using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class MappedPLO
    {
        [Key]
        public long MappedPLOSID { get; set; }
        public long CoursesCLOSID { get; set; }
        [Column("MappedPLO")]
        public int MappedPloId { get; set; }
    }
}
