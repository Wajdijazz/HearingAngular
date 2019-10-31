import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent  {

  message: Message = null;
  constructor(){ }

  show(msg: Message ){
    debugger;
    this.message = msg;
    setTimeout(()=>{
      this.message = null;
    }, 2000)
  }
}
