using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Core.Entities.DBEntities
{
    public class CommonAttributes
    {
        public bool? Is_Deleted { get; set; }
        public long? Created_By { get; set; }
        public DateTime? Created_Date { get; set; }
        public long? Modified_By { get; set; }
        public DateTime? Modified_Date { get; set; }
    }
}
