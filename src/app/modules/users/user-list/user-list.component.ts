import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {User} from '../../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    private users: User[] = [];

    private displayedColumns: string[] = ['username', 'lastName', 'firstName', 'email', 'role', 'modifier', 'supprimer', 'details'];

    constructor(private userService: UserService, public activateRoute: ActivatedRoute, private router: Router) {


    }

    ngOnInit() {
        this.userService.findAll().subscribe(users => this.users = users);
    }

    public onDeletetUser(user) {
        if (window.confirm('Voulez vous supprimer ?')) {
            this.userService.delete(user.id).subscribe(data => {
                this.userService.findAll().subscribe(users => this.users = users);
            }, err => {
                console.log(err);
            });
        }
    }


}
