import {Component, OnInit} from '@angular/core';
import {Project} from '../../../core/models/project';
import {ProjectService} from '../../../core/services/project/project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    private projects: Project[] = [];
    private displayedColumns: string[] = ['title', 'description', 'managerName', 'developer', 'detail', 'update', 'delete'];

    constructor(private projectService: ProjectService, public activateRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.projectService.findAll().subscribe(projects => {
            this.projects = projects;
        }, err => {
            console.log(err);
        })
    }


    public onDeletetProject(project) {
        if (window.confirm('Voulez vous supprimer ?')) {

            this.projectService.delete(project.id).subscribe(data => {
                this.projectService.findAll().subscribe(projects => this.projects = projects);
            }, err => {
                console.log(err);
            });
        }
    }
}
