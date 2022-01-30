import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './base-components/dashboard/dashboard.component';
import { ListUsuariosComponent } from './configuracion/usuarios/list-usuarios/list-usuarios.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "login", component: LoginComponentComponent, pathMatch: "full" },
  { path: "configuracion/usuarios", component: ListUsuariosComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
