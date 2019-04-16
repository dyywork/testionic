import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { PopupService } from 'src/services/popupService';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
 
  constructor(private network: Network, private popup: PopupService, private appVersion: AppVersion ) {}
  
  getTestNetwork() {
    this.popup.popupAlert(this.network.type)
  }

  getAppVersion() {
    this.appVersion.getAppName().then(data => {
      this.popup.popupAlert('应用名称：' + data)
    })
    this.appVersion.getVersionNumber().then(data => {
      this.popup.popupAlert('版本号：' + data)
    })
  }
}
