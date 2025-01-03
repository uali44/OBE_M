// cv-component.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GlobalService } from '../../../Shared/Services/Global/global.service';

@Component({
  selector: 'app-cv-component',
  templateUrl: './cv-component.component.html',
  styleUrls: ['./cv-component.component.css']
})
export class CvComponentComponent implements OnInit {
  cvForm: FormGroup;
  name: string;
  constructor(private fb: FormBuilder

  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.name = GlobalService.Name;
  }

  private initForm(): void {
    this.cvForm = this.fb.group({
     // fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
     
      Role: [''],
      FacultyType: [''],
      education: this.fb.array([]),
      experience: this.fb.array([]),
      roles: this.fb.array([]),
      research: this.fb.array([]),
      ongoingResearch: this.fb.array([]),
      Researchgroup: this.fb.array([]),
      consultancies: this.fb.array([]),
      training: this.fb.array([]),
      project: this.fb.array([]),
      GuesstSpeaker: this.fb.array([])

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
 

  get ongoingResearchArray() {
    return this.cvForm.get('ongoingResearch') as FormArray;
  }

  get researchGroupArray() {
    return this.cvForm.get('Researchgroup') as FormArray;
  }

  get consultanciesArray() {
    return this.cvForm.get('consultancies') as FormArray;
  }

  get trainingArray() {
    return this.cvForm.get('training') as FormArray;
  }

  get experienceArray() {
    return this.cvForm.get('experience') as FormArray;
  }

  get rolesArray() {
    return this.cvForm.get('roles') as FormArray;
  }

  get researchArray() {
    return this.cvForm.get('research') as FormArray;
  }
  get projectArray() {
    return this.cvForm.get('project') as FormArray;
  }

  get GuestSpeakerArray() {
    return this.cvForm.get('GuesstSpeaker') as FormArray;
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
      startDate: ['', Validators.required],
      endDate: [''], // Optional since it could be disabled
      currentlyWorking: [false], // Checkbox for "Currently Working Here"
      description: ['', Validators.required]
    });

    experience.get('currentlyWorking')?.valueChanges.subscribe((checked: boolean) => {
      const endDateControl = experience.get('endDate');
      if (checked) {
        endDateControl?.disable();
        endDateControl?.reset(); // Optional: Clears the value
      } else {
        endDateControl?.enable();
      }
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

  addResearch(): void {
    const researchs = this.fb.group({
      title: ['', Validators.required],
      field: ['', Validators.required],
      status: ['', Validators.required]
    });

    this.researchArray.push(researchs);
  }

  removeResearch(index: number): void {
    this.researchArray.removeAt(index);
  }
  addOngoingResearch(): void {
    const ongoingResearch = this.fb.group({
      title: ['', Validators.required],
      field: ['', Validators.required],
      startDate: ['', Validators.required]
    });

    this.ongoingResearchArray.push(ongoingResearch);
  }

  removeOngoingResearch(index: number): void {
    this.ongoingResearchArray.removeAt(index);
  }

  addResearchGroup(): void {
    const researchGroup = this.fb.group({
      groupName: ['', Validators.required],
      role: ['', Validators.required]
    });

    this.researchGroupArray.push(researchGroup);
  }

  removeResearchGroup(index: number): void {
    this.researchGroupArray.removeAt(index);
  }

  addConsultancy(): void {
    const consultancy = this.fb.group({
      client: ['', Validators.required],
      project: ['', Validators.required],
      duration: ['', Validators.required],
       startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });

    this.consultanciesArray.push(consultancy);
  }

  removeConsultancy(index: number): void {
    this.consultanciesArray.removeAt(index);
  }

  addTraining(): void {
    const training = this.fb.group({
      trainingName: ['', Validators.required],
      provider: ['', Validators.required],
      
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });

    this.trainingArray.push(training);
  }

  removeTraining(index: number): void {
    this.trainingArray.removeAt(index);
  }

  addProject(): void {
    const project = this.fb.group({
      projectName: ['', Validators.required],
      client: ['', Validators.required],
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]

    });

    this.projectArray.push(project);
  }

  removeProject(index: number): void {
    this.projectArray.removeAt(index);
  }

  addGuestSpeaker(): void {
    const guestSpeaker = this.fb.group({
      event: ['', Validators.required],
      topic: ['', Validators.required],
      date: ['', Validators.required]
    });

    this.GuestSpeakerArray.push(guestSpeaker);
  }

  removeGuestSpeaker(index: number): void {
    this.GuestSpeakerArray.removeAt(index);
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
