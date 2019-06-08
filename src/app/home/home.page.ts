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
    public users: any;
    public currentPoint = 0;

    constructor(public menuCtrl: MenuController,
                public globaldata: GlobalDataServiceService,
                public router: Router,
                public db: AngularFireDatabase) {
        this.currentUser = globaldata.data;
        console.log(this.currentUser.toString());

        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
            this.calculateMetal();
            this.calculateGlass();
            this.calculatePlastic();
        });
        this.db.list('users1/').snapshotChanges().subscribe(items => {
            this.users = items.map(user => {
                return user.payload.val();
            });
            this.getCurrentScore();
        });
    }

    ngOnInit() {
        this.menuCtrl.enable(true);
        this.menuCtrl.open();
        console.log('debug');
        if (!this.globaldata.data) {
            this.router.navigateByUrl('login');
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

    addNewOperation() {
        this.globaldata.data = this.currentUser;
        this.router.navigateByUrl('/add-operation');
    }

    getCurrentScore() {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].username === this.currentUser) {
                this.currentPoint = this.users[i].totalPoints;
            }
        }
    }
}
