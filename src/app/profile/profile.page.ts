import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
import {GlobalDataServiceService} from '../global-data-service.service';
import {QRCodeModule} from 'angularx-qrcode';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    public scannedData: any;
    public currentUser: any;

    constructor(public menuCtrl: MenuController,
                public globaldata: GlobalDataServiceService,
                public router: Router,
                public qr: QRCodeModule
    ) {
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
