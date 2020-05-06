import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './USER/user-profile/user-profile.component';
import { TypographyComponent } from './typography/typography.component';


import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserListComponent } from './USER/user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import { UserDetailsComponent } from './USER/user-details/user-details.component';
import { UserUpdateComponent } from './USER/user-update/user-update.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ProjectUpdateComponent } from './PROJECT/project-update/project-update.component';
import { ProjectAddComponent } from './PROJECT/project-add/project-add.component';
import { ProjectListComponent } from './PROJECT/project-list/project-list.component';
import { ProjectDetailsComponent } from './PROJECT/project-details/project-details.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    UserListComponent,
    UserDetailsComponent,
    UserUpdateComponent,
    ProjectUpdateComponent,
    ProjectAddComponent,
    ProjectListComponent,
    ProjectDetailsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
