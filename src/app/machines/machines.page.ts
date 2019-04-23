import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.page.html',
  styleUrls: ['./machines.page.scss'],
})
export class MachinesPage implements OnInit {
  public machines: any;
  constructor(public db: AngularFireDatabase) {
    this.db.list('machines/').snapshotChanges().subscribe(items => {
      this.machines = items.map(item => {
        return item.payload.val();
      });
    });
  }

  ngOnInit() {
  }

}
