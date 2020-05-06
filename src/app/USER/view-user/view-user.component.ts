import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import {User} from '../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  private users: User[] = [];
  private displayedColumns: string[] = ['username', 'lastName', 'firstName', 'email', 'role'];

  constructor(private userService: UserService, public activateRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.userService.findAll().subscribe(users => this.users = users);
  }
  public onDeletetUser(user) {
    if(window.confirm('Voulez vous supprimer ?')) {

      this.userService.delete(user.id).subscribe(data => {
        this.userService.findAll().subscribe(users => this.users = users);
      }, err => {
        console.log(err);
      });
      //this.router.navigateByUrl('/users/delete/' +btoa(user.id));
    }
  }

  public onModifUser(user) {
    this.router.navigateByUrl('user-update/' + btoa(user.id));


  }
}
