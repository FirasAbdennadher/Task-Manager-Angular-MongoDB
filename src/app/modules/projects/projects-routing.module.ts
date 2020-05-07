import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectAddComponent} from './project-add/project-add.component';

const routes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'add', component: ProjectAddComponent }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
