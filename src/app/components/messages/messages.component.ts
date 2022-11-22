import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() messageList:any;
  @Output() scrollBox = new EventEmitter<any>()
  messageBox:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  setScrollBox(event:any){
    this.messageBox = event.target;
    this.scrollBox.emit(this.messageBox);
  }

}
