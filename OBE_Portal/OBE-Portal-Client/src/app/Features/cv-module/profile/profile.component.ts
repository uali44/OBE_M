import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../Shared/Services/Global/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username: string;
  constructor() { }

  ngOnInit(): void {
    this.username = GlobalService.Name;
  }

}
