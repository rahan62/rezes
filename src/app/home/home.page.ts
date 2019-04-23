import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {GlobalDataServiceService} from '../global-data-service.service';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public currentUser: any;

    constructor(public menuCtrl: MenuController,
                public globaldata: GlobalDataServiceService,
                public router: Router,
                public db: AngularFireDatabase) {
        this.currentUser = globaldata.data;
    }

    ngOnInit() {
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
        console.log('debug');
        if (!this.globaldata.data) {
            this.router.navigateByUrl('/login');
        }
    }
}
