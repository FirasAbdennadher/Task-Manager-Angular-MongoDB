import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        RouterModule,
        HttpClientModule,
        AppRoutingModule,
        // AgmCoreModule.forRoot({
        //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        // }),
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
