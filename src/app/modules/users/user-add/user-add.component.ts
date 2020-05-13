import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {User} from '../../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
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
        const id = this.activateRoute.snapshot.params.id;
        if (id) {
            this.id = id;
            this.userService.findById(this.id).subscribe(us => {
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
                this.router.navigateByUrl('users');
            }, err => {
                console.log(err);
            });
        } else {
            this.userService.add(this.user).subscribe(dt => {
                console.log(dt);
                this.router.navigateByUrl('users');
            }, err => {
                console.log(err);
            });
        }

    }
}
