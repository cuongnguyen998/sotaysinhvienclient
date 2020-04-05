using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace STSVDataAccess.Models
{
    public class Attachment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        [Column(TypeName ="nvarchar(250)")]
        public string FileName { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string FileType { get; set; }
        [Column(TypeName = "nvarchar(max)")]
        public string FilePath { get; set; }
        public bool Active { get; set; }
        public Guid? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public Guid? UpdatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
    }
}
