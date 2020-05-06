import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// import  { UserService } from './user/user.service';
import { UserService } from '../services/user/user.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private  UserServic: UserService, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {

    }
    /*
  this.http.get('http://localhost/mm/ProjetL/public/get_login/' + this.f.get('email').value + '/' + this.f.get('password').value).subscribe(
    data => {
  console.log(data);
   if (data.length !==0) {
      this.router.navigateByUrl('reclam');

    }

}*/

}
