import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor (private router: Router, private navCtrl: NavController) {}
  logOut() {
    this.navCtrl.navigateForward('/login')
    // this.router.navigate(['/login'])
  }
}
