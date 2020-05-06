import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Project} from '../../models/project';
import {User} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: Project[];
  constructor(private httpClient: HttpClient) {
  }
  public addProject(project) {
    return this.httpClient.post(`${environment.urlBackend}projects/`, project);
  }

  public DeleteProject(data) {
    return this.httpClient.delete( `${environment.urlBackend}projects/`+data);
  }

  public ModifProject(us,data) {
    return this.httpClient.patch(us,data);
  }

  public getAllProject(): Observable<Project[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}projects`)
        .pipe(map( result => result._embedded));
  }


  public getProject(strings){
    return this.httpClient.get(`${environment.urlBackend}`+strings );
  }


}
