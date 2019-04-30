import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../services/httpService'



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  test: string = ''
  constructor(public navCtrl: NavController, private httpService: HttpService) { }
  
  getTest() {
    this.httpService.post('/api/users/login',{userName: 'admin', password: 'password'}).then(res => {
      console.log(res)
    })  
  }

  getUrl() {
    this.httpService.get('/api/mainstock',{pageSize: 5, current: 1, name: '', type: '', code: ''}).then(res => {
      console.log(res)
    })
  }

  
  ngOnInit() {
    console.log('ngoninit')
  }
  ionViewWillEnter(){
    this.getUrl()
    console.log(this.test)
    this.test = ''
    console.log("2.0 ionViewWillEnter 顾名思义，当将要进入页面时触发");
  }
}
