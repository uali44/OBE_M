import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StudentService } from '../../../Services/Student/student.service';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
declare const $: any;

@Component({
  selector: 'app-student-main',
  templateUrl: './student-main.component.html',
  styleUrls: ['./student-main.component.css']
})
export class StudentMainComponent implements OnInit {
  PLOSAveragesGraphData: any;
  PLOSAttainment: any;
  PLOSDetails: any;
  AverageAttainment: any;
  Summary: any;
  PLOPassingCriteria: any;
  PLO1: any;
  PLO2: any;
  PLO3: any;
  PLO4: any;
  PLO5: any;
  PLO6: any;
  PLO7: any;
  PLO8: any;
  PLO9: any;
  PLO10: any;
  PLO11: any;
  PLO12: any;
  constructor(
    private toastr: ToastrService,
    private ngxService: NgxUiLoaderService,
    private _StudentService: StudentService
  ) {}
  ngOnInit(): void {
    this.Summary = {};
    this.AverageAttainment = 0;
    $("#HeaderSemesterDropdown").addClass('hidden');
    this.LoadStudentDashboard(); 
  }
  LoadStudentDashboard() {
    this.ngxService.start();
    this._StudentService.GetPLOsResultForStudent(GlobalService.StudentID).subscribe(
        response => {
          this.PLO1 = 0;
          this.PLO2 = 0;
          this.PLO3 = 0;
          this.PLO4 = 0;
          this.PLO5 = 0;
          this.PLO6 = 0;
          this.PLO7 = 0;
          this.PLO8 = 0;
          this.PLO9 = 0;
          this.PLO10 = 0;
          this.PLO11 = 0;
          this.PLO12 = 0;
        if (response != null) {
            this.PLOSAttainment = [];
            this.PLOSAveragesGraphData = [];
            this.Summary = {};
            this.Summary = response.StudentSummaryResponse;
            this.PLOPassingCriteria = this.Summary.PLOPassingCriteria;
            this.PLOSAttainment = response.StudentPLOsAnalysisResult;
            this.PLO1 = this.PLOSAttainment.PLO_One_Attainment;
            this.PLO2 = this.PLOSAttainment.PLO_Two_Attainment;
            this.PLO3 = this.PLOSAttainment.PLO_Three_Attainment;
            this.PLO4 = this.PLOSAttainment.PLO_Four_Attainment;
            this.PLO5 = this.PLOSAttainment.PLO_Five_Attainment;
            this.PLO6 = this.PLOSAttainment.PLO_Six_Attainment;
            this.PLO7 = this.PLOSAttainment.PLO_Seven_Attainment;
            this.PLO8 = this.PLOSAttainment.PLO_Eight_Attainment;
            this.PLO9 = this.PLOSAttainment.PLO_Nine_Attainment;
            this.PLO10 = this.PLOSAttainment.PLO_Ten_Attainment;
            this.PLO11 = this.PLOSAttainment.PLO_Eleven_Attainment;
            this.PLO12 = this.PLOSAttainment.PLO_Twelth_Attainment;

            this.PLOSAveragesGraphData.push({
              "name": 'Pass',
              "data": [
                this.PLOSAttainment.PLO_One_Attainment,
                this.PLOSAttainment.PLO_Two_Attainment,
                this.PLOSAttainment.PLO_Three_Attainment,
                this.PLOSAttainment.PLO_Four_Attainment,
                this.PLOSAttainment.PLO_Five_Attainment,
                this.PLOSAttainment.PLO_Six_Attainment,
                this.PLOSAttainment.PLO_Seven_Attainment,
                this.PLOSAttainment.PLO_Eight_Attainment,
                this.PLOSAttainment.PLO_Nine_Attainment,
                this.PLOSAttainment.PLO_Ten_Attainment,
                this.PLOSAttainment.PLO_Eleven_Attainment,
                this.PLOSAttainment.PLO_Twelth_Attainment]
            });
            this.PLOSAveragesGraphData.push({
              "name": 'Fail',
              "data": [
                100 - this.PLOSAttainment.PLO_One_Attainment,
                100 - this.PLOSAttainment.PLO_Two_Attainment,
                100 - this.PLOSAttainment.PLO_Three_Attainment,
                100 - this.PLOSAttainment.PLO_Four_Attainment,
                100 - this.PLOSAttainment.PLO_Five_Attainment,
                100 - this.PLOSAttainment.PLO_Six_Attainment,
                100 - this.PLOSAttainment.PLO_Seven_Attainment,
                100 - this.PLOSAttainment.PLO_Eight_Attainment,
                100 - this.PLOSAttainment.PLO_Nine_Attainment,
                100 - this.PLOSAttainment.PLO_Ten_Attainment,
                100 - this.PLOSAttainment.PLO_Eleven_Attainment,
                100 - this.PLOSAttainment.PLO_Twelth_Attainment]
            });
            this.AverageAttainment = Math.round(
              (
                this.PLOSAttainment.PLO_One_Attainment + this.PLOSAttainment.PLO_Two_Attainment + this.PLOSAttainment.PLO_Three_Attainment +
                this.PLOSAttainment.PLO_Four_Attainment + this.PLOSAttainment.PLO_Five_Attainment + this.PLOSAttainment.PLO_Six_Attainment +
                this.PLOSAttainment.PLO_Seven_Attainment + this.PLOSAttainment.PLO_Eight_Attainment + this.PLOSAttainment.PLO_Nine_Attainment +
                this.PLOSAttainment.PLO_Ten_Attainment + this.PLOSAttainment.PLO_Eleven_Attainment + this.PLOSAttainment.PLO_Twelth_Attainment
              ) / 12);


            this.PLOSDetails = [];
            var TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 1).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO1', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 2).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO2', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 3).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO3', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 4).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO4', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 5).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO5', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 6).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO6', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 7).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO7', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 8).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO8', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 9).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO9', data: CLOResultTemp });


            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 10).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO10', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 11).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO11', data: CLOResultTemp });

            TempPLOSDetails = [];
            TempPLOSDetails = response.AllPLOSStudentResponse.filter(x => x.MappedPLO == 12).map((element) => ({ CLOResult: element.CLOResult }));
            var CLOResultTemp = [];
            for (var i = 0; i < TempPLOSDetails.length; i++) {
              CLOResultTemp.push(TempPLOSDetails[i].CLOResult);
            }
            this.PLOSDetails.push({ name: 'PLO12', data: CLOResultTemp });

    
            this.PLOSAttainmentGraph();
            this.PLOSAttainmentDetailsGraph();
        }
        this.ngxService.stop();

       
        },
        error => {
          this.ngxService.stop();
          this.toastr.error("Internal server error occured while processing your request", "Error!")
        });
  }
  PLOSAttainmentGraph() {
    $('#PLOSAttainment').highcharts({
      chart: {
        type: 'column'
      },
      colors: ['#0ca918', '#d9534f', '#999', '#0864a6', '#727272'],
      title: {
        text: ''
      },
      xAxis: {
        categories: ['PLO1', 'PLO2', 'PLO3', 'PLO4', 'PLO5', 'PLO6', 'PLO7', 'PLO8', 'PLO9', 'PLO10', 'PLO11', 'PLO12'],
        crosshair: true
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'PLOS Attainment'
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
      series: this.PLOSAveragesGraphData
    });
  }

  PLOSAttainmentDetailsGraph() {
    $('#PLOSDetailsAttainment').highcharts({
      chart: {
        type: 'line'
      },
      colors: ['#004170', '#6dafe1', '#999', '#0864a6', '#727272','#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
        '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
      title: {
        text: ''
      },
      xAxis: {
        min: 0,
        //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      credits: {
        enabled: false
      },
      yAxis: {
        min: 0,
        max:100,
        title: {
          text: 'PLOS Att. Details'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: this.PLOSDetails
    });
    this.ngxService.stop();
  }
}
