import { Injectable } from "@angular/core";
import { AlertController } from '@ionic/angular';

@Injectable()
export class PopupService {
  
  constructor(public alertController: AlertController) {}

  public async popupAlert (content: string) {
    const alert = await this.alertController.create({
      header: '提示',
      message: content,
      buttons: ['确认']
    });

    await alert.present();
  }

}
