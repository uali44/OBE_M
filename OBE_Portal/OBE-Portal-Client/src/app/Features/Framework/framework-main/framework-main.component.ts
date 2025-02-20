import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { InterconnectedService } from '../../../Shared/Services/Global/interconnected.service';
import { FrameworkComponent } from '../framework.component';

declare const $: any;
@Component({
  selector: 'app-framework-main',
  templateUrl: './framework-main.component.html',
  styleUrls: ['./framework-main.component.css']
})
export class FrameworkMainComponent implements OnInit {
  Intake: number;
  constructor(
    private FrameworkComponent: FrameworkComponent,
    private InterconnectedService: InterconnectedService,
    private ngxService: NgxUiLoaderService,

  ) { }

  ngOnInit() {
    this.InterconnectedService.CloseTab.subscribe(search => {
      this.CloseTabContent();
    });
  }

  receiveData(data: number) {
    this.Intake = data; // Update the parent component's variable with the data

  
  }

  loadTab(Title) {
    $("#Content").removeClass('dashboard-bg');
    this.FrameworkComponent.ShowTab(Title);
    GlobalService.Report_Sub_Tab = true;
    $("#settings-tab").removeClass('active');
    $("#Any-tab").addClass('active');
  }
  CloseTabContent() {
    $("#Content").addClass('dashboard-bg');
    $("#Any-tab").removeClass('active');
    $("#settings-tab").addClass('active');
    $("#SettingsMainTab").addClass('active');
  }

}
