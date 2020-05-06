import {Component, OnInit} from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import {User} from '../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    private user: User = new User(
        '',
        '',
        '',
        '',
        '',
        '',
    );
    private id: string;

    constructor(private userService: UserService, private router: Router, private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = atob(this.activateRoute.snapshot.params.idUser);
        if (id) {
            this.id = id;
            this.userService.findById(atob(this.activateRoute.snapshot.params.idUser)).subscribe(us => {
                this.user = us;
            }, err => {
                console.log(err);
            });
        }
    }


    public submit() {
        if (this.id) {
            this.userService.edit(this.id, this.user).subscribe(dt => {
                console.log(dt);
                this.router.navigateByUrl('user-list');
            }, err => {
                console.log(err);
            });
        } else {
            this.userService.add(this.user).subscribe(dt => {
                console.log(dt);
                this.router.navigateByUrl('user-list');
            }, err => {
                console.log(err);
            });
        }

    }
}
