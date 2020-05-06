import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Project} from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project: Project[];
  constructor(private httpClient: HttpClient) {
  }
  public addProject(project: Project) {
    return this.httpClient.post(`${environment.urlBackend}projects/`, project);
  }
  public updateProject(project: Project) {
    const index = this.project.findIndex( curent => curent.title === project.title);
    this.project[index] = Object.assign(this.project[index], project);
  }
  public deleteProject(title: string) {
    const index = this.project.findIndex( curent => curent.title === title);
    const deleteItem = this.project.splice(index, 1);
  }

  public findProject(title: string) {
    const ser = this.project.find( curent => curent.title === title);
    return Object.assign(new Project('',
      '',
      null,
      [],
    ), ser);
  }
  public getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<any>(`${environment.urlBackend}projects`)
      .pipe(map( result => result._embedded.projects));
  }

}
