import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
      NgCircleProgressModule.forRoot({
          radius: 50,
          outerStrokeWidth: 8,
          innerStrokeWidth: 4,
          outerStrokeColor: '#125a05',
          innerStrokeColor: '#22ad0a',
          animationDuration: 300,
          animation: false,
          responsive: true,
          renderOnClick: false
      })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
