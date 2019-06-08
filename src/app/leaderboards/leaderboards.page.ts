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
    public maxPoint = 0.0;
    public leader: any;
    public pivot: any;
    public tempList: any;

    constructor(public db: AngularFireDatabase,
                public globalData: GlobalDataServiceService) {
        this.db.list('users1/').snapshotChanges().subscribe(items => {
            this.users = items.map(item => {
                return item.payload.val();
            });
            this.calculateLeader();
            const sorter = new DeviceQuickSorter(this.users);
            this.users = sorter.getSortedArray();
        });
        this.currentUsername = this.globalData.data;
        console.log(this.currentUsername);
        console.log(this.users);

    }

    ngOnInit() {
    }

    calculateLeader() {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].totalPoints > this.maxPoint) {
                this.maxPoint = this.users[i].totalPoints;
                this.leader = this.users[i];
            }

        }
    }
}
export class DeviceQuickSorter {
    users: any;

    constructor(devices) {
        this.users = devices;
        // first call to quick sort
        const sortedArray = this.quickSort(this.users, 0, this.users.length - 1);
        console.log('Sorted ARRAY');
        console.log(sortedArray); //prints [2,3,5,6,7,9]
        this.users = sortedArray;

    }

    swap(items, leftIndex, rightIndex) {
        const temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }

    partition(items, left, right) {
        const pivot = items[Math.floor((right + left) / 2)]; //middle element
        let i = left; //left pointer
        let j = right; //right pointer
        console.log(i, j, pivot);
        while (i <= j) {
            console.log('pivot');
            console.log(pivot);
            while (items[i].totalPoints > pivot.totalPoints) {
                i++;
            }
            while (items[j].totalPoints < pivot.totalPoints) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            console.log(items);
            index = this.partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSort(items, index, right);
            }
        }
        return items;
    }

    getSortedArray() {
        return this.users;
    }

}
