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
    public users: any;
    public currentPoint = 0;
    public transactions: any;
    public metalCount = 0;
    public plasticCount = 0;
    public glassCount = 0;
    public totalMaterial = 0;
    public transCount = 0;

    constructor(public menuCtrl: MenuController,
                public globaldata: GlobalDataServiceService,
                public router: Router,
                public qr: QRCodeModule,
                public db: AngularFireDatabase
    ) {
        this.db.list('users1/').snapshotChanges().subscribe(items => {
            this.users = items.map(user => {
                return user.payload.val();
            });
            this.getCurrentScore();
        });
        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
            this.getTransactionCount();
            this.calculateMetal();
            this.calculateGlass();
            this.calculatePlastic();
            this.calculateTotalMaterial();
        });
        this.currentUser = this.globaldata.data;
    }

    ngOnInit() {

        console.log(this.currentUser);
        if (!this.currentUser) {
            console.log('debug');
            this.router.navigateByUrl('/login');
        }
    }

    getCurrentScore() {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === this.currentUser) {
                this.currentPoint = this.users[i].totalPoints;
            }
        }
    }

    getTransactionCount() {

        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].userName === this.currentUser){
                this.transCount++;
            }
        }
    }
    calculateMetal() {
        for (let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].userName);
            if (this.transactions[i].userName === this.currentUser) {
                this.metalCount += parseInt(this.transactions[i].metal, 10);
            }
        }
    }

    calculatePlastic() {
        for (let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].userName);
            if (this.transactions[i].userName === this.currentUser) {
                this.plasticCount += parseInt(this.transactions[i].plastic, 10);
            }
        }
    }

    calculateGlass() {
        for (let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].userName);
            if (this.transactions[i].userName === this.currentUser) {
                this.glassCount += parseInt(this.transactions[i].glass, 10);
            }
        }
    }
    calculateTotalMaterial() {
        this.totalMaterial = this.plasticCount + this.metalCount + this.glassCount;
    }

}
