import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getUsers().subscribe((data) => {
      data.forEach((element: any) => {
        console.log(element.payload.doc.data());
      });
    });
  }
}
