import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserGridComponent} from './user-grid/user-grid.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserAddComponent} from './user-add/user-add.component';

const routes: Routes = [
    {path: '', component: UserListComponent},
    {path: 'grid', component: UserGridComponent},
    {path: 'add', component: UserAddComponent},
    {path: 'details/:id', component: UserDetailsComponent},
    {path: 'edit/:id', component: UserAddComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
