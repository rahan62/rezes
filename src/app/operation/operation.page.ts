import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {GlobalDataServiceService} from '../global-data-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-operation',
    templateUrl: './operation.page.html',
    styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {
    public transactions: any;
    public userTrans: any = [];
    public users: any = [];
    public currentUser: any;
    constructor(public db: AngularFireDatabase,
                public globaldata: GlobalDataServiceService,
                public router: Router) {
        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                    return item.payload.val();
            });
        });
        this.db.list('users1/').snapshotChanges().subscribe(items => {
            this.users = items.map(item => {
                return item.payload.val();
            });
        });
        this.currentUser = this.globaldata.data;
        console.log(this.currentUser);
    }
    ionViewDidEnter() {
        this.listPreviousTransactions();
    }
    ionViewDidLoad() {
        this.listPreviousTransactions();
    }
    ionviewWillEnter() {
        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
        });
        for (let i = 0; i < this.transactions.length ; i++) {
            if (this.transactions[i].userName === this.globaldata.data) {
                this.userTrans.push(this.transactions[i]);
            }
        }
    }
    ngOnInit() {
        if (!this.globaldata.data) {
            this.router.navigateByUrl('login');
        }
        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
        });
        for (let i = 0; i < this.transactions.length ; i++) {
            if (this.transactions[i].userName === this.currentUser) {
                this.userTrans.push(this.transactions[i]);
            }
        }
    }
    listPreviousTransactions() {
        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
        });
        for (let i = 0; i < this.transactions.length ; i++) {
            if (this.transactions[i].userName === this.globaldata.data) {
                this.userTrans.push(this.transactions[i]);
            }
        }
    }

}
