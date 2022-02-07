import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usuarios: any[] = [];
  id: string = '';
  nombre: string = '';
  password: string = '';
  constructor(
    private cookies: CookieService,
    private router: Router,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
  ) { }

  login(user: any) {
    this.id = '';
    this.password = '';
    this.nombre = '';

    console.log(user);
    // this.getIdUser(user.email);
    this.firestore.collection('usuarios').snapshotChanges().subscribe(data => {
      data.forEach((element: any) => {

        if (user.email == element.payload.doc.data().mail) {
          console.log('entra');
          this.id = element.payload.doc.id
          this.password = element.payload.doc.data().password;
          this.nombre = element.payload.doc.data().nombre;
        }
      });
      console.log(this.id + ' - ' + this.nombre + ' - ' + this.password);


      if (user.password == this.password) {
        console.log('logeado');
        this.toastr.success('Usuario logeado', 'Exito', {
          positionClass: 'toast-top-right'
        });
        this.setToken(this.id);
        this.router.navigate(['/'])
      } else {
        if (user.password != this.password) {
          console.log('contraseña equivocada');
          this.toastr.error('usuario y/o contraseña erroneos', 'error', {
            positionClass: 'toast-top-right'
          });
        }

      }
    });

  }
  CheckLogin() {

    console.log('inicia componente principal');
    if (this.getToken()) {
      console.log('logeado');
    } else {
      console.log('no logeado')
      this.router.navigate(['login'])

    }
  }
  setToken(id: string) {
    this.cookies.set("token", id);
  }
  getToken() {
    return this.cookies.get("token");
  }
  deleteToken() {
    this.cookies.deleteAll();
  }

  getIdUser(mail: string) {

    this.firestore.collection('usuarios').snapshotChanges().subscribe(data => {
      data.forEach((element: any) => {

        console.log(element.payload.doc.data().mail);
        if (mail == element.payload.doc.data().mail) {
          console.log('entra');
          this.id = element.payload.doc.id
          this.password = element.payload.doc.data().password;
          this.nombre = element.payload.doc.data().nombre;
        }
      });

    });
  }
  getUsuarios(): Observable<any> {

    return this.firestore.collection('usuarios').snapshotChanges();


  }
}
