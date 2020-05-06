import { Component, OnInit } from '@angular/core';
import {Project} from '../../core/models/project';
import {ProjectService} from '../../core/services/project/project.service';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  private projects: Project[] = [];
  private displayedColumns: string[] = ['title', 'description', 'managerName', 'developer', 'detail', 'update', 'delete'];
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getAllProject().subscribe(projects => this.projects = projects);
  }
}
