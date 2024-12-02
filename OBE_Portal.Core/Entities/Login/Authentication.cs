using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OBE_Portal.Core.Entities.Login
{
    //user model class
    public class User_Credentials_Request
    {
        public string Username_Request { get; set; }
        public string Password_Request { get; set; }
        public string Institute_Request { get; set; }
        public bool IsStudent { get; set; }
        
    }
    public class Reset_Password_Request
    {
        public string Username_Request { get; set; }
        public string Email_Request { get; set; }
        public string Url_Request { get; set; }
        public string Token { get; set; }
        public string New_Password { get; set; }
        public bool IsStudent { get; set; }
    }
    [NotMapped]
    public class AuthenticatedUserResponse
    {
        [Key]
        public string PASSWORD { get; set; }
        public bool IS_ENGINEERING_FACULTY { get; set; }
        public int FACULTYMEMBERID { get; set; }
        public Int16 SEMESTERID { get; set; }
        public string User_Name { get; set; }
        public int DEPARTMENTID { get; set; }
        public int INSTITUTEID { get; set; }
    }
    [NotMapped]
    public class ResetPasswordResponse
    {
        [Key]
        public string PASSWORD { get; set; }
        public bool IS_ENGINEERING_FACULTY { get; set; }
        public int FACULTYMEMBERID { get; set; }
        public string User_Name { get; set; }
        public string Name { get; set; }
    }
    public class ResetPasswordStudentResponse
    {
        public int StudentID { get; set; }
        public string Name { get; set; }
        public string UniversityEmail { get; set; }
    }
    public class UserResponse
    {
        public int FacultyMemberID { get; set; }
        public int StudentID { get; set; }
        public string Token { get; set; }
        public Int16 Semester_ID { get; set; }
        public string User_Name { get; set; }
        public int DEPARTMENTID { get; set; }
        public int INSTITUTEID { get; set; }
        public int ShowExitForm { get; set; }
        public List<string> All_Permission { get; set; }
    }
    public class CheckForValidToken
    {
        public int UserID { get; set; }
        public bool IsStudent { get; set; }
    }
    public class Permissions
    {
        public string Permission_Title { get; set; }
    }

    public class StudentDetails
    {
        public int StudentID { get; set; }
        public string Enrollment { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int ShowExitForm { get; set; }
        
    }


}
