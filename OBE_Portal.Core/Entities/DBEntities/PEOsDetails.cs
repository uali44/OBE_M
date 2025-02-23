using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class PEOsDetails: CommonAttributes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long peoId { get; set; }
        public long peoMainId { get; set; }
        public string peoTitle { get; set; }
        public string peoDescription { get; set; }
    }
}
