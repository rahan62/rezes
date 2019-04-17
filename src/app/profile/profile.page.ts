import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    public currentUser: any;

    constructor(public db: AngularFireDatabase, public router: Router) {
        this.db.object('users1').snapshotChanges().subscribe(item => {
            this.currentUser = item.payload.val();
        });
    }

    ngOnInit() {
    }

}
