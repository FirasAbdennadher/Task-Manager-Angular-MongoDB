import { Injectable } from '@angular/core';
import {User} from '../../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User[];
  constructor(private httpClient: HttpClient) {
  }
  public addUser(user) {
    return this.httpClient.post(`${environment.urlBackend}users/`, user);
  }

  public DeleteUser(data) {
    return this.httpClient.delete( `${environment.urlBackend}users/`+data);
  }

  public ModifUser(us,data) {
    return this.httpClient.patch(us,data);
  }


  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}users`)
        .pipe(map( result => result._embedded.users));
  }


  public getUser(strings){
    return this.httpClient.get(`${environment.urlBackend}`+strings );
  }


}
