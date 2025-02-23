using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class PLOS_Main_Details : CommonAttributes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PLO_ID { get; set; }
        public long PLO_Title_Id { get; set; }
        public string PLO_Title { get; set; }
        public string Description { get; set; }
        [NotMapped]
        public long Old_PLO_ID { get; set; }
    }
}
