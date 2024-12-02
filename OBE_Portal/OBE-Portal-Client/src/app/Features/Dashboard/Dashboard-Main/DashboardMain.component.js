import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { Dashboard_Request } from '../../../Models/Dashboard/Dashboard_Request';
let DashboardMainComponent = class DashboardMainComponent {
    constructor(toastr, msgForDashboard, DashboardService, ngxService) {
        this.toastr = toastr;
        this.msgForDashboard = msgForDashboard;
        this.DashboardService = DashboardService;
        this.ngxService = ngxService;
        this.Assessment_Averages = [];
        this.Assessment_Averages_Graph_Data = [];
        this.CLOS_Averages_Graph_Data = [];
        this.Categories = [];
        this.Assignment_Or_Assessment = [];
        this.Quiz_Or_Journals = [];
        this.Assessment = [];
        this.Journals = [];
        this.Mids = [];
        this.Finals = [];
        this.Assessment_Average = [];
        this.CLOS_Average = [];
        this.CLOS_Assessment_Comparison = [];
        this.All_Courses_CLOS_Attainment = [];
        this.Assigned_Course_Count = 0;
        this.All_Courses_CLOS_Count = 0;
        this.All_Assessment_Averages = 0;
        this.Sum_Of_All_CLOS_Marks = 0;
        this.CLOS_Attainment = 0;
        this.Sum_Of_Course_Wise_CLOS = 0;
        this.Sum_Of_All_CLOS_Assessment_Attainment = 0;
        this.Is_Permission_Search_Criteria = false;
        this.Dashboard_Request = new Dashboard_Request();
        this.Dashboard_Response = [];
        this.Is_Permission_Search_Criteria = GlobalService.Permissions.indexOf("Search_Criteria_Main") >= 0 ? true : false;
    }
    ngOnInit() {
        this.msgForDashboard.searchvaluetemp.subscribe(search => {
            if (search == "") {
                this.Dashboard_Request.FacultyMember_ID = GlobalService.FacultyMember_ID;
                this.Dashboard_Request.Semester_ID = GlobalService.Semester_ID;
            }
            else {
                GlobalService.Semester_ID = Number(search);
                this.Dashboard_Request.FacultyMember_ID = GlobalService.FacultyMember_ID;
                this.Dashboard_Request.Semester_ID = GlobalService.Semester_ID;
            }
            this.Get_Assessment_Data_Course();
        });
        if (this.Is_Permission_Search_Criteria) {
            this.msgForDashboard.SetSelectedFacultyDashboard.subscribe(search => {
                if (search != "") {
                    this.Get_Assessment_Data_Course_Search(Number(search));
                }
            });
        }
    }
    Get_Assessment_Data_Course() {
        this.ngxService.start();
        this.Assessment_Averages = [];
        this.Assessment_Averages_Graph_Data = [];
        this.CLOS_Averages_Graph_Data = [];
        this.Categories = [];
        this.Assignment_Or_Assessment = [];
        this.Quiz_Or_Journals = [];
        this.Mids = [];
        this.Finals = [];
        this.CLOS_Assessment_Comparison = [];
        this.Assessment_Average = [];
        this.CLOS_Average = [];
        this.All_Courses_CLOS_Attainment = [];
        this.Assigned_Course_Count = 0;
        this.All_Assessment_Averages = 0;
        this.All_Courses_CLOS_Count = 0;
        this.Sum_Of_All_CLOS_Marks = 0;
        this.CLOS_Attainment = 0;
        this.Sum_Of_All_CLOS_Assessment_Attainment = 0;
        this.DashboardService.GetAssessmentDataForDashboardCourse(this.Dashboard_Request).
            subscribe(response => {
            var temp = 0;
            var temp1 = 0;
            var temp2 = 0;
            var temp3 = 0;
            if (response != null) {
                var Max_CLO_Count = Math.max.apply(Math, response.map(function (o) { return o.CLOS_Count; }));
                var Is_Lab = response.filter(x => x.Is_Course == false).length > 0 ? true : false;
                var Is_Course = response.filter(x => x.Is_Course == true).length > 0 ? true : false;
                this.Assigned_Course_Count = response.length;
                // Work for graph 1
                for (var j = 0; j < Max_CLO_Count; j++) {
                    var CLO = 'CLO' + (j + 1);
                    var data = [];
                    for (var k = 0; k < response.length; k++) {
                        if (response[k].CLO_Attainment != '0') {
                            if (!isNaN(Number(response[k].CLO_Attainment.split(',')[j]))) {
                                data.push(Number(response[k].CLO_Attainment.split(',')[j]));
                                this.Sum_Of_All_CLOS_Marks += Number(response[k].CLO_Attainment.split(',')[j]);
                            }
                            else {
                                this.Sum_Of_All_CLOS_Marks += 0;
                                data.push('');
                            }
                        }
                    }
                    this.CLOS_Averages_Graph_Data.push({
                        "name": CLO,
                        "data": data
                    });
                }
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                for (var i = 0; i < response.length; i++) {
                    temp = 0;
                    temp1 = 0;
                    // Work for graph 2
                    if (response[i].CLO_Attainment != '0') {
                        this.All_Courses_CLOS_Count += response[i].CLO_Attainment.split(',').length;
                        for (var k = 0; k < response[i].CLO_Attainment.split(',').length; k++) {
                            this.Sum_Of_Course_Wise_CLOS += Number(response[i].CLO_Attainment.split(',')[k]);
                            temp += Number(response[i].CLO_Attainment.split(',')[k]);
                        }
                        this.CLOS_Average.push(Math.round(temp / response[i].CLO_Attainment.split(',').length));
                        temp2 += Math.round(temp / response[i].CLO_Attainment.split(',').length);
                    }
                    //------------------------------------------------------------------------------------------------------------------------------------------------
                    // this list is for side tables assessment averages
                    this.Assessment_Averages.push({
                        "Title": response[i].Title,
                        "Assignment_Average": Number(response[i].Assignment_Attainment),
                        "Quiz_Average": Number(response[i].Quiz_Attainment),
                        "Assessment_Average": Number(response[i].Assessment_Attainment),
                        "Journals_Average": Number(response[i].Journals_Attainment),
                        "Mids_Average": Number(response[i].Mids_Attainment),
                        "Finals_Average": Number(response[i].Finals_Attainment),
                        "Is_Course": Number(response[i].Is_Course)
                    });
                    this.Categories.push(response[i].Course_Alias);
                    this.Assignment_Or_Assessment.push(response[i].Is_Course ? response[i].Assignment_Attainment : response[i].Assessment_Attainment);
                    this.Quiz_Or_Journals.push(response[i].Is_Course ? response[i].Quiz_Attainment : response[i].Journals_Attainment);
                    this.Mids.push(response[i].Mids_Attainment);
                    this.Finals.push(response[i].Finals_Attainment);
                    // Calculating all assigned courses assessment averages
                    this.All_Assessment_Averages +=
                        Number(response[i].Assignment_Attainment) + Number(response[i].Quiz_Attainment) +
                            Number(response[i].Assessment_Attainment) + Number(response[i].Journals_Attainment) +
                            Number(response[i].Mids_Attainment) + Number(response[i].Finals_Attainment);
                    temp1 +=
                        Number(response[i].Assignment_Attainment) + Number(response[i].Quiz_Attainment) +
                            Number(response[i].Assessment_Attainment) + Number(response[i].Journals_Attainment) +
                            Number(response[i].Mids_Attainment) + Number(response[i].Finals_Attainment);
                    this.Assessment_Average.push(Math.round(temp1 / 4));
                    temp3 += Math.round(temp1 / 4);
                    this.All_Courses_CLOS_Attainment.push({
                        name: response[i].Course_Alias,
                        y: Math.round(temp / response[i].CLO_Attainment.split(',').length)
                    });
                    //--------------------------------------------------------------------------------------------------------------------------------------------------
                }
                //
                this.CLOS_Assessment_Comparison.push({
                    "name": 'CLOS Attainment',
                    "data": this.CLOS_Average
                }, {
                    "name": 'Assessment Attainment',
                    "data": this.Assessment_Average
                });
                this.Sum_Of_All_CLOS_Assessment_Attainment = Math.round((temp2 + temp3) / (this.CLOS_Average.length + this.Assessment_Average.length));
                // Calculating all assigned courses assessment averages for graph 1
                this.All_Assessment_Averages = Math.round(this.All_Assessment_Averages / (4 * response.length));
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                // Calculating all assigned courses CLOS averages for graph 2
                this.CLOS_Attainment = Math.round(this.Sum_Of_All_CLOS_Marks / this.All_Courses_CLOS_Count);
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                // Calculating all assigned courses assessment averages
                if (Is_Lab && Is_Course) {
                    this.Assessment_Averages_Graph_Data.push({
                        "name": 'Assignment/Assessment',
                        "data": this.Assignment_Or_Assessment
                    }, {
                        "name": 'Quizzez/Journals',
                        "data": this.Quiz_Or_Journals
                    }, {
                        "name": 'Mid Term',
                        "data": this.Mids
                    }, {
                        "name": 'Final Term',
                        "data": this.Finals
                    });
                }
                else if (Is_Lab) {
                    this.Assessment_Averages_Graph_Data.push({
                        "name": 'Assessment',
                        "data": this.Assignment_Or_Assessment
                    }, {
                        "name": 'Journals',
                        "data": this.Quiz_Or_Journals
                    }, {
                        "name": 'Mid Term',
                        "data": this.Mids
                    }, {
                        "name": 'Final Term',
                        "data": this.Finals
                    });
                }
                else if (Is_Course) {
                    this.Assessment_Averages_Graph_Data.push({
                        "name": 'Assignment',
                        "data": this.Assignment_Or_Assessment
                    }, {
                        "name": 'Quizzez',
                        "data": this.Quiz_Or_Journals
                    }, {
                        "name": 'Mid Term',
                        "data": this.Mids
                    }, {
                        "name": 'Final Term',
                        "data": this.Finals
                    });
                }
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                this.CLOSAttainment();
                this.AssessmentAttainment();
                this.PassToFailRation();
                this.OverallCoursesProgress();
            }
            else {
                this.toastr.info("No courses assigned to you in selected semester", "Warning!");
                this.CLOSAttainment();
                this.AssessmentAttainment();
                this.PassToFailRation();
                this.OverallCoursesProgress();
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
    CLOSAttainment() {
        $('#CLOSAttainment').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#004170', '#6dafe1', '#999', '#0864a6', '#727272'],
            title: {
                text: ''
            },
            xAxis: {
                categories: this.Categories,
                crosshair: true
            },
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: 'CLOS Attainment'
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}%</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}<b>%</b>'
                    },
                }
            },
            series: this.CLOS_Averages_Graph_Data
        });
    }
    AssessmentAttainment() {
        $('#AssessmentAttainment').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#004170', '#6dafe1', '#999', '#0864a6', '#727272'],
            title: {
                text: ''
            },
            xAxis: {
                categories: this.Categories,
                crosshair: true
            },
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: 'Assessments Attainment'
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}%</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}<b>%</b>'
                    },
                }
            },
            series: this.Assessment_Averages_Graph_Data
        });
    }
    PassToFailRation() {
        $('#PassToFailRation').highcharts({
            chart: {
                type: 'column'
            },
            colors: ['#004170', '#6dafe1', '#999', '#0864a6', '#727272'],
            title: {
                text: ''
            },
            xAxis: {
                categories: this.Categories,
                crosshair: true
            },
            yAxis: {
                min: 0,
                max: 100,
                title: {
                    text: 'Comparison of CLOS and Assessment'
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}%</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y}<b>%</b>'
                    },
                }
            },
            series: this.CLOS_Assessment_Comparison
        });
    }
    OverallCoursesProgress() {
        $('#OverallCoursesProgress').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            colors: ['#004170', '#6dafe1', '#999', '#0864a6', '#727272'],
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                enabled: true
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f}%'
                    }
                }
            },
            series: [{
                    name: 'Overall Course Progress',
                    colorByPoint: true,
                    data: this.All_Courses_CLOS_Attainment
                }]
        });
    }
    Get_Assessment_Data_Course_Search(FacultyMember_ID) {
        this.ngxService.start();
        this.Dashboard_Request.FacultyMember_ID = Number(FacultyMember_ID);
        this.Dashboard_Request.Semester_ID = GlobalService.Semester_ID;
        this.Assessment_Averages = [];
        this.Assessment_Averages_Graph_Data = [];
        this.CLOS_Averages_Graph_Data = [];
        this.Categories = [];
        this.Assignment_Or_Assessment = [];
        this.Quiz_Or_Journals = [];
        this.Mids = [];
        this.Finals = [];
        this.CLOS_Assessment_Comparison = [];
        this.Assessment_Average = [];
        this.CLOS_Average = [];
        this.All_Courses_CLOS_Attainment = [];
        this.Assigned_Course_Count = 0;
        this.All_Assessment_Averages = 0;
        this.All_Courses_CLOS_Count = 0;
        this.Sum_Of_All_CLOS_Marks = 0;
        this.CLOS_Attainment = 0;
        this.Sum_Of_All_CLOS_Assessment_Attainment = 0;
        this.DashboardService.GetAssessmentDataForDashboardCourse(this.Dashboard_Request).
            subscribe(response => {
            var temp = 0;
            var temp1 = 0;
            var temp2 = 0;
            var temp3 = 0;
            if (response != null) {
                var Max_CLO_Count = Math.max.apply(Math, response.map(function (o) { return o.CLOS_Count; }));
                var Is_Lab = response.filter(x => x.Is_Course == false).length > 0 ? true : false;
                var Is_Course = response.filter(x => x.Is_Course == true).length > 0 ? true : false;
                this.Assigned_Course_Count = response.length;
                // Work for graph 1
                for (var j = 0; j < Max_CLO_Count; j++) {
                    var CLO = 'CLO' + (j + 1);
                    var data = [];
                    for (var k = 0; k < response.length; k++) {
                        if (response[k].clO_Attainment != '0') {
                            if (!isNaN(Number(response[k].CLO_Attainment.split(',')[j]))) {
                                data.push(Number(response[k].CLO_Attainment.split(',')[j]));
                                this.Sum_Of_All_CLOS_Marks += Number(response[k].CLO_Attainment.split(',')[j]);
                            }
                            else {
                                this.Sum_Of_All_CLOS_Marks += 0;
                                data.push('');
                            }
                        }
                    }
                    this.CLOS_Averages_Graph_Data.push({
                        "name": CLO,
                        "data": data
                    });
                }
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                for (var i = 0; i < response.length; i++) {
                    temp = 0;
                    temp1 = 0;
                    // Work for graph 2
                    if (response[i].clO_Attainment != '0') {
                        this.All_Courses_CLOS_Count += response[i].CLO_Attainment.split(',').length;
                        for (var k = 0; k < response[i].CLO_Attainment.split(',').length; k++) {
                            this.Sum_Of_Course_Wise_CLOS += Number(response[i].CLO_Attainment.split(',')[k]);
                            temp += Number(response[i].CLO_Attainment.split(',')[k]);
                        }
                        this.CLOS_Average.push(Math.round(temp / response[i].CLO_Attainment.split(',').length));
                        temp2 += Math.round(temp / response[i].CLO_Attainment.split(',').length);
                    }
                    //------------------------------------------------------------------------------------------------------------------------------------------------
                    // this list is for side tables assessment averages
                    this.Assessment_Averages.push({
                        "Title": response[i].Title,
                        "Assignment_Average": Number(response[i].Assignment_Attainment),
                        "Quiz_Average": Number(response[i].Quiz_Attainment),
                        "Assessment_Average": Number(response[i].Assessment_Attainment),
                        "Journals_Average": Number(response[i].Journals_Attainment),
                        "Mids_Average": Number(response[i].Mids_Attainment),
                        "Finals_Average": Number(response[i].Finals_Attainment),
                        "Is_Course": Number(response[i].Is_Course)
                    });
                    this.Categories.push(response[i].Course_Alias);
                    this.Assignment_Or_Assessment.push(response[i].Is_Course ? response[i].Assignment_Attainment : response[i].Assessment_Attainment);
                    this.Quiz_Or_Journals.push(response[i].Is_Course ? response[i].Quiz_Attainment : response[i].Journals_Attainment);
                    this.Mids.push(response[i].Mids_Attainment);
                    this.Finals.push(response[i].Finals_Attainment);
                    // Calculating all assigned courses assessment averages
                    this.All_Assessment_Averages +=
                        Number(response[i].Assignment_Attainment) + Number(response[i].Quiz_Attainment) +
                            Number(response[i].Assessment_Attainment) + Number(response[i].Journals_Attainment) +
                            Number(response[i].Mids_Attainment) + Number(response[i].Finals_Attainment);
                    temp1 +=
                        Number(response[i].Assignment_Attainment) + Number(response[i].Quiz_Attainment) +
                            Number(response[i].Assessment_Attainment) + Number(response[i].Journals_Attainment) +
                            Number(response[i].Mids_Attainment) + Number(response[i].Finals_Attainment);
                    this.Assessment_Average.push(Math.round(temp1 / 4));
                    temp3 += Math.round(temp1 / 4);
                    this.All_Courses_CLOS_Attainment.push({
                        name: response[i].Course_Alias,
                        y: Math.round(temp / response[i].CLO_Attainment.split(',').length)
                    });
                    //--------------------------------------------------------------------------------------------------------------------------------------------------
                }
                //
                this.CLOS_Assessment_Comparison.push({
                    "name": 'CLOS Attainment',
                    "data": this.CLOS_Average
                }, {
                    "name": 'Assessment Attainment',
                    "data": this.Assessment_Average
                });
                this.Sum_Of_All_CLOS_Assessment_Attainment = Math.round((temp2 + temp3) / (this.CLOS_Average.length + this.Assessment_Average.length));
                // Calculating all assigned courses assessment averages for graph 1
                this.All_Assessment_Averages = Math.round(this.All_Assessment_Averages / (4 * response.length));
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                // Calculating all assigned courses CLOS averages for graph 2
                this.CLOS_Attainment = Math.round(this.Sum_Of_All_CLOS_Marks / this.All_Courses_CLOS_Count);
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                // Calculating all assigned courses assessment averages
                if (Is_Lab && Is_Course) {
                    this.Assessment_Averages_Graph_Data.push({
                        "name": 'Assignment/Assessment',
                        "data": this.Assignment_Or_Assessment
                    }, {
                        "name": 'Quizzez/Journals',
                        "data": this.Quiz_Or_Journals
                    }, {
                        "name": 'Mid Term',
                        "data": this.Mids
                    }, {
                        "name": 'Final Term',
                        "data": this.Finals
                    });
                }
                else if (Is_Lab) {
                    this.Assessment_Averages_Graph_Data.push({
                        "name": 'Assessment',
                        "data": this.Assignment_Or_Assessment
                    }, {
                        "name": 'Journals',
                        "data": this.Quiz_Or_Journals
                    }, {
                        "name": 'Mid Term',
                        "data": this.Mids
                    }, {
                        "name": 'Final Term',
                        "data": this.Finals
                    });
                }
                else if (Is_Course) {
                    this.Assessment_Averages_Graph_Data.push({
                        "name": 'Assignment',
                        "data": this.Assignment_Or_Assessment
                    }, {
                        "name": 'Quizzez',
                        "data": this.Quiz_Or_Journals
                    }, {
                        "name": 'Mid Term',
                        "data": this.Mids
                    }, {
                        "name": 'Final Term',
                        "data": this.Finals
                    });
                }
                //--------------------------------------------------------------------------------------------------------------------------------------------------
                this.CLOSAttainment();
                this.AssessmentAttainment();
                this.PassToFailRation();
                this.OverallCoursesProgress();
            }
            else {
                this.toastr.info("No courses assigned to you in selected semester", "Warning!");
                this.CLOSAttainment();
                this.AssessmentAttainment();
                this.PassToFailRation();
                this.OverallCoursesProgress();
            }
            this.ngxService.stop();
        }, error => {
            this.ngxService.stop();
            this.toastr.error("Internal server error occured while processing your request", "Error!");
        });
    }
};
DashboardMainComponent = __decorate([
    Component({
        selector: 'app-Dashboard-Main',
        templateUrl: './DashboardMain.component.html',
        styleUrls: ['./DashboardMain.component.css'],
    })
], DashboardMainComponent);
export { DashboardMainComponent };
//# sourceMappingURL=DashboardMain.component.js.map