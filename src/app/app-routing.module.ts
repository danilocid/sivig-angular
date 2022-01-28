import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  { path: "", component: HomeComponentComponent, pathMatch: "full" },
  { path: "login", component: LoginComponentComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
