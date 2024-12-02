import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../Shared/Services/Global/global.service';
import { InterconnectedService } from '../../Shared/Services/Global/interconnected.service';
declare const $: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  Is_Sub_Active: boolean = false;
  Tab_Title: string = "";
  constructor(private _InterconnectedService: InterconnectedService) {
    this.Is_Sub_Active = GlobalService.Report_Sub_Tab;
  }
  ngOnInit() {
    this.Tab_Title = "";
    this.Is_Sub_Active = false;
    $("#HeaderSemesterDropdown").addClass('hidden');
  }
  ShowTab(Title) {
    this.Tab_Title = Title;
    $("#SettingsMainTab").removeClass('active');
    $("#SettingsSubTab").addClass('active');
    this.Is_Sub_Active = true;
  }
  closeTab() {
    this.Is_Sub_Active = false;
    $("#SettingsMainTab").addClass('active');
    this._InterconnectedService.CloseTriggeredTab("");
  }

}
