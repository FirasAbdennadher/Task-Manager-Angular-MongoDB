import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../../core/models/project';
import {ProjectService} from '../../../core/services/project/project.service';
import {UserService} from '../../../core/services/user/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-project-add',
    templateUrl: './project-add.component.html',
    styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
    private project: Project;
    formGroup: FormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        description: [''],
        manager: [''],
        developers: ['']
    });
    private usersManager: User[] = [];
    private usersDeveloper: User[] = [];

    constructor(private projectService: ProjectService, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
        this.userService.findAll().subscribe(data => {
            this.usersManager = data.filter(item => item.role === 'PROJECT_MANAGER');
            this.usersDeveloper = data.filter(item => item.role === 'DEVELOPER');

        }, err => {
            console.log(err);
        })
    }

    public submit(data) {
        this.projectService.addProject(data).subscribe(dt => {
            console.log(data);
            this.router.navigateByUrl('project-list');
        }, err => {
            console.log(err);
        });
    }
}
