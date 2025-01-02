// cv-component.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  cvForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void { }

  private initForm(): void {
    this.cvForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      summary: [''],
      education: this.fb.array([]),
      experience: this.fb.array([]),
      roles: this.fb.array([])
    });
  }

  // Form field error checking methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.cvForm.get(fieldName);
    return field ? (field.invalid && field.touched) : false;
  }

  // Getters for form arrays
  get educationArray() {
    return this.cvForm.get('education') as FormArray;
  }

  get experienceArray() {
    return this.cvForm.get('experience') as FormArray;
  }

  get rolesArray() {
    return this.cvForm.get('roles') as FormArray;
  }

  // Education methods
  addEducation(): void {
    const education = this.fb.group({
      institution: ['', Validators.required],
      degree: ['', Validators.required],
      year: ['', Validators.required]
    });

    this.educationArray.push(education);
  }

  removeEducation(index: number): void {
    this.educationArray.removeAt(index);
  }

  // Experience methods
  addExperience(): void {
    const experience = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      duration: [''],
      description: ['']
    });

    this.experienceArray.push(experience);
  }

  removeExperience(index: number): void {
    this.experienceArray.removeAt(index);
  }

  // roles methods
  addRole(): void {
    const role = this.fb.group({
      
      level: ['1']
    });

    this.rolesArray.push(role);
  }

  removeRole(index: number): void {
    this.rolesArray.removeAt(index);
  }

  onSubmit(): void {
    if (this.cvForm.valid) {
      console.log(this.cvForm.value);
      alert('CV data saved successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  }

  resetForm(): void {
    this.cvForm.reset();
    this.educationArray.clear();
    this.experienceArray.clear();
    this.rolesArray.clear();
  }
}
