import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormComponent } from '../contact/form/form.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  // 定义初始化参数
  username: string = 'username'
  pwd: string = '123456'

  //@ViewChild 父元素调用子元素方法，以及获取子元素属性的方式
  @ViewChild(FormComponent, {static: false})
  private loginForm: FormComponent

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router)
  }
  goTabs() {
    console.log(this.loginForm.username)
    this.router.navigate(['/tabs/tab1'])
  }

}
