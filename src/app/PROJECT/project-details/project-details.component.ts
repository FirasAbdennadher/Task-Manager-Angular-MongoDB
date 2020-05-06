import { Component, OnInit } from '@angular/core';
import {User} from '../../core/models';
import {Project} from '../../core/models/project';
import {ProjectService} from '../../core/services/project/project.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  private project: Project = new Project();
  private usersManager: User;
  private usersDeveloper: User[] = [];

  constructor(private projectService: ProjectService, public activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.projectService.getProject(atob(this.activateRoute.snapshot.params.idProject)).subscribe(
        dt => {
          this.project = dt;
          this.projectService.getDeveloperOfManagerProject(dt._links.manager.href).subscribe(usMan => {
            this.usersManager = usMan;
            console.log(usMan);
            //console.log(usMan);
          });

          this.projectService.getDeveloperOfManagerProject(dt._links.developers.href).subscribe(usPro => {
            this.usersDeveloper = usPro._embedded.users;
            // console.log(usPro._embedded.users);
          }, err => {
            console.log(err);
          })
        }
    )
  }
}

