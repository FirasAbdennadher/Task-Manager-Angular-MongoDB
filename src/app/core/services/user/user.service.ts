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
  public addUser(user: User) {
    return this.httpClient.post(`${environment.urlBackend}users/`, user);
  }
  public updateUser(user: User) {
    const index = this.user.findIndex( curent => curent.username === user.username);
    this.user[index] = Object.assign(this.user[index], user);
  }
  public deleteUser(username: string) {
    const index = this.user.findIndex( curent => curent.username === username);
    const deleteItem = this.user.splice(index, 1);
  }
  public findUser(username: string ) {
    const ser = this.user.find( curent => curent.username === username);
    return Object.assign(new User('',
      '', '', '', '', ''), ser);

  }
  public getAllUsers(): Observable<User[]> {
     return this.httpClient.get<any>(`${environment.urlBackend}users`)
      .pipe(map( result => result._embedded.users));
  }

}
