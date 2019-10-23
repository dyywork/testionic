import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  constructor() { }

  // 父组件向子组件传值时子组件需要有输入型的属性@Input() 
  @Input() username: string = ''
  @Input('pwd') password: string = '' // 为password 起一个pwd别名

  ngOnInit() {
    
  }

}
