import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserAddComponent} from './user-add/user-add.component';
import {UserGridComponent} from './user-grid/user-grid.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { UsernameExistDirective } from './username-exist.directive';


@NgModule({
  declarations: [
      UsersComponent,
      UserDetailsComponent,
      UserListComponent,
      UserAddComponent,
      UserGridComponent,
      UsernameExistDirective
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ]
})
export class UsersModule { }
