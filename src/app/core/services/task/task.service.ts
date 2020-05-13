import { Injectable } from '@angular/core';
import {Task} from '../../models/task';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }


  public add(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${environment.urlBackend}tasks/`, task);
  }

  public delete(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.urlBackend}tasks/${id}`);
  }

  public edit(id: string, task: Task): Observable<Task> {
    return this.httpClient.patch<Task>(`${environment.urlBackend}tasks/${id}`, task);
  }


  public findAll(): Observable<Task[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}tasks`)
        .pipe(map(result => result._embedded.tasks));
  }


  public findById(id: string): Observable<Task>  {
    return this.httpClient.get<Task>(`${environment.urlBackend}tasks/${id}` );
  }
}
