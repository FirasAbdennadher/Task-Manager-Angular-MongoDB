import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import {User} from '../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[] = [];
  private id: number;
  /*private displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];*/

  private displayedColumns: string[] = ['username', 'lastName', 'firstName', 'email', 'role', 'modifier', 'supprimer', 'details'];

  constructor(private userService: UserService, public activateRoute: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }


  public onDeletetUser(user) {
    if(window.confirm('Voulez vous supprimer ?')) {

      this.userService.DeleteUser(user.id).subscribe(data => {
        this.userService.getAllUsers().subscribe(users => this.users = users);
      }, err => {
        console.log(err);
      });
      //this.router.navigateByUrl('/users/delete/' +btoa(user.id));
    }
  }

  public onModifUser(user) {
    this.router.navigateByUrl('user-update/' + btoa(user.id));


  }

  public onGetUser(user) {

    this.router.navigateByUrl('user-details/' + btoa(user.id));
    // console.log(user._links.self.href);
    // this.userService.getUser(user._links.self.href);//.
    /*  subscribe(data=>{
        this.user=data;
        console.log(user);

      },err=>{
        console.log(err);
      });*/
  }
}
