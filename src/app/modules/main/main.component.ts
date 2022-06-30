import { Component, HostBinding, OnInit, Renderer2 } from '@angular/core';
import { AppService } from '@services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @HostBinding('class') class = 'wrapper';

  constructor(private AppService: AppService) {}

  ngOnInit() {
    console.log('main component');
    this.AppService.cheeckLogin();
  }
}
