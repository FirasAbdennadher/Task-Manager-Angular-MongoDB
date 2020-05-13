import {Injectable} from '@angular/core';
import {User} from '../../models/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    public add(user: User): Observable<User> {
        return this.httpClient.post<User>(`${environment.urlBackend}users/`, user);
    }

    public delete(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${environment.urlBackend}users/${id}`);
    }

    public edit(id: string, user: User): Observable<User> {
        return this.httpClient.patch<User>(`${environment.urlBackend}users/${id}`, user);
    }


    public findAll(): Observable<User[]> {
        return this.httpClient.get<any>(`${environment.urlBackend}users`)
            .pipe(map(result => result._embedded.users));
    }


    public findById(id: string): Observable<User>  {
        return this.httpClient.get<User>(`${environment.urlBackend}users/${id}` );
    }

    public existsByUsername(username: string): Observable<boolean>  {
        const params = new HttpParams().append('username', username);
        return this.httpClient.get<boolean>(`${environment.urlBackend}users/search/usernameExists`,
            {params : params});
    }


}
