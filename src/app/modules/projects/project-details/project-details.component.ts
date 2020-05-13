import {Component, OnInit} from '@angular/core';
import {User} from '../../../core/models';
import {Project} from '../../../core/models/project';
import {ProjectService} from '../../../core/services/project/project.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../core/services/user/user.service';

@Component({
    selector: 'app-project-details',
    templateUrl: './project-details.component.html',
    styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
    private project: Project;

    constructor(private projetService: ProjectService, private usersService: UserService, private activateRoute: ActivatedRoute) {
    }

    private usersManager: User;
    private usersDeveloper: User[] = [];
    private id: string;

    ngOnInit(): void {
        this.projetService.findById(this.activateRoute.snapshot.params.id).subscribe(
            dt => {
                this.project = dt;
                this.projetService.getDeveloperOfManagerProject(dt._links.manager.href).subscribe(usMan => {
                    this.usersManager = usMan;
                    console.log(usMan);
                    //console.log(usMan);
                });

                this.projetService.getDeveloperOfManagerProject(dt._links.developers.href).subscribe(usPro => {
                    this.usersDeveloper = usPro._embedded.users;
                }, err => {
                    console.log(err);
                })
            }
        )
    }

}
