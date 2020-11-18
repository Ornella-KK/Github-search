import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component'
import { ProfileServiceService } from '../profile-http/profile-service.service';
import { User } from '../user';
import { Repository } from '../repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
