using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace STSVDataAccess.Models
{
    public class Menu
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string MenuName { get; set; }
        public Guid? ParentId { get; set; }
        public int Order { get; set; }
        public bool Active { get; set; }
        public Guid? QuoteId { get; set; }
        public Guid? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }

        public virtual Quote Quote { get; set; }
    }
}
