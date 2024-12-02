import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../Services/Global/global.service';
declare const $: any;
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  Is_Permission_Reports_Side_Bar: boolean = false;
  Is_Permission_Setting_Side_Bar: boolean = false;
  Is_Permission_Indirect_Assessment_Side_Bar: boolean = false;
  IsStudent: boolean = false;
  constructor(private router: Router) {
    if (GlobalService.IsStudent == 1) {
      this.Is_Permission_Reports_Side_Bar = false;
      this.Is_Permission_Setting_Side_Bar = false;
      this.Is_Permission_Indirect_Assessment_Side_Bar= false;
      
      this.IsStudent = true;
    } else {
      this.IsStudent = false;
      this.Is_Permission_Reports_Side_Bar = GlobalService.Permissions.indexOf("Reports_Side_Bar") >= 0 ? true : false;
      this.Is_Permission_Setting_Side_Bar = GlobalService.Permissions.indexOf("Setting_Side_Bar") >= 0 ? true : false;
      this.Is_Permission_Indirect_Assessment_Side_Bar = GlobalService.Permissions.indexOf("Indirect_Assessment") >= 0 ? true : false;
      
    }
    
  }

  ngOnInit() {
    
  }

}
