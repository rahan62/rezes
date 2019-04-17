import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public name: string;
    public surname: string;
    public password: string;
    public email: string;
    public identity: number;
    public users: any;
    public user: any;
    public username: string;
    encodeData: any;
    barcodeScannerOptions: BarcodeScannerOptions;

    constructor(public menuCtrl: MenuController, private barcodeScanner: BarcodeScanner, public router: Router,
                public db: AngularFireDatabase) {
        this.db.list('users1/').snapshotChanges().subscribe(items => {
            this.users = items.map(item => {
                return item.payload.val();
            });
        });
    }

    ngOnInit() {
        this.menuCtrl.enable(false);
        this.menuCtrl.close();

    }

    createUser() {
        if (this.username !== '' && this.name !== '' && this.surname !== '' && this.password !== '' && this.identity !== null) {
            this.user = {
                'username': this.username,
                'name': this.name,
                'surname': this.surname,
                'password': this.password,
                'email': this.email,
                'identity': this.identity,
                'type': 'customer'
            };
        }

        this.users.push(this.user);
        this.db.object('users1/').set(this.users);
        this.router.navigateByUrl('/login');
    }
}
