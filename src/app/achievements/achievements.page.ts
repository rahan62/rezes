import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {AlertController} from '@ionic/angular';
import {GlobalDataServiceService} from '../global-data-service.service';

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.page.html',
    styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
    public currentUser: any;
    public achiev: any = [];

    constructor(public db: AngularFireDatabase,
                public alertController: AlertController,
                public globaldata: GlobalDataServiceService) {
        this.currentUser = globaldata.data;
        console.log(this.currentUser.toString())
        this.db.list('app_content/achievements/').snapshotChanges().subscribe(items => {
            this.achiev = items.map(item => {
                return item.payload.val();
            });
        });
    }

    ngOnInit() {
    }

    async presentAlert(achi) {
        const alert = await this.alertController.create({
            header: achi.title,
            message: achi.info,
            buttons: ['OK']
        });
        await alert.present();
    }

}
