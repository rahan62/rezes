import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
    selector: 'app-machine-create',
    templateUrl: './machine-create.page.html',
    styleUrls: ['./machine-create.page.scss'],
})
export class MachineCreatePage implements OnInit {
    public machines: any;
    public machine: any;
    public name = '';
    public location = '';

    constructor(public db: AngularFireDatabase) {
        this.db.list('machines/').snapshotChanges().subscribe(items => {
            this.machines = items.map(item => {
                return item.payload.val(); // select db item
            });
        });
    }

    ngOnInit() {
    }

   /* addMachine() {
        this.machine = {
            'name': this.name,
            'location': this.location
        };
        this.machines.push(this.machine); //insert
        this.db.object('machines/').set(this.machines);
    }

    modifyMachine() {
        var index = -1;
        for (let i = 0; i < this.machines.lenght; i++) {
           if (this.machines[i].name === data.name)
           {
             index = i;
           }
        }
        this.machines[index].name = this.newName;
        this.db.object('machines').set(this.machines);
    }*/
}
