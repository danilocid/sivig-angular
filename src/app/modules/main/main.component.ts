import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @HostBinding('class') class = 'wrapper';

  constructor() {}

  ngOnInit() {
    console.log('main component');
  }
}
