import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from '../../core/models/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  private user: User = new User();

  constructor(private userService: UserService,private router:Router,private activateRoute:ActivatedRoute) {

  }
  current;

  ngOnInit() {
    this.userService.getUser('users/'+ atob(this.activateRoute.snapshot.params.idUser)).
    subscribe(us =>{
      this.user = us;
      this.current=us;
    },err=>{
      console.log(err);
    });
  }


  public updateUser(data){
    console.log("**********");
    console.log(this.current._links.self.href);
    this.userService.ModifUser(this.current._links.self.href,data).subscribe(users=>{
      console.log('****'+users);
      this.router.navigateByUrl('user-list');

    },err=>{
      console.log(err);
    })
  }
}
