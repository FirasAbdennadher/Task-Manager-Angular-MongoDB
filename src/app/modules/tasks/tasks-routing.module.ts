import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'add', component: TaskAddComponent },
    { path: 'details', component: TaskDetailsComponent },
    { path: 'edit/:id', component: TaskListComponent }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
