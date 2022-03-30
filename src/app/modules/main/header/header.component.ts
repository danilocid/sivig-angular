('');
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppService } from '../../../services/app.service';
import { Observable } from 'rxjs';

const BASE_CLASSES = 'main-header navbar navbar-expand';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') classes: string = BASE_CLASSES;
  public searchForm: FormGroup;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  logout() {
    this.appService.logout();
  }
}
