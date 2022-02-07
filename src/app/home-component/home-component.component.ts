import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './home-component.component.html'
})
export class HomeComponentComponent implements OnInit {


  constructor(private titleService: Title,
    public userService: UsersService,) { }

  ngOnInit(): void {
    this.userService.CheckLogin();
    this.titleService.setTitle('SIVIG');
  }

}
