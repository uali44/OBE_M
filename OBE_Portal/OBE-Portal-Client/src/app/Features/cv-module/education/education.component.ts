import { Component, Input, OnInit } from '@angular/core';
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
        console.log( data)
        console.log("Education data" , this.educations);

      },
      error: (err) => {
        console.error('Error fetching education data:', err);
      },
    });
  }
  addEducation() {
  
      
      /*  const educationData = this.educationForm.value;*/
      const educationData = this.tempData;
      console.log('Education Data:', educationData);
      
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
    //if (this.educationForm.invalid) {
    //  return;
    //}
  //  this.educationForm.controls['imageFile'].setValue(this.selectedFile);
    const payload = {
      FacultyMemberID: this.educationForm.value.FacultyMemberID,
      eduInstitute: this.educationForm.value.eduInstitute,
      degree: this.educationForm.value.degree,
      field: this.educationForm.value.field,
      year: this.educationForm.value.year,
      imageFile: this.selectedFileData, // Include file data
    };
    this.tempData.push(payload);
    console.log(this.tempData);
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
    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (file.size > maxSize) {
      this.fileError = 'File size exceeds the 2 MB limit.';
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
    //// Compress the image
    //this.compressImage(file, (compressedFile) => {
    //  this.fileError = '';
    //  this.educationForm.patchValue({ imageFile: compressedFile });
    //});
    
  }

  openFileViewer(filePath: string): void {
    // Set the file path to display in the modal
    this.selectedFilePath = this.sanitizer.bypassSecurityTrustResourceUrl(filePath);

    // Check the file type based on the extension or MIME type
    if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg') || filePath.endsWith('.png')) {
      this.selectedFileType = 'image';
    } else if (filePath.endsWith('.pdf')) {
      this.selectedFileType = 'pdf';
    } else {
      this.selectedFileType = 'other';  // Handle other file types as needed
    }

   
    $("#fileViewerModal").modal("show");
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










  //compressImage(file: File, callback: (compressedFile: File) => void) {
  //  const reader = new FileReader();
  //  reader.readAsDataURL(file);

  //  reader.onload = (event: any) => {
  //    const img = new Image();
  //    img.src = event.target.result;

  //    img.onload = () => {
  //      const canvas = document.createElement('canvas');
  //      const ctx = canvas.getContext('2d');

  //      const maxWidth = 800; // Set max width for compression
  //      const maxHeight = 800; // Set max height for compression

  //      let width = img.width;
  //      let height = img.height;

  //      if (width > height) {
  //        if (width > maxWidth) {
  //          height = (height * maxWidth) / width;
  //          width = maxWidth;
  //        }
  //      } else {
  //        if (height > maxHeight) {
  //          width = (width * maxHeight) / height;
  //          height = maxHeight;
  //        }
  //      }

  //      canvas.width = width;
  //      canvas.height = height;

  //      ctx?.drawImage(img, 0, 0, width, height);

  //      canvas.toBlob(
  //        (blob) => {
  //          const compressedFile = new File([blob!], file.name, {
  //            type: file.type,
  //          });
  //          callback(compressedFile);
  //        },
  //        file.type,
  //        0.7 // Set quality level for compression
  //      );
  //    };
  //  };
  //}



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


  //  if (confirm('Are you sure you want to delete this Education Data?')) {
  //    this.ProfileService.DeleteEducation(eduID).subscribe({
  //      next: (response) => {
  //        console.log('Delete Response:', response);
  //        this.toastr.success("Education deleted successfully.", "Success");

  //        this.getEduction();
  //      },
  //      error: (err) => {
  //        console.error('Error deleting experience:', err);
  //        this.toastr.error("Failed to delete education.", "Failed");

  //      },
  //    });
  //  }
  }



}
