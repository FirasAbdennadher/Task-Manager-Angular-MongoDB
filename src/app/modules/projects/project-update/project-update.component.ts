import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Project} from '../../../core/models/project';
import {ProjectService} from '../../../core/services/project/project.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-project-update',
    templateUrl: './project-update.component.html',
    styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {


    constructor() {
    }

    ngOnInit(): void {
    }


}
