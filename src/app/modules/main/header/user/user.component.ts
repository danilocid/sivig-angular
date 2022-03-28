import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { DateTime } from 'luxon';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    public user;
    public userName = localStorage.getItem('nombre');
    public userMail = localStorage.getItem('email');
    public userCreatedAt = localStorage.getItem('createdAt');

    constructor(private appService: AppService) { }

    ngOnInit(): void {
        this.user = this.appService.user;

        console.log(this.user);
    }

    logout() {
        this.appService.logout();
    }

    formatDate(date) {
        return DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
