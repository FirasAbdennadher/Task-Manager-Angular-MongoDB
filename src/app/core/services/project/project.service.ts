import {Injectable} from '@angular/core';
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

    public add(project: Project): Observable<Project> {
        return this.httpClient.post<Project>(`${environment.urlBackend}projects/`, project);
    }


    public delete(id: string): Observable<any> {
        return this.httpClient.delete<any>(`${environment.urlBackend}projects/${id}`);
    }

    public edit(id: string, project: Project): Observable<Project> {
        return this.httpClient.patch<Project>(`${environment.urlBackend}projects/${id}`, project);
    }

    public findAll(): Observable<Project[]> {
        return this.httpClient.get<any>(`${environment.urlBackend}projects`)
            .pipe(map(result => result._embedded.projects));
    }

    public findById(id: string): Observable<Project> {
        return this.httpClient.get<Project>(`${environment.urlBackend}projects/${id}`);
    }

    public getDeveloperOfManagerProject(id: string): Observable<any> {
        return this.httpClient.get<any>(id);
    }


}
