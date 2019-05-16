import {Component, OnInit} from '@angular/core';
import {BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {GlobalDataServiceService} from '../global-data-service.service';
import QRCode from 'qrcode';
import {QRCodeModule} from 'angular2-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
    selector: 'app-add-operation',
    templateUrl: './add-operation.page.html',
    styleUrls: ['./add-operation.page.scss'],
})
export class AddOperationPage implements OnInit {
    encodeData = '';
    constructor(private barcodeScanner: BarcodeScanner,
                private globalData: GlobalDataServiceService) {
        console.log(this.globalData.data);
        this.encodeData = this.globalData.data.toString();
console.log(this.encodeData);
    }



    ngOnInit() {
    }


}
