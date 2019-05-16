import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {GlobalDataServiceService} from '../global-data-service.service';

@Component({
    selector: 'app-leaderboards',
    templateUrl: './leaderboards.page.html',
    styleUrls: ['./leaderboards.page.scss'],
})
export class LeaderboardsPage implements OnInit {
    public users: any;
    public currentUsername: any;
    public points: any = [];
    public totalPoints: any;
    public sortedUsers: any;

    constructor(public db: AngularFireDatabase,
                public globalData: GlobalDataServiceService) {
        this.db.list('users1/').snapshotChanges().subscribe(items => {
            this.users = items.map(item => {
                return item.payload.val();
            });
        });
        this.currentUsername = this.globalData.data;
        console.log(this.currentUsername);
        console.log(this.users);

    }
    ngOnInit() {
        this.sortedUsers = this.users.sort((a, b) => a.totalPoints.localeCompare(b.totalPoints));
    }
}
