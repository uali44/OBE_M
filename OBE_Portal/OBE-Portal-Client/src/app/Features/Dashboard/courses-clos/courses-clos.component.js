import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import { PagerService } from '../../../Shared/Services/Global/Pager';
let CoursesClosComponent = class CoursesClosComponent {
    constructor(pagerService, CoursesCLOSService, toastr, ngxService, formBuilder, msgForDashboard) {
        this.pagerService = pagerService;
        this.CoursesCLOSService = CoursesCLOSService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.formBuilder = formBuilder;
        this.msgForDashboard = msgForDashboard;
        this.All_PLOS = [];
        this.All_PLOS_Skill = [];
        this.All_PLOS_Skill_level = [];
        this.All_PLOS_Skill_level_temp = [];
        this.All_Added_CLOS = [];
        this.submitted = false;
        this.submitted_Edit = false;
        this.CLO_Added_Count = 0;
        this.Selected_CLO_ID = 0;
        this.query = "";
        this.pager = {};
        this.pagesize = 50;
        this.dataset = [];
        this.Is_Permission_Add_Course_Details = false;
        this.Is_Permission_Edit_Course_Details = false;
        this.Is_Permission_Delete_Course_Details = false;
        this.Is_Show_Action_TD = true;
        this.Is_Have_Special_Permission = false;
        this.Add_Permission = false;
        this.Get_Course_CLOS = [];
    }
    ngOnInit() {
        this.msgForDashboard.GetSelectedCoursesCLOs.subscribe(search => {
            this.Get_Selected_Course_CLOS();
        });
        this.CourseCLOSForm = this.formBuilder.group({
            Description: ['', [Validators.required]],
            Selected_PLOS: ['', [Validators.required]],
            Selected_PLOS_Skill: ['', [Validators.required]],
            Selected_PLOS_Skill_Level: ['', [Validators.required]],
        });
        this.CourseCLOSEditForm = this.formBuilder.group({
            Description_Edit: ['', [Validators.required]],
            Selected_PLOS_Edit: ['', [Validators.required]],
            Selected_PLOS_Skill_Edit: ['', [Validators.required]],
            Selected_PLOS_Skill_Level_Edit: ['', [Validators.required]],
        });
    }
    get Course_CLOS_Form() { return this.CourseCLOSForm.controls; }
    get Course_CLOS_Form_Edit() { return this.CourseCLOSEditForm.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.CourseCLOSForm.invalid) {
            return;
        }
        var PLO = this.All_PLOS.filter(x => x.PLO_ID == this.Course_CLOS_Form.Selected_PLOS.value);
        var Skill = this.All_PLOS_Skill.filter(x => x.CLO_Skill_ID == this.Course_CLOS_Form.Selected_PLOS_Skill.value);
        var Skill_level = this.All_PLOS_Skill_level.filter(x => x.CLO_Skill_Level_ID == this.Course_CLOS_Form.Selected_PLOS_Skill_Level.value);
        //this.ngxLoader.start();
        this.All_Added_CLOS.push({
            "CLO_Title": 'CLO' + Number(this.CLO_Added_Count),
            "Description": this.Course_CLOS_Form.Description.value,
            "Selected_PLO_ID": Number(PLO[0].PLO_ID),
            "Selected_PLO_Title": PLO[0].PLO_Title,
            "Selected_Skill_ID": Number(Skill[0].CLO_Skill_ID),
            "Selected_Skill_Title": Skill[0].CLO_Skill_Title,
            "Selected_Skill_Level_ID": Number(Skill_level[0].CLO_Skill_Level_ID),
            "Selected_Skill_Level_Title": Skill_level[0].CLO_Skill_Level_Title,
            "Created_By": Number(GlobalService.FacultyMember_ID),
            "OfferedCourseID": Number(GlobalService.Offered_Course_ID),
        });
        this.CourseCLOSForm.reset();
        this.submitted = false;
        $("#Description").focus();
        this.CLO_Added_Count += 1;
        this.CourseCLOSForm.get('Selected_PLOS').setValue("");
        this.CourseCLOSForm.get('Selected_PLOS_Skill').setValue("");
        this.CourseCLOSForm.get('Selected_PLOS_Skill_Level').setValue("");
    }
    Delete_Temp_Added_CLOS(value) {
        if (value == 0) {
            this.All_Added_CLOS.splice(0, 1);
        }
        else {
            this.All_Added_CLOS.splice(value, 1);
        }
        this.CLO_Added_Count = this.Get_Course_CLOS.length + 1;
        if (this.All_Added_CLOS.length > 0) {
            for (var i = 0; i < this.All_Added_CLOS.length; i++) {
                this.All_Added_CLOS[i].CLO_Title = 'CLO' + this.CLO_Added_Count;
                this.CLO_Added_Count += 1;
            }
        }
    }
    Get_Selected_Course_CLOS() {
        this.Add_Permission = false;
        this.Is_Show_Action_TD = false;
        this.Is_Have_Special_Permission = false;
        this.Is_Permission_Add_Course_Details = GlobalService.Permissions.indexOf("Course_CLOS_Add") >= 0 ? true : false;
        this.Is_Permission_Edit_Course_Details = GlobalService.Permissions.indexOf("Course_CLOS_Edit") >= 0 ? true : false;
        this.Is_Permission_Delete_Course_Details = GlobalService.Permissions.indexOf("Course_CLOS_Delete") >= 0 ? true : false;
        this.Is_Completed = GlobalService.Is_Completed;
        this.Is_Show_Action_TD = false;
        if (GlobalService.FacultyMember_ID == GlobalService.TempFacultyMember_ID) {
            if (this.Is_Completed) {
                this.Add_Permission = false;
                this.Is_Show_Action_TD = false;
            }
            else {
                this.Add_Permission = true;
                this.Is_Show_Action_TD = true;
                this.Is_Permission_Edit_Course_Details = false;
                this.Is_Permission_Delete_Course_Details = false;
            }
        }
        else {
            if (this.Is_Permission_Add_Course_Details) {
                this.Add_Permission = true;
            }
            if (this.Is_Permission_Edit_Course_Details || this.Is_Permission_Delete_Course_Details) {
                this.Is_Show_Action_TD = true;
                this.Is_Have_Special_Permission = true;
            }
        }
        // if user is other then faculty is will have no concern is marks is submitted or not
        if (GlobalService.Offered_Course_ID == null || GlobalService.Offered_Course_ID == undefined) {
            this.toastr.error("No course is selected", "Error!");
            return;
        }
        this.pagesize = 50;
        this.dataset = [];
        this.Get_Course_CLOS = [];
        this.ngxService.start();
        this.CoursesCLOSService.GetCourseCLOS(GlobalService.Offered_Course_ID).
            subscribe(response => {
            if (response != null) {
                this.dataset = response.Course_CLOS;
                this.All_PLOS = response.All_PLOS;
                this.All_PLOS_Skill = response.All_PLOS_Skills;
                this.All_PLOS_Skill_level = response.All_PLOS_Skills_Levels;
                this.CLO_Added_Count = this.dataset.length + 1;
            }
            else {
                this.CLO_Added_Count = 0;
                this.Get_Course_CLOS = [];
                this.All_PLOS = [];
                this.All_PLOS_Skill = [];
                this.All_PLOS_Skill_level = [];
            }
            this.ngxService.stop();
            this.setPage(1, this.pagesize);
        }, error => {
            this.CLO_Added_Count = 0;
            this.Get_Course_CLOS = [];
            this.All_PLOS = [];
            this.All_PLOS_Skill = [];
            this.All_PLOS_Skill_level = [];
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    Get_Levels_For_Selected_Skill(value) {
        this.All_PLOS_Skill_level_temp = [];
        this.All_PLOS_Skill_level_temp = this.All_PLOS_Skill_level.filter(x => x.CLO_Skill_ID == Number(value));
    }
    Add_Courses_CLOS_Show_Modal() {
        this.All_Added_CLOS = [];
        this.CourseCLOSForm.reset();
        $("#Description").focus();
        this.All_Added_CLOS = [];
        this.CourseCLOSForm.reset();
        this.submitted = false;
        this.CourseCLOSForm.get('Selected_PLOS').setValue("");
        this.CourseCLOSForm.get('Selected_PLOS_Skill').setValue("");
        this.CourseCLOSForm.get('Selected_PLOS_Skill_Level').setValue("");
        $("#Add-Course-CLOS-Modal").modal("show");
    }
    Cancel_Course_Added_CLOS() {
        this.CLO_Added_Count = this.dataset.length + 1;
        $("#Add-Course-CLOS-Modal").modal("hide");
    }
    Save_Course_Added_CLOS() {
        this.ngxService.start();
        this.CoursesCLOSService.SaveCourseAddedCLOS(this.All_Added_CLOS).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("CLOs added successfully", "Success");
                $("#Add-Course-CLOS-Modal").modal("hide");
                this.Get_Selected_Course_CLOS();
                this.msgForDashboard.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
            }
            else {
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    Delete_CLO(value) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this again!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            reverseButtons: true,
        }).then((result) => {
            if (result.value) {
                if (value.Can_Change) {
                    this.ngxService.start();
                    this.CoursesCLOSService.DeleteCourseAddedCLOS({ "Course_CLO_IS": value.CoursesCLOSID, "Modified_By": GlobalService.FacultyMember_ID }).
                        subscribe(data => {
                        this.ngxService.stop();
                        if (data) {
                            Swal.fire('Deleted!', 'Course CLO deleted successfully.', 'success');
                            this.Get_Selected_Course_CLOS();
                            this.msgForDashboard.UpdateCourseDetailsCounts(GlobalService.TempFacultyMember_ID.toString());
                        }
                        else {
                            Swal.fire('Cancelled', 'Your data is safe', 'error');
                        }
                    }, error => {
                        this.ngxService.stop();
                        Swal.fire('Cancelled', 'Error occured while processing your request. Please contact to admin', 'error');
                    });
                }
                else {
                    this.toastr.error("CLO cannot be deleted because this CLO because some assessment is mapped on selected CLO", "Error");
                }
            }
            else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.close();
            }
        });
    }
    Edit_CLO(value) {
        this.Selected_CLO_ID = value.CoursesCLOSID;
        this.All_PLOS_Skill_level_temp = [];
        this.All_PLOS_Skill_level_temp = this.All_PLOS_Skill_level.filter(x => x.CLO_Skill_ID == Number(value.CLOSkill));
        this.CourseCLOSEditForm.get('Description_Edit').setValue(value.CLODescription);
        this.CourseCLOSEditForm.get('Selected_PLOS_Edit').setValue(value.MappedPLO);
        this.CourseCLOSEditForm.get('Selected_PLOS_Skill_Edit').setValue(Number(value.CLOSkill));
        this.CourseCLOSEditForm.get('Selected_PLOS_Skill_Level_Edit').setValue(Number(value.CLOSkillLevel));
        $("#Edit-Course-CLOS-Modal").modal('show');
    }
    onSubmitUpdate() {
        this.ngxService.start();
        this.All_Added_CLOS = [];
        this.submitted_Edit = true;
        if (this.CourseCLOSEditForm.invalid) {
            return;
        }
        this.CoursesCLOSService.UpdateCourseAddedCLOS({
            "Course_CLO_ID": this.Selected_CLO_ID,
            "Description": this.Course_CLOS_Form_Edit.Description_Edit.value,
            "Selected_PLO_ID": Number(this.Course_CLOS_Form_Edit.Selected_PLOS_Edit.value),
            "Selected_Skill_ID": Number(this.Course_CLOS_Form_Edit.Selected_PLOS_Skill_Edit.value),
            "Selected_Skill_Level_ID": Number(this.Course_CLOS_Form_Edit.Selected_PLOS_Skill_Level_Edit.value),
            "Modified_By": Number(GlobalService.FacultyMember_ID),
        }).
            subscribe(data => {
            this.ngxService.stop();
            if (data) {
                this.toastr.success("CLOs updated successfully", "Success");
                $("#Edit-Course-CLOS-Modal").modal('hide');
                this.Get_Selected_Course_CLOS();
            }
            else {
                this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
            }
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request. Please contact to admin", "Error");
        });
    }
    setPage(page, pagesize) {
        this.Get_Course_CLOS = [];
        this.query = "";
        if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
        }
        this.page = page;
        this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
        this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
        this.Get_Course_CLOS = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
    keyRestrict(e, validchars, casesensitives, onceevery, onceoneof) {
        onceevery = onceevery ? onceevery : "";
        onceoneof = onceoneof ? onceoneof : "";
        if (!validchars)
            return true;
        var keychar = '', i = 0;
        var key = e.which ? e.which : e.keyCode;
        var obj = e.target ? e.target : e.srcElement;
        if (key == null)
            return true;
        keychar = String.fromCharCode(key);
        validchars = (validchars + onceevery + onceoneof);
        if (!casesensitives) {
            keychar = keychar.toLowerCase();
            validchars = validchars.toLowerCase();
            onceevery = onceevery.toLowerCase();
            onceoneof = onceoneof.toLowerCase();
        }
        for (i = 0; i < (onceevery + onceoneof).length; i++) {
            if (i < onceevery.length) {
                if (obj.value.indexOf(onceevery.charAt(i)) != -1 && keychar == onceevery.charAt(i))
                    return false;
            }
            else {
                if (obj.value.indexOf(onceoneof.charAt(i - onceevery.length)) != -1 && onceoneof.indexOf(keychar) != -1)
                    return false;
            }
        }
        if (validchars.indexOf(keychar) != -1)
            return true;
        if (key == null || key == 0 || key == 8 || key == 9 || key == 13 || key == 27 || key == 39 || key == 32)
            return true;
        return false;
    }
};
CoursesClosComponent = __decorate([
    Component({
        selector: 'app-courses-clos',
        templateUrl: './courses-clos.component.html',
        styleUrls: ['./courses-clos.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], CoursesClosComponent);
export { CoursesClosComponent };
//# sourceMappingURL=courses-clos.component.js.map