import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {
  public machines: any;
  constructor(public db: AngularFireDatabase,
              public router: Router) {
    this.db.list('machines/').snapshotChanges().subscribe(items => {
      this.machines = items.map(item => {
        return item.payload.val();
      });
    });
  }

  ngOnInit() {
  }

}
