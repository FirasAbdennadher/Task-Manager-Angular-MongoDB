import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models/user';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../../core/models/project';
import {ProjectService} from '../../../core/services/project/project.service';
import {UserService} from '../../../core/services/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-project-add',
    templateUrl: './project-add.component.html',
    styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
    private project: Project = new Project('', '', null, null);
    formGroup: FormGroup = this.formBuilder.group({
        title: ['', Validators.required],
        description: [''],
        manager: [''],
        developers: ['']
    });
    private usersManager: User[] = [];
    private usersDeveloper: User[] = [];
    private id: string;

    constructor(private projectService: ProjectService, private userService: UserService,
                private formBuilder: FormBuilder, private router: Router, private activateRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.userService.findAll().subscribe(data => {
            this.usersManager = data.filter(item => item.role === 'PROJECT_MANAGER');
            this.usersDeveloper = data.filter(item => item.role === 'DEVELOPER');
        }, err => {
            console.log(err);
        })

        const id = this.activateRoute.snapshot.params.id;
        if (id) {
            this.id = id;
            this.projectService.findById(this.id).subscribe(data => {
                this.project = data;
            }, err => {
                console.log(err);
            })
        }

    }
     formGroup=new FormGroup({
        title: new FormControl(),
        description: new FormControl(),
        manager: new FormControl(),
        developers: new FormControl()

    })

    public submit() {
        console.log('*******');
        console.log(this.project);
        if (this.id) {
            this.projectService.edit(this.id, this.project).subscribe(dt => {
                this.router.navigateByUrl('projects');
            }, err => {
                console.log(err);
            });

        } else {
            this.projectService.add(this.project).subscribe(dt => {
                this.router.navigateByUrl('projects');
            }, err => {
                console.log(err);
            });
        }
    }
}
