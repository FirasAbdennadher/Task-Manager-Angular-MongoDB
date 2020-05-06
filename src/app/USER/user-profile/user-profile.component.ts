import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from '../../core/models/user';
import {Router} from '@angular/router';

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
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit() {
  }
  public submit(data) {
    this.userService.addUser(data).subscribe(dt=>{
      console.log(dt);
      this.router.navigateByUrl('user-list');
    },err=>{
      console.log(err);
    });
  }
}
