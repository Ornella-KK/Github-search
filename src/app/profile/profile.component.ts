import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userProfile: User
  userRepo: Repository

  constructor(private profileService: ProfileService) {
 
  }

  searchUser(user) {

    this.profileService.searchUser(user).then((done) => {
      this.userProfile = this.profileService.userProfile;
    },
      (error) => {
        console.log(error)
      }
    )

    this.profileService.displayRepos(user).then((done) => {
      this.userRepo = this.profileService.userRepo;
    },
      (error) => {
        console.log(error)
      }
    )

  }

  ngOnInit(): void {

    this.searchUser('Ornella-KK');
  }
}
