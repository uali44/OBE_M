using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class PLOs_Information : CommonAttributes
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long PLO_Title_Id { get; set; }
        public string Note { get; set; }
        public bool is_Default { get; set; }
    }
}
