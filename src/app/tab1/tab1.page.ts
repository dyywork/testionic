import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { PopupService } from 'src/services/popupService';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  base64Image: string = ''
  constructor(private network: Network, private popup: PopupService, private appVersion: AppVersion , public actionSheetController: ActionSheetController, private camera: Camera) {}
  
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
  async getCamera() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: '相机',
        icon: 'camera',
        handler: () => {
          const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
          }
          
          this.camera.getPicture(options).then((imageData) => {
           // imageData is either a base64 encoded string or a file URI
           // If it's base64 (DATA_URL):
           this.base64Image = 'data:image/jpeg;base64,' + imageData;
          }, (err) => {
           // Handle error
          });
          console.log('Delete clicked');
        }
      },{
        text: '相册',
        icon: 'images',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
