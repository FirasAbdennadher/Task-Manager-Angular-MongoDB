import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models';
import {Project} from '../../../core/models/project';
import {ProjectService} from '../../../core/services/project/project.service';
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

    }
}

