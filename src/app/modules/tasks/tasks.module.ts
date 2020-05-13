import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskAddComponent } from './task-add/task-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TasksComponent, TaskListComponent, TaskDetailsComponent, TaskAddComponent],
    imports: [
        CommonModule,
        TasksRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        MatSelectModule,
        HttpClientModule,
        MatIconModule,
        MatCardModule
    ]
})
export class TasksModule { }
