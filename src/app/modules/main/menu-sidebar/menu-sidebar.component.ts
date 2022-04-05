import { Component, HostBinding, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  @HostBinding('class') classes: string = BASE_CLASSES;

  public menu = MENU;

  constructor(public appService: AppService) {}

  ngOnInit() {}
}

export const MENU = [
  {
    name: 'Dashboard',
    icon: 'fas fa-home',
    path: ['/'],
  },
  {
    name: 'Configuracion',
    icon: 'fas fa-cog',
    children: [
      {
        name: 'Usuarios',
        icon: 'fas fa-user-cog',
        path: ['/configuracion/usuarios'],
      },
    ],
  },
];
