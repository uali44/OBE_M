import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { CoursesSearchService } from '../../../Services/CourseSearch/CourseSearch.service';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ReportsService } from '../../../Services/Reports/reports.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { ProfileService } from './../../../Services/Profile/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forEach } from 'underscore';
declare const $: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
   @Input() exper: any[]=[];
  @Output() viewFile = new EventEmitter<{ fileUrl: String}>();
  tempData: any[] = [];
  experienceForm: FormGroup;
  experienceData: any[] = this.exper;
  currentlyWorking: boolean = false;

  selectedFile: File | null = null;
  fileError: string = '';
  compressedImage: string | null = null;
  selectedFileData: { fileName: string; fileType: string; fileContent: string } | null = null;
  selectedFilePath: SafeResourceUrl | null = null;
  selectedFileType: string;


  constructor(
    private _CoursesSearchService: CoursesSearchService,
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _ReportsService: ReportsService,
    private formBuilder: FormBuilder,
    private ProfileService: ProfileService,
    private pagerService: PagerService,
    private msgForDashboard: InterconnectedService,
    private sanitizer: DomSanitizer,
  ) {
    this.experienceForm = this.formBuilder.group({
      FacultyMemberID: GlobalService.FacultyMember_ID,
      Position: ['', Validators.required],
      Company: ['', Validators.required],
      StartDate: ['', Validators.required],
      EndDate: [''],
     imageFile: null,
    });

  }

  ngOnInit(): void {
    // this.getExperience();
    this.experienceData = this.exper;
   
  }

  getExperience() {
    const facultyMemberID = GlobalService.FacultyMember_ID;
   
    this.ProfileService.GetExperience(facultyMemberID).subscribe({
      next: (data) => {
        this.exper = data;
       
        
      },
      error: (err) => {
        this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
      },
    });
  }



  addExperience() {

    const experienceData = this.tempData;
    
   
      this.ngxService.start();
      this.ProfileService.AddFacultyExperience(experienceData).
        subscribe(
          data => {
            this.ngxService.stop();

            this.toastr.success("Experience added successfully", "Success");

            this.experienceForm.reset();
            this.experienceForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
            this.tempData = [];


            $("#addExperienceModal").modal("hide");
            this.getExperience();


          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          });


     
  }
  onCurrentlyWorkingChange(event: any) {
    this.currentlyWorking = event.target.checked;
    if (this.currentlyWorking) {
      this.experienceForm.get('EndDate')?.setValue(null); // Clear EndDate
      this.experienceForm.get('EndDate')?.disable(); // Disable EndDate input
    } else {
      this.experienceForm.get('EndDate')?.enable(); // Enable EndDate input
    }
  }

  add() {
    
    const payload = {
    
      FacultyMemberID: GlobalService.FacultyMember_ID,
      Position: this.experienceForm.value.Position,
      Company: this.experienceForm.value.Company,
      StartDate: this.experienceForm.value.StartDate,
      EndDate: this.experienceForm.value.EndDate,
      ImageFile: this.selectedFileData,
      CreatedBy: GlobalService.FacultyMember_ID,
    }
    this.tempData.push(payload);
   
    this.experienceForm.reset();
    this.experienceForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
  }

  deleteEntry(index: number) {
    this.tempData.splice(index, 1);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const file = input.files[0]; // Use optional chaining to check for files


    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (!validTypes.includes(file.type)) {
      this.fileError = 'Invalid file type. Please upload a JPEG, PNG, or PDF.';
      return;
    }

    // Validate file size
    const maxSize =  1024 * 1024; // 1 MB
    if (file.size > maxSize) {
      this.fileError = 'File size exceeds the 1 MB limit.';
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        // Clean Base64 string
        const base64String = (reader.result as string).split(',')[1]; // Remove prefix (e.g., "data:image/jpeg;base64,")
        this.selectedFileData = {
          fileName: file.name,
          fileType: file.type,
          fileContent: base64String, // Clean Base64 string without prefix
        };
      };

      reader.readAsDataURL(file);
    }

    this.selectedFile = file;
    this.fileError = null;
   

  }
  onDateChange(event: any, controlName: string) {
    const date = new Date(event);
    const formattedDate = date.toISOString().split('T')[0]; // Gets 'YYYY-MM-DD'
    this.experienceForm.patchValue({ [controlName]: formattedDate });
  }
  openFileViewer(filePath: string): void {
    
    this.viewFile.emit({ fileUrl: filePath });
   
  

   
  }

  extractFileName(filePath: string): string {
    const parts = filePath.split('/');
    return parts[parts.length - 1]; // Get the last part, which is the file name
  }


  // Helper method to check if the file is an image
  isImage(fileType: string): boolean {
    return fileType === 'image';
  }

  // Helper method to check if the file is a PDF
  isPDF(fileType: string): boolean {
    return fileType === 'pdf';
  }


  CloseModal() {

    this.tempData = [];
    this.experienceForm.reset();
    $("#addEducationModal").modal("hide");
  }




  confirmDelete(expID: number) {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Experience Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {

      const payload = {
        ID: expID,
        ModifiedBy: GlobalService.FacultyMember_ID,
      }


      if (result.value) {
        this.ProfileService.DeleteExperience(payload).subscribe(
          () => {
            Swal.fire('Deleted!', 'Your Experience Data has been deleted.', 'success');
            this.getExperience(); 
          },
          error => {
            Swal.fire('Error!', 'Failed to delete Experience Data.', 'error');
          }
        );
      }
    });
   
  }





}
