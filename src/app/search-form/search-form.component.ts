import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { ProfileServiceService } from '../profile-http/profile-service.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchTerm: string
  @Output() searchProf = new EventEmitter<any>();

  searchUser() {
    this.searchProf.emit(this.searchTerm)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
