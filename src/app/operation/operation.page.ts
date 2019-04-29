import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {GlobalDataServiceService} from '../global-data-service.service';

@Component({
    selector: 'app-operation',
    templateUrl: './operation.page.html',
    styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {
    public transactions: any;
    public userTrans: any = [];

    constructor(public db: AngularFireDatabase,
                public globaldata: GlobalDataServiceService) {
        this.db.list('transactions/').snapshotChanges().subscribe(items => {
            this.transactions = items.map(item => {
                return item.payload.val();
            });
        });

    }

    ngOnInit() {
    }
    listPreviousTransactions() {
        for (let i = 0; i < this.transactions.length ; i++) {
            if (this.transactions[i].userName === this.globaldata.data.currentUsername) {
                this.userTrans.push(this.transactions[i]);
            }
        }
    }

}
