import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html'
})
export class LoginComponentComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    public userService: UsersService,
    private toastr: ToastrService,
    private titleService: Title

  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Inicio de sesion');
  }

  login() {
    if (this.email == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error', {
        positionClass: 'toast-top-right'
      });

    } else {
      const user = { email: this.email, password: this.password };
      this.userService.login(user);
    }



  }
  ngOnDestroy(): void {
    this.userService.deleteToken
  }

}
