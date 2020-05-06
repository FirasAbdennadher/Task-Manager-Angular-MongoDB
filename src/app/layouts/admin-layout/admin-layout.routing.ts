import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../USER/user-profile/user-profile.component';
import { UserListComponent } from '../../USER/user-list/user-list.component';
import { UserDetailsComponent } from '../../USER/user-details/user-details.component';
import { ProjectAddComponent } from '../../PROJECT/project-add/project-add.component';
import { ProjectListComponent } from '../../PROJECT/project-list/project-list.component';
import { ProjectUpdateComponent } from '../../PROJECT/project-update/project-update.component';
import { UserUpdateComponent } from '../../USER/user-update/user-update.component';
import { TypographyComponent } from '../../typography/typography.component';

import {ProjectDetailsComponent} from '../../PROJECT/project-details/project-details.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'project-add',   component: ProjectAddComponent },
    { path: 'project-list',   component: ProjectListComponent },
    { path: 'project-update/:idProject',   component: ProjectUpdateComponent },
    { path: 'project-details/:idProject',   component: ProjectDetailsComponent },
    { path: 'user-list',   component: UserListComponent },
    { path: 'user-update/:idUser',   component: UserUpdateComponent },
    { path: 'user-details/:idUser',   component: UserDetailsComponent },
    { path: 'typography',     component: TypographyComponent },


];
