import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import {User} from '../../core/models/user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[] = [];
  private displayedColumns: string[] = ['username', 'lastName', 'firstName', 'email', 'role', 'detail', 'update', 'delete'];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

}
