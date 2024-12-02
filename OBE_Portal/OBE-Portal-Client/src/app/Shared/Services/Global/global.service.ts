import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class GlobalService {
  public static ApiUrl: string = '';
  public static AppBaseURL: string = ''; 
  public static FacultyMember_ID: number;
  public static Token: string;
  public static Semester_ID: number;
  public static Offered_Course_ID: number;
  public static Is_Course: boolean;
  public static Is_Completed: boolean;
  public static Report_Sub_Tab: boolean = false;
  public static Permissions: any[] = [];
  public static TempFacultyMember_ID: number;
  public static Deaprtment_ID: number;
  public static Institute_ID: number;
  public static CourseCategory: number;
  public static IsStudent: number;
  public static Name: string;
  public static StudentID: number;
}
