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
declare const $: any;

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() educations: any[] = [];
  @Output() viewFile = new EventEmitter<{ fileUrl: String }>();
  educationForm: FormGroup;
  tempData: any[]=[];

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
    this.educationForm = this.formBuilder.group({
      FacultyMemberID: GlobalService.FacultyMember_ID,
      eduInstitute: ['', Validators.required],
      degree: ['', Validators.required],
      field: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      imageFile: [null],
    });


  }

  ngOnInit(): void {
   // this.getEduction();
  }

  getEduction() {
    const facultyMemberID = GlobalService.FacultyMember_ID;

    this.ProfileService.GetEducation(facultyMemberID).subscribe({
      next: (data) => {
        this.educations = data;
      

      },
      error: (err) => {
        console.error('Error fetching education data:', err);
      },
    });
  }
  addEducation() {
  
      
      /*  const educationData = this.educationForm.value;*/
      const educationData = this.tempData;
     
      
      this.ngxService.start();
      this.ProfileService.AddFacultyEducation(educationData).
        subscribe(
          data => {
            this.ngxService.stop();

            this.toastr.success("Education successfully", "Success");
            this.educationForm.reset();
            this.educationForm.controls['FacultyMemberID'].setValue(GlobalService.FacultyMember_ID);
            this.tempData = [];



            $("#addEducationModal").modal("hide");

            this.getEduction();
          },
          error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
          });


   
  }


  add() {
    
    const payload = {
      FacultyMemberID: this.educationForm.value.FacultyMemberID,
      eduInstitute: this.educationForm.value.eduInstitute,
      degree: this.educationForm.value.degree,
      field: this.educationForm.value.field,
      year: this.educationForm.value.year,
      imageFile: this.selectedFileData, // Include file data
    };
    this.tempData.push(payload);
   
    this.educationForm.reset();
    this.educationForm.controls['imageFile'].setValue('');
    this.educationForm.controls['FacultyMemberID'].setValue( GlobalService.FacultyMember_ID);
  }

  deleteEntry(index: number) {
    this.tempData.splice(index, 1);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const file = input.files[0]; // Use optional chaining to check for files


    // Validate file type
    const validTypes = ['image/jpeg', 'image/png',  'application/pdf'];

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

  openFileViewer(filePath: string): void {

    this.viewFile.emit({ fileUrl: filePath });


   
  }

  extractFileName(filePath: string): string {
    const parts = filePath.split('/');
    return parts[parts.length - 1];
  }



  isImage(fileType: string): boolean {
    return fileType === 'image';
  }

 
  isPDF(fileType: string): boolean {
    return fileType === 'pdf';
  }



  CloseModal() {

    this.tempData = [];
    this.educationForm.reset();
    $("#addEducationModal").modal("hide");
  }






 



  confirmDelete(eduID: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Education Data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {




      if (result.value) {
        this.ProfileService.DeleteEducation(eduID).subscribe(
          () => {
            Swal.fire('Deleted!', 'Your Education Data has been deleted.', 'success');
            this.getEduction();
          },
          error => {
            Swal.fire('Error!', 'Failed to delete Education Data.', 'error');
          }
        );
      }
    });


  
  }



}
