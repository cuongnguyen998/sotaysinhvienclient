using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using STSVAuthentication.Data;

[assembly: HostingStartup(typeof(sotaysinhvienclient.Areas.Identity.IdentityHostingStartup))]
namespace sotaysinhvienclient.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<IdentityContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("IdentityContextConnection")));
                services.AddDefaultIdentity<IdentityUser>()
                    .AddEntityFrameworkStores<IdentityContext>();
            });
        }
    }
}