import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {GlobalDataServiceService} from '../global-data-service.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


    public currentUser: any;

    constructor(public menuCtrl: MenuController,
                public globaldata: GlobalDataServiceService,
                public router: Router) {
        this.currentUser = this.globaldata.data;

    }

    ngOnInit() {

        console.log(this.currentUser);
        if (!this.currentUser) {
            console.log('debug');
            this.router.navigateByUrl('/login');
        }
    }

}
