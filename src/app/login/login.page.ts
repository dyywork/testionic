import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PopupService } from 'src/services/popupService';
import { HttpService } from 'src/services/httpService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    userName: string = ''
    password: string = ''
  
  constructor(public navCtrl: NavController, private router: Router,private popupService: PopupService, private httpService: HttpService) {}

  getTabs() {
    if (this.userName !== '' && this.password !== '') {
      this.httpService.post('/api/users/login',{userName: this.userName, password: this.password}).then(res => {
        console.log(res)
        this.router.navigate(['/tabs/home'])
      })  
    } else {
      this.popupService.popupAlert('用户名密码不能为空！')
    }
    // this.navCtrl.navigateForward('/tabs/home')
    
  }
  ngOnInit() {
    console.log(1)
  }

}
