import { __decorate } from "tslib";
// cv-component.component.ts
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
let CvComponentComponent = class CvComponentComponent {
    constructor(fb) {
        this.fb = fb;
        this.initForm();
    }
    ngOnInit() {
        this.name = GlobalService.Name;
    }
    initForm() {
        this.cvForm = this.fb.group({
            // fullName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phoneNumber: [''],
            summary: [''],
            Role: [''],
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
    isFieldInvalid(fieldName) {
        const field = this.cvForm.get(fieldName);
        return field ? (field.invalid && field.touched) : false;
    }
    // Getters for form arrays
    get educationArray() {
        return this.cvForm.get('education');
    }
    get ongoingResearchArray() {
        return this.cvForm.get('ongoingResearch');
    }
    get researchGroupArray() {
        return this.cvForm.get('Researchgroup');
    }
    get consultanciesArray() {
        return this.cvForm.get('consultancies');
    }
    get trainingArray() {
        return this.cvForm.get('training');
    }
    get experienceArray() {
        return this.cvForm.get('experience');
    }
    get rolesArray() {
        return this.cvForm.get('roles');
    }
    get researchArray() {
        return this.cvForm.get('research');
    }
    get projectArray() {
        return this.cvForm.get('project');
    }
    get GuestSpeakerArray() {
        return this.cvForm.get('GuesstSpeaker');
    }
    // Education methods
    addEducation() {
        const education = this.fb.group({
            institution: ['', Validators.required],
            degree: ['', Validators.required],
            year: ['', Validators.required]
        });
        this.educationArray.push(education);
    }
    removeEducation(index) {
        this.educationArray.removeAt(index);
    }
    // Experience methods
    addExperience() {
        var _a;
        const experience = this.fb.group({
            company: ['', Validators.required],
            position: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: [''],
            currentlyWorking: [false],
            description: ['', Validators.required]
        });
        (_a = experience.get('currentlyWorking')) === null || _a === void 0 ? void 0 : _a.valueChanges.subscribe((checked) => {
            const endDateControl = experience.get('endDate');
            if (checked) {
                endDateControl === null || endDateControl === void 0 ? void 0 : endDateControl.disable();
                endDateControl === null || endDateControl === void 0 ? void 0 : endDateControl.reset(); // Optional: Clears the value
            }
            else {
                endDateControl === null || endDateControl === void 0 ? void 0 : endDateControl.enable();
            }
        });
        this.experienceArray.push(experience);
    }
    removeExperience(index) {
        this.experienceArray.removeAt(index);
    }
    // roles methods
    addRole() {
        const role = this.fb.group({
            level: ['1']
        });
        this.rolesArray.push(role);
    }
    removeRole(index) {
        this.rolesArray.removeAt(index);
    }
    addResearch() {
        const researchs = this.fb.group({
            title: ['', Validators.required],
            field: ['', Validators.required],
            status: ['', Validators.required]
        });
        this.researchArray.push(researchs);
    }
    removeResearch(index) {
        this.researchArray.removeAt(index);
    }
    addOngoingResearch() {
        const ongoingResearch = this.fb.group({
            title: ['', Validators.required],
            field: ['', Validators.required],
            startDate: ['', Validators.required]
        });
        this.ongoingResearchArray.push(ongoingResearch);
    }
    removeOngoingResearch(index) {
        this.ongoingResearchArray.removeAt(index);
    }
    addResearchGroup() {
        const researchGroup = this.fb.group({
            groupName: ['', Validators.required],
            role: ['', Validators.required]
        });
        this.researchGroupArray.push(researchGroup);
    }
    removeResearchGroup(index) {
        this.researchGroupArray.removeAt(index);
    }
    addConsultancy() {
        const consultancy = this.fb.group({
            client: ['', Validators.required],
            project: ['', Validators.required],
            duration: ['', Validators.required]
        });
        this.consultanciesArray.push(consultancy);
    }
    removeConsultancy(index) {
        this.consultanciesArray.removeAt(index);
    }
    addTraining() {
        const training = this.fb.group({
            trainingName: ['', Validators.required],
            provider: ['', Validators.required],
            date: ['', Validators.required]
        });
        this.trainingArray.push(training);
    }
    removeTraining(index) {
        this.trainingArray.removeAt(index);
    }
    addProject() {
        const project = this.fb.group({
            projectName: ['', Validators.required],
            client: ['', Validators.required],
            duration: ['', Validators.required]
        });
        this.projectArray.push(project);
    }
    removeProject(index) {
        this.projectArray.removeAt(index);
    }
    addGuestSpeaker() {
        const guestSpeaker = this.fb.group({
            event: ['', Validators.required],
            topic: ['', Validators.required],
            date: ['', Validators.required]
        });
        this.GuestSpeakerArray.push(guestSpeaker);
    }
    removeGuestSpeaker(index) {
        this.GuestSpeakerArray.removeAt(index);
    }
    onSubmit() {
        if (this.cvForm.valid) {
            console.log(this.cvForm.value);
            alert('CV data saved successfully!');
        }
        else {
            alert('Please fill in all required fields');
        }
    }
    resetForm() {
        this.cvForm.reset();
        this.educationArray.clear();
        this.experienceArray.clear();
        this.rolesArray.clear();
    }
};
CvComponentComponent = __decorate([
    Component({
        selector: 'app-cv-component',
        templateUrl: './cv-component.component.html',
        styleUrls: ['./cv-component.component.css']
    })
], CvComponentComponent);
export { CvComponentComponent };
//# sourceMappingURL=cv-component.component.js.map