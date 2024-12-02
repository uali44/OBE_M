using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using OBE_Portal.Core.Context;
using OBE_Portal.Infrastructure.Implementations.AssessmentDetails;
using OBE_Portal.Infrastructure.Implementations.AssessmentMarks;
using OBE_Portal.Infrastructure.Implementations.AssignedCourses;
using OBE_Portal.Infrastructure.Implementations.CompiledResult;
using OBE_Portal.Infrastructure.Implementations.CourseCLOS;
using OBE_Portal.Infrastructure.Implementations.Dashboard;
using OBE_Portal.Infrastructure.Implementations.Header;
using OBE_Portal.Infrastructure.Implementations.CourseSearch;
using OBE_Portal.Infrastructure.Interfaces;
using OBE_Portal.Infrastructure.Interfaces.AssessmentDetails;
using OBE_Portal.Infrastructure.Interfaces.AssessmentMarks;
using OBE_Portal.Infrastructure.Interfaces.AssignedCourses;
using OBE_Portal.Infrastructure.Interfaces.CompiledResult;
using OBE_Portal.Infrastructure.Interfaces.CourseSearch;
using OBE_Portal.Infrastructure.Interfaces.Dashboard;
using OBE_Portal.Infrastructure.Interfaces.Email;
using OBE_Portal.Infrastructure.Interfaces.Header;
using OBE_Portal.Infrastructure.Interfaces.Login;
using OBE_Portal.Infrastructure.Interfaces.Password;
using OBE_Portal.Infrastructure.Interfaces.Token;
using OBE_Portal.Infrastructure.Services.Email;
using OBE_Portal.Infrastructure.Services.Login;
using OBE_Portal.Infrastructure.Services.Password;
using OBE_Portal.Infrastructure.Services.Token;
using OBE_Portal.Infrastructure.Interfaces.Reports;
using OBE_Portal.Infrastructure.Implementations.Reports;
using OBE_Portal.Infrastructure.Interfaces.Student;
using OBE_Portal.Infrastructure.Implementations.Student;
using OBE_Portal.Infrastructure.Interfaces.Setting;
using OBE_Portal.Infrastructure.Implementations.Setting;
using OBE_Portal.Infrastructure.Interfaces.IndirectAssessment;
using OBE_Portal.Infrastructure.Implementations.IndirectAssessment;

namespace OBE_Portal
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.PropertyNamingPolicy = null;
            });
            services.AddControllers();
            services.AddCors(options => options.AddPolicy("Cors", builder =>
            {
                builder
                .AllowAnyOrigin()
                .WithOrigins("http://localhost:26442/","http://localhost:4200/","https://localhost:44338/api/", "https://obe.bahria.edu.pk/", "https://obe.bahria.edu.pk/api/")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
            }));
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            //services.AddSingleton<IConfiguration>(provider => Configuration);
            services.AddTransient<IEmailSender, EmailSender>();
            services.AddTransient<IToken, Token>();
            services.AddTransient<IPasswordHasher, PasswordHasher>();
            services.AddTransient<ILogin, Login>();
            services.AddTransient<IHeader, Header>();
            services.AddTransient<IAssignedCourses, AssignedCourses>();
            services.AddTransient<ICourseCLOS, CourseCLOS>();
            services.AddTransient<IDashboard, Dashboard>();
            services.AddTransient<IAssessmentDetails, AssessmentDetails>();
            services.AddTransient<IAssessmentMarks, AssessmentMarks>();
            services.AddTransient<ICompiledResult, CompiledResult>();
            services.AddTransient<ICourseSearch, CourseSearch>();
            services.AddTransient<IReport, Report>();
            services.AddTransient<IStudent, Student>();
            services.AddTransient<ISetting, Setting>();
            services.AddTransient<IIndirectAssessment, IndirectAssessment>();
            
            services.AddDistributedMemoryCache();
            services.AddMemoryCache();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateAudience = false,
                    ValidateIssuer = false,
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Tokens:Key"])),
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero //the default for this setting is 5 minutes
                };
                options.Events = new JwtBearerEvents
                {
                    OnAuthenticationFailed = context =>
                    {
                        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
                        {
                            context.Response.Headers.Add("Token-Expired", "true");
                        }
                        return Task.CompletedTask;
                    }
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseCors("Cors");
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

        }
    }
}
