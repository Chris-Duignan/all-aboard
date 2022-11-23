import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.css']
})
export class ChatCardComponent implements OnInit {
  @Input() event:any;

  members:any[]=[]
  showMembers:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.event.guests.forEach((guest:any) => {
      this.members.push(guest.username)
    })
  }

  toggleMembers(){
    this.showMembers=!this.showMembers;
  }

}
