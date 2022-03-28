import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gatekeeper } from 'gatekeeper-client-sdk';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public user: any = null;

  id: string = '';
  password: string = '';
  nombre: string = '';
  createdAt: Date = null;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private firestore: AngularFirestore
  ) {}

  async loginByAuth({ email, password }) {
    try {
      this.firestore
        .collection('usuarios')
        .snapshotChanges()
        .subscribe((data) => {
          data.forEach((element: any) => {
            if (email == element.payload.doc.data().mail) {
              console.log('entra');
              this.user = element.payload.doc.data();
              this.id = element.payload.doc.id;
              this.password = element.payload.doc.data().password;
              this.nombre = element.payload.doc.data().nombre;
              this.createdAt = element.payload.doc.data().createdAt;
            }
          });
          console.log(this.id + ' - ' + this.nombre + ' - ' + this.password);

          if (password == this.password) {
            console.log('logeado');
            this.toastr.success('Usuario logeado', 'Exito', {
              positionClass: 'toast-top-right',
            });
            localStorage.setItem('token', this.id);
            localStorage.setItem('nombre', this.nombre);
            localStorage.setItem('mail', email);
            localStorage.setItem('createdAt', this.createdAt.toString());

            this.router.navigate(['/']);
          } else {
            if (password != this.password) {
              console.log('contraseña equivocada');
              this.toastr.error('usuario y/o contraseña erroneos', 'error', {
                positionClass: 'toast-top-right',
              });
            }
          }
        });
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async getProfile() {
    await this.getObjectById(localStorage.getItem('token')).subscribe((i) => {
      console.log(i);
      this.user = i;
    });
    console.log(this.user);
    console.log('getProfile');
  }
  getObjectById(id) {
    return this.firestore.collection('usuarios').doc(id).valueChanges();
  }

  logout() {
    localStorage.clear();
    this.user = null;
    this.router.navigate(['/login']);
  }
}
