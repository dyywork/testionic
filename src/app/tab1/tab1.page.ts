import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { PopupService } from 'src/services/popupService';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
 
  constructor(private network: Network, private popup: PopupService ) {}
  
  getTestNetwork() {
    console.log('network connected!');
    this.popup.popupAlert(this.network.type)
  }
}
