import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { Repository } from './repository'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: User

  userRepo: Repository
  constructor(private http: HttpClient) {
    this.userProfile = new User('', '', 0, 0, '', '' );

  }

  searchUser(user) {
    interface Responsee {
      login: string,
      avatar_url: string,
      followers: number,
      following: number,
      public_repos: string,
      html_url : any


    }

    let mainUrl = environment.API_URL + user + '?access_token=' + environment.API_KEY;
    let promise = new Promise((resolve, reject) => {
      this.http.get<Responsee>(mainUrl).toPromise().then(res => {
        this.userProfile = res;
        resolve()

      }, error => {
        reject();
      })

    });
    return promise
  }

  displayRepos(user) {
    interface apiResponse {
      name: string,
      description: string,
      

    }

    let repoUrl = environment.API_URL + user + '/repos' + '?access_token=' + environment.API_KEY;
    let promise = new Promise((resolve, reject) => {
      this.http.get<apiResponse>(repoUrl).toPromise().then(response => {
        this.userRepo = response;
        resolve()

      }, error => {
        reject();
      })

    });
    return promise
  }


}

