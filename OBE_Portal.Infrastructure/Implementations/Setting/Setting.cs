using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.CourseCLOS;
using OBE_Portal.Core.Entities.CourseSearch;
using OBE_Portal.Core.Entities.DBEntities;
using OBE_Portal.Core.Entities.Setting;
using OBE_Portal.Infrastructure.Implementations.SMTP_Services;
using OBE_Portal.Infrastructure.Interfaces.Password;
using OBE_Portal.Infrastructure.Interfaces.Setting;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.Setting
{
    public class Setting : ISetting
    {
        private readonly ApplicationDbContext _context;
        private readonly IPasswordHasher _password;

        public Setting(ApplicationDbContext context, IPasswordHasher password)
        {
            _context = context;
            _password = password;
        }
        async Task<bool> ISetting.EnableExitSurveyForSelctedIntake(long Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_Enabled_Exit_Survey_Form_For_Students @AdmissionOpenProgramID",
                        AdmissionOpenProgramID);

                    return true;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<dynamic> ISetting.getUserForUpdates(GetUserRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var userName = new SqlParameter("@userName", Request.userName);
                    List<GetUserResponse> getUsers = await _context.Set<GetUserResponse>().FromSqlInterpolated($"EXEC GET_USER_FOR_PASSWORD_UPDATES {userName}").ToListAsync();
                    List<Roles> roles = await _context.Set<Roles>().FromSqlInterpolated($"EXEC GET_ROLES").ToListAsync();
                    var respone = new
                    {
                        users = getUsers,
                        roles = roles
                    };
                    return respone;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> ISetting.updatePassword(UpdatePasswordRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request.FacultyMemberID);
                    var Password = new SqlParameter("@Password", _password.GenerateIdentityV3Hash(Request.Password));
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Password_Faculty @FacultyMemberID,@Password", FacultyMemberID, Password);
                    if (response > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ISetting.updateRole(UpdateRoleRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {

                    var FacultyMemberID = new SqlParameter("@FacultyMemberID", Request.facultyId);
                    var role = new SqlParameter("@role", Request.role);
                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Update_Faculty_Role @FacultyMemberID,@role", FacultyMemberID, role);
                    if (response > 0)
                    {
                        return true;
                    }
                    else
                    {
                        return false;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<bool> ISetting.AddNewPeos(List<SaveAddedPeoRequest> Request)
        {
            try
            {
                if (Request == null) return false;

                var admissionOpenProgram = await _context.AdmissionOpenPrograms.FirstOrDefaultAsync(x => x.AdmissionOpenProgramID == Request[0].admissionOpenProgramIdFrom).ConfigureAwait(false);
                if (admissionOpenProgram == null) return false;

                var peosInformation = await _context.PEOsMain.FirstOrDefaultAsync(x => x.peoMainId == admissionOpenProgram.PEO_Scheme_ID).ConfigureAwait(false);


                if (peosInformation == null)
                {
                    var programId = new SqlParameter("@programId", Request[0].programId);
                    var admissionOpenProgramIdFrom = new SqlParameter("@admissionOpenProgramIdFrom", Request[0].admissionOpenProgramIdFrom);
                    var admissionOpenProgramIdTo = new SqlParameter("@admissionOpenProgramIdTo", Request[0].admissionOpenProgramIdTo);
                    var respone = await _context.Set<GetIntakeResponse>().FromSqlInterpolated($"EXEC SP_GET_PROGRAM_INTAKE_IN_RANGE {programId}, {admissionOpenProgramIdFrom}, {admissionOpenProgramIdTo}").ToListAsync();

                    using (var transaction = await _context.Database.BeginTransactionAsync())
                    {
                        foreach (var item in respone)
                        {
                            try
                            {
                                PEOsMain pEOsMain = new PEOsMain();
                                pEOsMain.AdmissionOpenProgramId = item.AdmissionOpenProgramID;
                                pEOsMain.programId = Request[0].programId;
                                pEOsMain.description = "PEO Added for Campus: " + item.InstituteShortName + " Department: " + item.DepartmentShortName
                                    + " Program: " + item.ProgramShortName + " and Intake: " + item.intakeStart;
                                pEOsMain.Is_Deleted = false;
                                pEOsMain.Created_By = Request[0].Created_By;
                                pEOsMain.Created_Date = DateTime.UtcNow;
                                await _context.PEOsMain.AddAsync(pEOsMain);
                                await _context.SaveChangesAsync();

                                admissionOpenProgram = await _context.AdmissionOpenPrograms.SingleOrDefaultAsync(x => x.AdmissionOpenProgramID == item.AdmissionOpenProgramID).ConfigureAwait(false);
                                if (admissionOpenProgram != null)
                                {
                                    admissionOpenProgram.PEO_Scheme_ID = pEOsMain.peoMainId;
                                }


                                List<PEOsDetails> pEOsDetails = new List<PEOsDetails>();
                                foreach (var peo in Request)
                                {
                                    pEOsDetails.Add(new PEOsDetails
                                    {
                                        peoMainId = pEOsMain.peoMainId,
                                        peoTitle = peo.peoTitle,
                                        peoDescription = peo.description,
                                        Is_Deleted = false,
                                        Created_By = peo.Created_By,
                                        Created_Date = DateTime.UtcNow
                                    });
                                }
                                await _context.PEOsDetails.AddRangeAsync(pEOsDetails);
                                await _context.SaveChangesAsync();
                                await transaction.CommitAsync();
                            }
                            catch (Exception)
                            {
                                await transaction.RollbackAsync();
                                throw;
                            }
                        }


                    }
                }

                else
                {
                    foreach (var peo in Request)
                    {
                        var create = new PEOsDetails();
                        create.peoMainId = (long)admissionOpenProgram.PEO_Scheme_ID;
                        create.peoTitle = peo.peoTitle;
                        create.peoDescription = peo.description;
                        create.Is_Deleted = false;
                        create.Created_By = peo.Created_By;
                        create.Created_Date = DateTime.UtcNow;
                        await _context.PEOsDetails.AddAsync(create);
                        await _context.SaveChangesAsync();

                    }

                }


                return true;
            }
            catch (Exception)
            {
                throw;
            }

        }
        async Task<bool> ISetting.SaveAddedPEOS(List<SaveAddedPeoRequest> Request)
        {
            try
            {
                var programId = new SqlParameter("@programId", Request[0].programId);
                var admissionOpenProgramIdFrom = new SqlParameter("@admissionOpenProgramIdFrom", Request[0].admissionOpenProgramIdFrom);
                var admissionOpenProgramIdTo = new SqlParameter("@admissionOpenProgramIdTo", Request[0].admissionOpenProgramIdTo);
                var respone = await _context.Set<GetIntakeResponse>().FromSqlInterpolated($"EXEC SP_GET_PROGRAM_INTAKE_IN_RANGE {programId}, {admissionOpenProgramIdFrom}, {admissionOpenProgramIdTo}").ToListAsync();

                foreach (var item in respone)
                {
                    using (var transaction = await _context.Database.BeginTransactionAsync())
                    {
                        try
                        {
                            PEOsMain pEOsMain = new PEOsMain();
                            pEOsMain.AdmissionOpenProgramId = item.AdmissionOpenProgramID;
                            pEOsMain.programId = Request[0].programId;
                            pEOsMain.description = "PEO Added for Campus: " + item.InstituteShortName + " Department: " + item.DepartmentShortName
                                + " Program: " + item.ProgramShortName + " and Intake: " + item.intakeStart;
                            pEOsMain.Is_Deleted = false;
                            pEOsMain.Created_By = Request[0].Created_By;
                            pEOsMain.Created_Date = DateTime.UtcNow;
                            await _context.PEOsMain.AddAsync(pEOsMain);
                            await _context.SaveChangesAsync();

                            var admissionOpenProgram = await _context.AdmissionOpenPrograms.SingleOrDefaultAsync(x => x.AdmissionOpenProgramID == item.AdmissionOpenProgramID).ConfigureAwait(false);
                            if (admissionOpenProgram != null)
                            {
                                admissionOpenProgram.PEO_Scheme_ID = pEOsMain.peoMainId;
                            }


                            List<PEOsDetails> pEOsDetails = new List<PEOsDetails>();
                            foreach (var peo in Request)
                            {
                                pEOsDetails.Add(new PEOsDetails
                                {
                                    peoMainId = pEOsMain.peoMainId,
                                    peoTitle = peo.peoTitle,
                                    peoDescription = peo.description,
                                    Is_Deleted = false,
                                    Created_By = peo.Created_By,
                                    Created_Date = DateTime.UtcNow
                                });
                            }
                            await _context.PEOsDetails.AddRangeAsync(pEOsDetails);
                            await _context.SaveChangesAsync();
                            await transaction.CommitAsync();

                        }
                        catch (Exception)
                        {
                            await transaction.RollbackAsync();
                            throw;
                        }

                    }
                }
                return true;
            }
            catch (Exception)
            {
                throw;
            }
            
        }

        async Task<List<PeosInformationResponse>> ISetting.getPeosInformation(GetPeosInformationRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var admissionOpenProgramId = new SqlParameter("@admissionOpenProgramId", Request.admissionOpenProgramId);
                    List<PeosInformationResponse> respone = await _context.Set<PeosInformationResponse>().FromSqlInterpolated($"EXEC SP_GET_PEOS_DETAILS {admissionOpenProgramId}").ToListAsync();
                    return respone;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<List<PlosInformationResponse>> ISetting.GetPlosInformation(GetPlosInformationRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var admissionOpenProgramId = new SqlParameter("@admissionOpenProgramId", Request.admissionOpenProgramId);
                    List<PlosInformationResponse> respone = await _context.Set<PlosInformationResponse>().FromSqlInterpolated($"EXEC SP_GET_PLOS_DETAILS {admissionOpenProgramId}").ToListAsync();
                    return respone;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> ISetting.DeletePeo(PeoDeleteRequest Request)
        {
            try
            {
                
                var delete = await _context.PEOsDetails.Where(x=>x.peoId == Request.peoId).ToListAsync().ConfigureAwait(false);
                if (delete.Count > 0)
                {
                    PEOsMain pEOsMaindelete = await _context.PEOsMain.Where(x => x.peoMainId == delete[0].peoMainId).SingleOrDefaultAsync().ConfigureAwait(false);
                    pEOsMaindelete.Is_Deleted = true;
                    pEOsMaindelete.Modified_By = Request.Modified_By;
                    pEOsMaindelete.Modified_Date = DateTime.UtcNow;
                    foreach (var peo in delete) {
                        peo.Is_Deleted = true;
                        peo.Modified_By = Request.Modified_By;
                        peo.Modified_Date = DateTime.UtcNow;
                    }
                    
                    await _context.SaveChangesAsync();
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> ISetting.DeletePlo(PloDeleteRequest Request)
        {
            try
            {
                var check =  await _context.MappedPLO.Where(x=>x.MappedPloId == Request.ploId).Take(1).ToListAsync().ConfigureAwait(false);
                if(check.Count == 0)
                {
                    var delete = await _context.PLOS_Main_Details.SingleOrDefaultAsync(x => x.PLO_ID == Request.ploId).ConfigureAwait(false);
                    if (delete != null)
                    {
                        var defaultCheck = await _context.PLOs_Information.SingleOrDefaultAsync(x => x.PLO_Title_Id == delete.PLO_Title_Id).ConfigureAwait(false);
                        if (!defaultCheck.is_Default)
                        {
                            delete.Is_Deleted = true;
                            delete.Modified_By = Request.Modified_By;
                            delete.Modified_Date = DateTime.UtcNow;
                            await _context.SaveChangesAsync();
                            return true;
                        }
                    }
                }
                    
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<bool> ISetting.SaveAddedPLOS(List<SaveAddedPloRequest> Request)
        {
            try
            {
                var programId = new SqlParameter("@programId", Request[0].programId);
                var admissionOpenProgramIdFrom = new SqlParameter("@admissionOpenProgramIdFrom", Request[0].admissionOpenProgramIdFrom);
                var admissionOpenProgramIdTo = new SqlParameter("@admissionOpenProgramIdTo", Request[0].admissionOpenProgramIdTo);
                var respone = await _context.Set<GetIntakeResponse>().FromSqlInterpolated($"EXEC SP_GET_PROGRAM_INTAKE_IN_RANGE {programId}, {admissionOpenProgramIdFrom}, {admissionOpenProgramIdTo}").ToListAsync();

                foreach (var item in respone)
                {
                    using (var transaction = await _context.Database.BeginTransactionAsync())
                    {
                        try
                        {
                            PLOs_Information pLOs_Information   = new PLOs_Information();
                            pLOs_Information.Note = "PLO Added for Campus: " + item.InstituteShortName + " Department: " + item.DepartmentShortName
                                + " Program: " + item.ProgramShortName + " and Intake: " + item.intakeStart;
                            pLOs_Information.Is_Deleted = false;
                            pLOs_Information.Created_By = Request[0].Created_By;
                            pLOs_Information.Created_Date = DateTime.UtcNow;
                            await _context.PLOs_Information.AddAsync(pLOs_Information);
                            await _context.SaveChangesAsync();

                            var admissionOpenProgram = await _context.AdmissionOpenPrograms.SingleOrDefaultAsync(x => x.AdmissionOpenProgramID == item.AdmissionOpenProgramID).ConfigureAwait(false);
                            if (admissionOpenProgram != null)
                            {
                                admissionOpenProgram.PLO_Scheme_ID = pLOs_Information.PLO_Title_Id;
                            }
                            foreach (var plo in Request)
                            {
                                var create = new PLOS_Main_Details();
                                create.PLO_Title_Id = pLOs_Information.PLO_Title_Id;
                                create.Old_PLO_ID = plo.PLO_ID;
                                create.PLO_Title = plo.PLOTitle;
                                create.Description = plo.description;
                                create.Is_Deleted = false;
                                create.Created_By = plo.Created_By;
                                create.Created_Date = DateTime.UtcNow;
                                await _context.PLOS_Main_Details.AddAsync(create);
                                await _context.SaveChangesAsync();
                                //var admissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", admissionOpenProgram.AdmissionOpenProgramID);
                                //var newPLoID = new SqlParameter("@newPLoID", create.PLO_ID);
                                //var previousPloId = new SqlParameter("@previousPloId", create.Old_PLO_ID);
                                //var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_UPDATE_EXISTING_PLO_MAPPING @AdmissionOpenProgramID,@newPLoID,@previousPloId", admissionOpenProgramID, newPLoID, previousPloId);
                            }
                            await transaction.CommitAsync();
                        }
                        catch (Exception)
                        {
                            await transaction.RollbackAsync();
                            throw;
                        }

                    }
                }
                return true;
            }
            catch (Exception)
            {
                throw;
            }

        }

        async Task<bool> ISetting.AddNewPlos(List<SaveAddedPloRequest> Request)
        {
            try
            {
                if (Request == null) return false;
                
                var admissionOpenProgram =  await _context.AdmissionOpenPrograms.FirstOrDefaultAsync(x=>x.AdmissionOpenProgramID == Request[0].admissionOpenProgramIdFrom).ConfigureAwait(false);
                if (admissionOpenProgram == null) return false;

                var plosInformation = await _context.PLOs_Information.FirstOrDefaultAsync(x => x.PLO_Title_Id == admissionOpenProgram.PLO_Scheme_ID).ConfigureAwait(false);
                

                if (plosInformation == null)
                {
                    var programId = new SqlParameter("@programId", Request[0].programId);
                    var admissionOpenProgramIdFrom = new SqlParameter("@admissionOpenProgramIdFrom", Request[0].admissionOpenProgramIdFrom);
                    var admissionOpenProgramIdTo = new SqlParameter("@admissionOpenProgramIdTo", Request[0].admissionOpenProgramIdTo);
                    var respone = await _context.Set<GetIntakeResponse>().FromSqlInterpolated($"EXEC SP_GET_PROGRAM_INTAKE_IN_RANGE {programId}, {admissionOpenProgramIdFrom}, {admissionOpenProgramIdTo}").ToListAsync();

                    using (var transaction = await _context.Database.BeginTransactionAsync())
                    {
                        foreach (var item in respone)
                        {
                            try
                            {
                                PLOs_Information pLOs_Information = new PLOs_Information();
                                pLOs_Information.Note = "PLO Added for Campus: " + item.InstituteShortName + " Department: " + item.DepartmentShortName
                                    + " Program: " + item.ProgramShortName + " and Intake: " + item.intakeStart;
                                pLOs_Information.Is_Deleted = false;
                                pLOs_Information.Created_By = Request[0].Created_By;
                                pLOs_Information.Created_Date = DateTime.UtcNow;
                                await _context.PLOs_Information.AddAsync(pLOs_Information);
                                await _context.SaveChangesAsync();

                                admissionOpenProgram = await _context.AdmissionOpenPrograms.SingleOrDefaultAsync(x => x.AdmissionOpenProgramID == item.AdmissionOpenProgramID).ConfigureAwait(false);
                                if (admissionOpenProgram != null)
                                {
                                    admissionOpenProgram.PLO_Scheme_ID = pLOs_Information.PLO_Title_Id;
                                }
                                foreach (var plo in Request)
                                {
                                    var create = new PLOS_Main_Details();
                                    create.PLO_Title_Id = pLOs_Information.PLO_Title_Id;
                                    create.Old_PLO_ID = plo.PLO_ID;
                                    create.PLO_Title = plo.PLOTitle;
                                    create.Description = plo.description;
                                    create.Is_Deleted = false;
                                    create.Created_By = plo.Created_By;
                                    create.Created_Date = DateTime.UtcNow;
                                    await _context.PLOS_Main_Details.AddAsync(create);
                                    await _context.SaveChangesAsync();
                                    var admissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", admissionOpenProgram.AdmissionOpenProgramID);
                                    var newPLoID = new SqlParameter("@newPLoID", create.PLO_ID);
                                    var previousPloId = new SqlParameter("@previousPloId", create.Old_PLO_ID);
                                    var response = await _context.Database.ExecuteSqlRawAsync($"EXEC SP_UPDATE_EXISTING_PLO_MAPPING @AdmissionOpenProgramID,@newPLoID,@previousPloId", admissionOpenProgramID, newPLoID, previousPloId);
                                }
                                await transaction.CommitAsync();
                            }
                            catch (Exception)
                            {
                                await transaction.RollbackAsync();
                                throw;
                            }
                        }
                        

                    }
                } 
                
                else
                {
                    foreach (var plo in Request)
                    {
                        var create = new PLOS_Main_Details();
                        create.PLO_Title_Id = (long)admissionOpenProgram.PLO_Scheme_ID;
                        create.Old_PLO_ID = plo.PLO_ID;
                        create.PLO_Title = plo.PLOTitle;
                        create.Description = plo.description;
                        create.Is_Deleted = false;
                        create.Created_By = plo.Created_By;
                        create.Created_Date = DateTime.UtcNow;
                        await _context.PLOS_Main_Details.AddAsync(create);
                        await _context.SaveChangesAsync();
                        
                    }

                }
                
                
                return true;
            }
            catch (Exception)
            {
                throw;
            }

        }

    }
}
