import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from '../../core/models/user';
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
      ''
  );
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  public submit() {
    this.userService.addUser(this.user).subscribe();
  }
}
