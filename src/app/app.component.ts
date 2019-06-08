import {Component} from '@angular/core';

import {MenuController, NavController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {initializeApp} from 'firebase';


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
            title: 'Leaderboards',
            url: '/leaderboards',
            icon: 'trophy'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    logout() {
        this.router.navigateByUrl('/login')
        this.menuCtrl.close();
        this.menuCtrl.enable(false);
    }
}
