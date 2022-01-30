import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './home-component.component.html'
})
export class HomeComponentComponent implements OnInit {


  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('SIVIG');
  }

}
