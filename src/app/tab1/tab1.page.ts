import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {HttpServiceService} from '../../service/http-service.service'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8', "Referer": "https://www.aganchina.cn" })
  };

  constructor(private iab: InAppBrowser, private httpClient: HttpClient, private router: Router,private httpService: HttpServiceService) { }

  getHttp(): Observable<HttpResponse<any>> {
    return this.httpClient.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video', {observe: 'response'})
  }
  post() {
    this.httpService.post('http://10.23.8.44:8080/api/testOne',{a:2}).subscribe(res => {
      console.log(res)
    })
  }
  goDetails() {
    this.httpService.get('https://api.apiopen.top/getJoke', {page:1,count:2,type: 'video'}).subscribe(res => {
      console.log(res)
    })
    this.router.navigate(['/tabs/tab1/tab-details'])
  }
}
