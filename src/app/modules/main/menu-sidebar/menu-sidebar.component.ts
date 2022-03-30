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
    icon: 'fas fa-cogs',
    path: ['/'],
  },
  {
    name: 'Dashboard',
    path: ['/hola'],
  },
  {
    name: 'Blank',
    path: ['/blank'],
  },
  {
    name: 'Main Menu',
    children: [
      {
        name: 'Sub Menu',
        path: ['/sub-menu-1'],
      },

      {
        name: 'Blank',
        path: ['/sub-menu-2'],
      },
    ],
  },
];
