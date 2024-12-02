import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { PagerService } from '../../../Shared/Services/Global/Pager';
import { HighlightPipe } from '../../../Shared/Pipe/highlight.pipe';
import { FilterPipe } from '../../../Shared/Pipe/filter';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
let AssessmentMarksComponent = class AssessmentMarksComponent {
    constructor(AssessmentMarksService, toastr, pagerService, ngxService) {
        this.AssessmentMarksService = AssessmentMarksService;
        this.toastr = toastr;
        this.pagerService = pagerService;
        this.ngxService = ngxService;
        this.Registered_Students = [];
        this.Added_Assessments = [];
        this.Assessment_Marks_Final = [];
        this.Assessment_And_Student_Details = [];
        this.Added_Marks_For_Excel = [];
        this.dataset = [];
        this.Update_Marks = [];
        this.Updated_Marks = [];
        this.pager = {};
        this.Selected_Assessment = "";
        this.Selected_Student = "";
        this.query = "";
        this.FileName = "";
        this.pagesize = 50;
        this.Question_Marks = 0;
        this.Assessment_Marks_ID = 0;
        this.Index = 0;
        this.Is_Course = false;
        this.Add_Permission = false;
        this.Is_Show_Action_TD = true;
        this.Selected_Assessment = "0";
        this.Selected_Student = "0";
    }
    ngOnInit() {
        this.Is_Course = GlobalService.Is_Course;
        this.Assessment_Marks_ID = 0;
        this.Get_Registered_Student();
        this.Is_Completed = GlobalService.Is_Completed;
        if (GlobalService.Is_Completed) {
            this.Is_Show_Action_TD = false;
        }
        this.Add_Permission = false;
        this.Is_Show_Action_TD = false;
        this.Is_Show_Action_TD = false;
        this.Is_Permission_Add_Course_Details = GlobalService.Permissions.indexOf("Course_Assessment_Marks_Add") >= 0 ? true : false;
        this.Is_Permission_Edit_Course_Details = GlobalService.Permissions.indexOf("Course_Assessment_Marks_Edit") >= 0 ? true : false;
        if (GlobalService.FacultyMember_ID == GlobalService.TempFacultyMember_ID) {
            if (this.Is_Completed) {
                this.Add_Permission = false;
                this.Is_Show_Action_TD = false;
            }
            else {
                this.Add_Permission = true;
                this.Is_Show_Action_TD = true;
                this.Is_Permission_Add_Course_Details = true;
                this.Is_Permission_Edit_Course_Details = false;
            }
        }
        else {
            if (this.Is_Permission_Add_Course_Details) {
                this.Add_Permission = true;
            }
            if (this.Is_Permission_Edit_Course_Details) {
                this.Is_Show_Action_TD = true;
            }
        }
    }
    Get_Registered_Student() {
        this.Registered_Students = [];
        this.Added_Assessments = [];
        this.Added_Marks_For_Excel = [];
        this.ngxService.start();
        this.AssessmentMarksService.GetRegisteredStudent(GlobalService.Offered_Course_ID).
            subscribe(data => {
            if (data != null) {
                this.Registered_Students = data.GetRegisteredStudents;
                this.Added_Assessments = data.AssessmentDetailsResponseForCourse;
                this.Added_Marks_For_Excel = data.CourseMarksForExcel;
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
        });
    }
    onFileChange(ev) {
        this.FileName = "";
        let workBook = null;
        let Data = null;
        const reader = new FileReader();
        const file = ev.target.files[0];
        this.FileName = file.name;
        reader.onload = (event) => {
            const data = reader.result;
            workBook = XLSX.read(data, { type: "binary" });
            Data = workBook.SheetNames.reduce((initial, name) => {
                const sheet = workBook.Sheets[name];
                initial[name] = XLSX.utils.sheet_to_json(sheet, { header: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'], raw: true, defval: 0, range: 1 });
                return initial;
            }, {});
            for (var i = 0; i < this.Added_Assessments.length; i++) {
                var Question_Count = 0;
                var Is_Fine = true;
                var Assessment_Details_ID_And_Question_Marks = [];
                var Assessment_Marks_With_Details = [];
                var Assessment_Marks_From_Excel = Data[this.Added_Assessments[i].Assessment_Original_Title];
                // if marks is not added of any assessment
                if (Assessment_Marks_From_Excel != undefined) {
                    // check if assessment have more then 1 question added
                    if (this.Added_Assessments[i].Assessment_Sub_Detail_ID.split(',').length > 1) {
                        Assessment_Details_ID_And_Question_Marks.push({
                            "Is_Multiple": true,
                            "Assessment_Details_ID": this.Added_Assessments[i].Assessment_Sub_Detail_ID.split(','),
                            "Assessment_Added_Question_Marks": this.Added_Assessments[i].Question_Marks.split(',')
                        });
                    }
                    else {
                        Assessment_Details_ID_And_Question_Marks.push({
                            "Is_Multiple": false,
                            "Assessment_Details_ID": this.Added_Assessments[i].Assessment_Sub_Detail_ID,
                            "Assessment_Added_Question_Marks": this.Added_Assessments[i].Question_Marks
                        });
                    }
                    // check for question count
                    if (Assessment_Details_ID_And_Question_Marks[0].Is_Multiple) {
                        Question_Count = Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks.length;
                    }
                    else {
                        Question_Count = Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks.split(',').length;
                    }
                    for (var j = 0; j < Assessment_Marks_From_Excel.length; j++) {
                        if (Assessment_Details_ID_And_Question_Marks[0].Is_Multiple) {
                            var count = 2;
                            for (var k = 0; k < Question_Count; k++) {
                                Assessment_Marks_With_Details.push({
                                    "Student_ID": Number(this.Registered_Students.filter(x => x.Student_Enrollment == Assessment_Marks_From_Excel[j][0])[0].Student_ID),
                                    "Enrollment": Assessment_Marks_From_Excel[j][0],
                                    "Name": Assessment_Marks_From_Excel[j][1],
                                    "Assessment_Sub_Details_ID": Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Details_ID[k]),
                                    "Question_Marks": Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks[k]),
                                    "Obtained_Marks": Number(Assessment_Marks_From_Excel[j][count]) > Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks[k]) ? Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks[k]) : Number(Assessment_Marks_From_Excel[j][count]),
                                    "Created_By": Number(GlobalService.FacultyMember_ID),
                                    "Is_Fine": Number(Assessment_Marks_From_Excel[j][count]) > Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks[k]) ? false : true
                                });
                                if (Is_Fine) {
                                    Is_Fine = Number(Assessment_Marks_From_Excel[j][count]) > Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks[k]) ? false : true;
                                }
                                count += 1;
                            }
                        }
                        else {
                            Assessment_Marks_With_Details.push({
                                "Student_ID": Number(this.Registered_Students.filter(x => x.Student_Enrollment == Assessment_Marks_From_Excel[j][0])[0].Student_ID),
                                "Enrollment": Assessment_Marks_From_Excel[j][0],
                                "Name": Assessment_Marks_From_Excel[j][1],
                                "Assessment_Sub_Details_ID": Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Details_ID),
                                "Question_Marks": Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks),
                                "Obtained_Marks": Number(Assessment_Marks_From_Excel[j][2]) > Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks) ? Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks) : Number(Assessment_Marks_From_Excel[j][2]),
                                "Created_By": Number(GlobalService.FacultyMember_ID),
                                "Is_Fine": Number(Assessment_Marks_From_Excel[j][2]) > Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks) ? false : true
                            });
                            if (Is_Fine) {
                                Is_Fine = Number(Assessment_Marks_From_Excel[j][2]) > Number(Assessment_Details_ID_And_Question_Marks[0].Assessment_Added_Question_Marks) ? false : true;
                            }
                        }
                    }
                    this.Assessment_Marks_Final.push({
                        "Is_Fine": Is_Fine,
                        "Offered_Course_ID": Number(GlobalService.Offered_Course_ID),
                        "Assessment_ID": Number(this.Added_Assessments[i].Assessment_Main_Details_ID),
                        "Assessment_Title": this.Added_Assessments[i].Assessment_Title,
                        "Question_Count": Number(Question_Count),
                        "Assessment_Student_Marks_Details": Assessment_Marks_With_Details
                    });
                }
            }
        };
        reader.readAsBinaryString(file);
    }
    Save_Marks() {
        console.log(this.Assessment_Marks_Final);
        this.ngxService.start();
        this.AssessmentMarksService.AddMarksThroughExcel(this.Assessment_Marks_Final).
            subscribe(data => {
            if (data) {
                this.toastr.success("Marks saved successfully", "Marks Information");
            }
            else {
                this.toastr.error("Error occured while processing your request", "Error!");
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
        });
    }
    GetStudentAssessmentDetails() {
        this.ngxService.start();
        this.pagesize = 50;
        this.Assessment_And_Student_Details = [];
        this.AssessmentMarksService.GetStudentsMarksForSelectedAssessment({ "Assessment_ID": Number(this.Selected_Assessment), "Student_ID": Number(this.Selected_Student) }).
            subscribe(data => {
            if (data != null) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Assessment_Sub_Detail_ID.includes(',')) {
                        this.Assessment_And_Student_Details.push({
                            "Assessment_Title": data[i].Assessment_Title,
                            "Assessment_Marks": data[i].Assessment_Marks,
                            "Question_Marks": data[i].Question_Marks.split(','),
                            "Enrollment": data[i].Enrollment,
                            "Student_ID": data[i].StudentID,
                            "Is_Locked": data[i].IS_LOCKED,
                            "Name": data[i].Name,
                            "Assessment_Sub_Detail_ID": data[i].Assessment_Sub_Detail_ID.split(','),
                            "Obtained_Marks": data[i].Question_Obtained_Marks.split(','),
                            "Question_Number": data[i].Question_Number.split(','),
                            "Weightage": data[i].Weightage.split(','),
                            "CLO_Title": data[i].CLO_Title.split(','),
                            "Assessment_Marks_ID": data[i].AssessmentMarksID.split(','),
                            "Is_Multiple": true,
                            "Is_Course": this.Is_Course
                        });
                    }
                    else {
                        this.Assessment_And_Student_Details.push({
                            "Assessment_Title": data[i].Assessment_Title,
                            "Assessment_Marks": data[i].Assessment_Marks,
                            "Question_Marks": data[i].Question_Marks,
                            "Enrollment": data[i].Enrollment,
                            "Student_ID": data[i].StudentID,
                            "Is_Locked": data[i].IS_LOCKED,
                            "Name": data[i].Name,
                            "Assessment_Sub_Detail_ID": data[i].Assessment_Sub_Detail_ID,
                            "Obtained_Marks": data[i].Question_Obtained_Marks,
                            "Question_Number": data[i].Question_Number,
                            "Weightage": data[i].Weightage,
                            "CLO_Title": data[i].CLO_Title,
                            "Assessment_Marks_ID": data[i].AssessmentMarksID,
                            "Is_Multiple": false,
                            "Is_Course": this.Is_Course
                        });
                    }
                }
                this.dataset = this.Assessment_And_Student_Details;
                this.Assessment_And_Student_Details = [];
                this.setPage(1, this.pagesize);
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Error occured while processing your request", "Error!");
        });
    }
    DownloadExcel() {
        if (this.Added_Assessments.length > 0) {
            var wb = XLSX.utils.book_new();
            for (var i = 0; i < this.Added_Assessments.length; i++) {
                var Question_Count = this.Added_Assessments[i].Assessment_Sub_Detail_ID.split(',').length;
                var header = [];
                var Data = [];
                var Heading = [];
                header.push("Erollment", "Name");
                if (this.Is_Course) {
                    for (var j = 0; j < Question_Count; j++) {
                        var temp = this.Added_Assessments[i].Question_Marks.split(',');
                        header.push("Q#" + Number(j + 1) + '-(' + Number(temp[j]) + ')');
                    }
                }
                else {
                    for (var j = 0; j < Question_Count; j++) {
                        var temp = this.Added_Assessments[i].Question_Marks.split(',');
                        var temp1 = this.Added_Assessments[i].Performance_Indicator.split(',');
                        header.push(temp1[j] + '-(' + Number(temp[j]) + ')');
                    }
                }
                Heading.push(header);
                for (var k = 0; k < this.Registered_Students.length; k++) {
                    var data = [];
                    data.push(this.Registered_Students[k].Student_Enrollment, this.Registered_Students[k].Student_Name);
                    for (var j = 0; j < Question_Count; j++) {
                        if (this.Added_Marks_For_Excel.filter(x => x.AssessmentTitle == this.Added_Assessments[i].Assessment_Original_Title).length > 0) {
                            let temp = this.Added_Marks_For_Excel.filter(x => Number(x.StudentID) == Number(this.Registered_Students[k].Student_ID)
                                && x.AssessmentTitle == this.Added_Assessments[i].Assessment_Original_Title);
                            if (temp.length > 0) {
                                temp = temp[j].ObtainedMarks;
                            }
                            else {
                                temp.push(0);
                            }
                            data.push(temp);
                        }
                        else {
                            data.push('');
                        }
                    }
                    Data.push(data);
                }
                var ws = XLSX.utils.aoa_to_sheet(Heading);
                ws["!cols"] = [
                    { wpx: 100 },
                    { wpx: 200 },
                ];
                XLSX.utils.sheet_add_json(ws, Data, {
                    skipHeader: true,
                    origin: -1,
                });
                XLSX.utils.book_append_sheet(wb, ws, this.Added_Assessments[i].Assessment_Original_Title);
            }
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            FileSaver.saveAs(new Blob([wbout], { type: "application/octet-stream" }), this.Added_Assessments[0].Course_Alias + ".xlsx");
        }
        else {
            this.toastr.error("No assessment is added", "Error");
        }
    }
    setPage(page, pagesize) {
        this.query = "";
        if ((page < 1 || page > this.pager.totalPages) && page != "") {
            this.page = 1;
            page = 1;
        }
        this.page = page;
        this.pager = this.pagerService.getPager(this.dataset.length, page, pagesize);
        this.serialNumber = ((this.pager.currentPage * this.pagesize) - this.pagesize) + (this.serialNumber);
        this.Assessment_And_Student_Details = this.dataset.slice(this.pager.startIndex, this.pager.endIndex + 1);
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
    Edit_Assessment_Marks(val) {
        this.Update_Marks = [];
        this.Updated_Marks = [];
        $("#update_Marks").val('');
        $("#Question_Number").val('');
        if (val.Is_Multiple) {
            for (var i = 0; i < val.Assessment_Marks_ID.length; i++) {
                this.Update_Marks.push({
                    "Assessment_Marks": val.Assessment_Marks,
                    "Assessment_Sub_Detail_ID": val.Assessment_Sub_Detail_ID,
                    "CLO_Title": val.CLO_Title[i],
                    "Is_Course": val.Is_Course,
                    "Is_Locked": val.Is_Locked,
                    "Is_Multiple": val.Is_Multiple,
                    "Name": val.Name,
                    "Obtained_Marks": val.Obtained_Marks[i],
                    "Question_Marks": val.Question_Marks[i],
                    "Question_Number": val.Question_Number[i],
                    "Weightage": val.Weightage[i],
                    "Assessment_Marks_ID": val.Assessment_Marks_ID[i],
                    "Student_ID": val.Student_ID
                });
            }
        }
        else {
            this.Update_Marks.push({
                "Assessment_Marks": val.Assessment_Marks,
                "Assessment_Sub_Detail_ID": val.Assessment_Sub_Detail_ID,
                "CLO_Title": val.CLO_Title,
                "Is_Course": val.Is_Course,
                "Is_Locked": val.Is_Locked,
                "Is_Multiple": val.Is_Multiple,
                "Name": val.Name,
                "Obtained_Marks": val.Obtained_Marks,
                "Question_Marks": val.Question_Marks,
                "Question_Number": val.Question_Number,
                "Weightage": val.Weightage,
                "Assessment_Marks_ID": val.Assessment_Marks_ID,
                "Student_ID": val.Student_ID
            });
        }
        $("#Edit-Assessment-Marks-Modal").modal('show');
    }
    Edit_Assessment_Marks_Temp(val, index) {
        this.Question_Marks = Number(val.Question_Marks);
        this.Index = index;
        this.Assessment_Marks_ID = Number(val.Assessment_Marks_ID);
        $("#update_Marks").val(val.Obtained_Marks);
        $("#Question_Number").val(val.Question_Number);
    }
    Update_Temp() {
        if (Number(this.Assessment_Marks_ID) == 0) {
            this.toastr.error("No question is selected for the edit action ", "Invaid Makrs Entry!");
            return;
        }
        if (Number($("#update_Marks").val()) > this.Question_Marks) {
            this.toastr.error("Maximum marks should be equal to " + this.Question_Marks, "Invaid Makrs Entry!");
            return;
        }
        if ($("#update_Marks").val() == '') {
            this.toastr.error("Please enter marks. Max be " + this.Question_Marks, "Invaid Makrs Entry!");
            return;
        }
        this.Update_Marks[this.Index].Obtained_Marks = $("#update_Marks").val();
        this.Updated_Marks.push({
            "Assessment_Marks_ID": Number(this.Assessment_Marks_ID),
            "Obtained_Marks": Number($("#update_Marks").val()),
            "Modified_By": Number(GlobalService.FacultyMember_ID),
            "Offered_Course_ID": Number(GlobalService.Offered_Course_ID),
        });
        $("#update_Marks").val('');
        $("#Question_Number").val('');
        this.Assessment_Marks_ID = 0;
    }
    Save_Updated_Marks() {
        this.ngxService.start();
        if (this.Updated_Marks.length > 0) {
            this.AssessmentMarksService.SaveUpdatedMarks(this.Updated_Marks).
                subscribe(data => {
                this.ngxService.stop();
                if (data) {
                    $("#Edit-Assessment-Marks-Modal").modal('hide');
                    this.toastr.success("Marks updated successfully", "Edit Marks!");
                    this.GetStudentAssessmentDetails();
                }
                else {
                    this.toastr.error("Error occured while processing your request", "Error!");
                }
            }, error => {
                this.ngxService.stop();
                this.toastr.error("Error occured while processing your request", "Error!");
            });
        }
        else {
            this.toastr.error("No marks changed", "Invaid Makrs Entry!");
        }
    }
};
AssessmentMarksComponent = __decorate([
    Component({
        selector: 'app-assessment-marks',
        templateUrl: './assessment-marks.component.html',
        styleUrls: ['./assessment-marks.component.css'],
        providers: [PagerService, HighlightPipe, FilterPipe]
    })
], AssessmentMarksComponent);
export { AssessmentMarksComponent };
//# sourceMappingURL=assessment-marks.component.js.map