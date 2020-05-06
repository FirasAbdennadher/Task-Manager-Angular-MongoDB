import { Component, OnInit } from '@angular/core';
import {UserService} from '../../core/services/user/user.service';
import { User } from '../../core/models/user';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  private user: User = new User(
      '',
      '',
      '',
      '',
      '',
      ''
  );
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  public submit() {

  }
}
