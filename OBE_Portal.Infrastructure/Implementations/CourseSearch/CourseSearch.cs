﻿using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using OBE_Portal.Core.Context;
using OBE_Portal.Core.Entities.CourseSearch;
using OBE_Portal.Infrastructure.Interfaces.CourseSearch;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace OBE_Portal.Infrastructure.Implementations.CourseSearch
{
    public class CourseSearch : ICourseSearch
    {
        private readonly ApplicationDbContext _context;
        public CourseSearch(ApplicationDbContext context)
        {
            _context = context;
        }
        async Task<List<CourseSearchModels>> ICourseSearch.GetInstitute()
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    List<CourseSearchModels> response = await _context.Set<CourseSearchModels>().FromSqlInterpolated($"EXEC SP_GET_INSTITUTES").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetAllSemester>> ICourseSearch.GetAllSemester()
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    List<GetAllSemester> response = await _context.Set<GetAllSemester>().FromSqlInterpolated($"EXEC Sp_Get_All_Semester").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<Deparments>> ICourseSearch.GetDepartment(long InstitueID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Institue_ID = new SqlParameter("@InstituteID", InstitueID);
                    List<Deparments> response = await _context.Set<Deparments>().FromSqlInterpolated($"EXEC Sp_Get_Institute_Department {Institue_ID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<FacultyMembers>> ICourseSearch.GetFacultyMembersForSelectedDepartmentAndSemester(long Department_ID, long Semester_ID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var DepartmentID = new SqlParameter("@DEPARTMENT_ID", Department_ID);
                    var SemesterID = new SqlParameter("@SEMESTER_ID", Semester_ID);
                    List<FacultyMembers> response = await _context.Set<FacultyMembers>().FromSqlInterpolated($"EXEC SP_GET_FACULTYMEMBERS_IN_SELECTED_SEMESTER {DepartmentID},{SemesterID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetIntakeForSelectedDepartment>> ICourseSearch.GetIntakes(long Department_ID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var DepartmentID = new SqlParameter("@DEPARTMENT_ID", Department_ID);
                    List<GetIntakeForSelectedDepartment> response = await _context.Set<GetIntakeForSelectedDepartment>().FromSqlInterpolated($"EXEC sp_Get_Department_Intake {DepartmentID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetIntakeStudentsResponse>> ICourseSearch.GetIntakeStudents(long AdmissionOpenProgramID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgram_ID = new SqlParameter("@AdmissionOpenProgramID", AdmissionOpenProgramID);
                    List<GetIntakeStudentsResponse> response = await _context.Set<GetIntakeStudentsResponse>().FromSqlInterpolated($"EXEC Sp_Get_Intake_Students {AdmissionOpenProgram_ID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }
        async Task<List<GetCourseResponse>> ICourseSearch.GetCQILevelCourses(GetFacultyMembersRequest Request)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var AdmissionOpenProgramID = new SqlParameter("@AdmissionOpenProgramID", Request.IntakeId);
                    List<GetCourseResponse> response = await _context.Set<GetCourseResponse>().FromSqlInterpolated($"EXEC SP_Get_All_CQI_Courses {AdmissionOpenProgramID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<bool> ICourseSearch.DeleteStudentFromCourse(long Request)
        {
            try
            {

                var RegisteredCourseID = new SqlParameter("@RegisteredCourseID", Request);
                var response = await _context.Database.ExecuteSqlRawAsync($"EXEC Sp_Remove_student_from_Course @RegisteredCourseID",
                          RegisteredCourseID);
                if (response != 0)
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
            catch (Exception ex)
            {
                throw;
            }
        }

        async Task<List<FacultyMembersResponse>> ICourseSearch.getFacultyMember(string Request)
        {
            try
            {

                var username = new SqlParameter("@username", Request);
                List<FacultyMembersResponse> response = await _context.Set<FacultyMembersResponse>().FromSqlInterpolated($"EXEC Sp_Get_Faculty_Members {username}").ToListAsync();
                return response;

            }
            catch (Exception ex)
            {
                throw;
            }
        }
        async Task<List<GetIntakeForSelectedProgram>> ICourseSearch.GetDepartmentPrograms(long DepartmentID)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Department_ID = new SqlParameter("@DepartmentID", DepartmentID);
                    List<GetIntakeForSelectedProgram> response = await _context.Set<GetIntakeForSelectedProgram>().FromSqlInterpolated($"EXEC Sp_Get_Program_Intake {Department_ID}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        async Task<List<GetIntakeForSelectedProgramResponse>> ICourseSearch.GetProgramIntakes(long ProgramId)
        {
            try
            {
                using (SqlCommand comm = new SqlCommand())
                {
                    var Program_Id = new SqlParameter("@ProgramId", ProgramId);
                    List<GetIntakeForSelectedProgramResponse> response = await _context.Set<GetIntakeForSelectedProgramResponse>().FromSqlInterpolated($"EXEC Sp_Get_Selected_Program_Intake {Program_Id}").ToListAsync();
                    if (response != null)
                    {
                        return response;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
