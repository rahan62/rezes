import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OpreationHistoryPage } from './opreation-history.page';

const routes: Routes = [
  {
    path: '',
    component: OpreationHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OpreationHistoryPage]
})
export class OpreationHistoryPageModule {}
