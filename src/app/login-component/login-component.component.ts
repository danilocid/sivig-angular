import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../services/users.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentComponent implements OnChanges {

  loginForm!: FormGroup;

  constructor(
    public userService: UsersService,
    private toastr: ToastrService,
    private titleService: Title,
    private fb: FormBuilder,

  ) {
    this.buildForm();
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  private buildForm() {
    this.loginForm = this.fb.group({
      mail: ['', [Validators.required, /* MyValidators.checkRut */]],
      formPassword: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle('Inicio de sesion');
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.login();
  }

  login() {
    const user = {
      email: this.loginForm.get('mail')!.value,
      password: this.loginForm.get('formPassword')!.value

    }
    this.userService.login(user)


  }
  ngOnDestroy(): void {
    this.userService.deleteToken
  }
  isValid(field: string) {
    return this.loginForm.controls[field].errors
      && this.loginForm.controls[field].touched
  }

}
