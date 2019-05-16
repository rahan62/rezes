import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ProfilePage} from './profile.page';

import {QRCodeModule} from 'angularx-qrcode';
import {NgxQRCodeModule} from 'ngx-qrcode2';

const routes: Routes = [
    {
        path: '',
        component: ProfilePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        QRCodeModule,
        NgxQRCodeModule
    ],
    declarations: [ProfilePage]
})
export class ProfilePageModule {
}
