import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html'
})
export class ListUsuariosComponent implements OnInit {

  constructor(public userService: UsersService,) {

  }

  Users: any[] = [];
  ngOnInit(): void {
    this.userService.getUsuarios().subscribe(data =>
      data.forEach((element: any) => {
        console.log(element.payload.doc.data());
        this.Users.push(element.payload.doc.data());
      }
      ));
    console.log(this.Users);

  }

}
