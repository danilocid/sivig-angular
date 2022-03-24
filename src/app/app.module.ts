import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponentComponent } from './base-components/header-component/header-component.component';
import { SidebarComponentComponent } from './base-components/sidebar-component/sidebar-component.component';
import { ListUsuariosComponent } from './configuracion/usuarios/list-usuarios/list-usuarios.component';
import { DashboardComponent } from './base-components/dashboard/dashboard.component';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponentComponent,
    HeaderComponentComponent,
    SidebarComponentComponent,
    ListUsuariosComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    AngularFireAnalyticsModule
  ],
  providers: [CookieService],
  bootstrap: [HomeComponentComponent]
})
export class AppModule { }
