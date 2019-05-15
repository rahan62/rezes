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
    public transactions: any = [];
    public metalCount = 0;
    public plasticCount = 0;
    public glassCount = 0;

    constructor(public menuCtrl: MenuController,
                public globaldata: GlobalDataServiceService,
                public router: Router,
                public db: AngularFireDatabase) {
        this.currentUser = globaldata.data;
        console.log(this.currentUser.currentUsername.toString());

        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
        });
    }
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
        this.calculateMetal();
        this.calculateGlass();
        this.calculatePlastic();
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad');
        this.calculateMetal();
        this.calculateGlass();
        this.calculatePlastic();
    }
    ionViewWillEnter() {
        console.log('ionViewWillEnter');
        this.calculateMetal();
        this.calculateGlass();
        this.calculatePlastic();
    }
    ionViewWillLeave() {
        console.log('ionViewWillLeave');
        this.calculateMetal();
        this.calculateGlass();
        this.calculatePlastic();
    }
    ngOnInit() {
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
        console.log('debug');
        if (!this.globaldata.data) {
            this.router.navigateByUrl('/login');
        }
        console.log('ionViewWillLeave');
        this.calculateMetal();
        this.calculateGlass();
        this.calculatePlastic();

    }


    calculateMetal() {
        for (let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].userName);
            if (this.transactions[i].userName === this.currentUser.currentUsername) {
                this.metalCount += parseInt(this.transactions[i].metal, 10);
            }
        }
    }
    calculatePlastic() {
        for (let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].userName);
            if (this.transactions[i].userName === this.currentUser.currentUsername) {
                this.plasticCount += parseInt(this.transactions[i].plastic, 10);
            }
        }
    }
    calculateGlass() {
        for (let i = 0; i < this.transactions.length; i++) {
            console.log(this.transactions[i].userName);
            if (this.transactions[i].userName === this.currentUser.currentUsername) {
                this.glassCount += parseInt(this.transactions[i].glass, 10);
            }
        }
    }
}
