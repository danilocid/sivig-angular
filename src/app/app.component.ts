import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './services/users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sivg-angular';
  constructor(
    public userService: UsersService,
    private router: Router
  ) { }
  ngOnInit(): void {
    console.log('inicia componente principal');
    if(this.userService.getToken()){
      console.log('logeado');
    }else{
      console.log('no logeado')
      this.router.navigate(['login'])
    }
  }
}

