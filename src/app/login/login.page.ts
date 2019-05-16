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
                if (this.users[i].username === this.username && this.users[i].password === this.password && this.users[i].type === 'customer') {
                    console.log('login succesful!');
                    alert('login succesful!');
                    this.globaldata.data = this.username;
                    this.globaldata.userType = 'customer';
                    this.router.navigateByUrl('home');
                } else if (this.users[i].username === this.username && this.users[i].password === this.password && this.users[i].type === 'admin') {
                    console.log('admin login');
                    this.globaldata.data = this.username;
                    this.globaldata.userType = 'admin';
                    this.router.navigateByUrl('home-admin');
                }
            }
        } else {
            alert('Please fill the form correctly!');
        }
    }
}
