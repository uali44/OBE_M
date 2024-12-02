import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.activeClass('d');
    $("#HeaderSemesterDropdown").removeClass('hidden');
  }
  activeClass(value:any){
    if (value =='d')
    {
      $('#Assigned-Courses-Active').removeClass('active');
      $('#Dashboard-Active').addClass('active');
    }
    else if(value =='a')
    {
      $('#Assigned-Courses-Active').addClass('active');
      $('#Dashboard-Active').removeClass('active');
    }
    else
    {
      $('#Assigned-Courses-Active').removeClass('active');
      $('#Dashboard-Active').addClass('active');
      this.router.navigate(["/dashboard/analysis"]);
    }
      
  }
}
