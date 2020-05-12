import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectAddComponent} from './project-add/project-add.component';
import {ProjectDetailsComponent} from './project-details/project-details.component';

const routes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'add', component: ProjectAddComponent },
    { path: 'details/:id', component: ProjectDetailsComponent },
    { path: 'edit/:id', component: ProjectAddComponent }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
