using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace STSVDataAccess.Models
{
    public class AttachmentWebPage
    {
        [Key]
        public Guid WebsiteId { get; set; }
        public Guid AttachmentId { get; set; }
        public bool Active { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
