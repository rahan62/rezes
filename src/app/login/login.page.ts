import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';
import {GlobalDataServiceService} from '../global-data-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public username = '';
    public password = '';
    public users: any;

    constructor(public menuCtrl: MenuController,
                public db: AngularFireDatabase,
                public router: Router,
                public globaldata: GlobalDataServiceService) {
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

    login() {
        if (this.username !== '' && this.password !== '') {
            for (let i = 0; i < this.users.length; i++) {
                if (this.users[i].username === this.username && this.users[i].password === this.password) {
                    console.log('login succesful!');
                    alert('login succesful!');
                    this.globaldata.data = {
                        'currentUsername': this.username
                    };
                    this.router.navigateByUrl('home');
                }
            }
        } else {
            alert('Please fill the form correctly!');
        }
    }
}
