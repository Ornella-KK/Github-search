import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
