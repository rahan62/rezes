import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Profile',
            url: '/profile',
            icon: 'contact'
        },
        {
            title: 'Operations',
            url: '/operation',
            icon: 'Desktop'
        },
        {
            title: 'Achievements',
            url: '/achievements',
            icon: 'add-circle-outline'
        },
        {
            title: 'LeaderBoards',
            url: '/leaderboards',
            icon: 'trophy'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
