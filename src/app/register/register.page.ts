import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

import {Router} from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
import {GlobalDataServiceService} from '../global-data-service.service';

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
    constructor(public menuCtrl: MenuController,
                public router: Router,
                public db: AngularFireDatabase,
                public globalDataService: GlobalDataServiceService) {
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
                'type': 'customer',
                'totalPoints': 0
            };

        }


        this.db.object('users1/' + this.username).set(this.user);
        this.router.navigateByUrl('/login');
    }
}
