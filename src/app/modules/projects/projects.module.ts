import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectUpdateComponent} from './project-update/project-update.component';
import {UsersRoutingModule} from '../users/users-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
      ProjectsComponent,
      ProjectAddComponent,
      ProjectDetailsComponent,
      ProjectListComponent,
      ProjectUpdateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MatTableModule,
      MatInputModule,
      MatSelectModule,
      HttpClientModule
  ]
})
export class ProjectsModule { }
