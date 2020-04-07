using Microsoft.EntityFrameworkCore;
using STSVDataAccess.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace STSVDataAccess.STSVDataAccess
{
    public class StudentHandBookDataContext : DbContext
    {
        public StudentHandBookDataContext(DbContextOptions options) : base(options) { }

        public DbSet<Menu> Menus { get; set; }
        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
        public DbSet<WebsitePage> WebsitePages { get; set; }
        public DbSet<AttachmentWebPage> AttachmentWebPages { get; set; }
    }
}
