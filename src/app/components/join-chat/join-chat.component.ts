import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { ChatUser } from '../../interfaces/ChatUser';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events/events.service'
import { ChatCardComponent } from 'src/app/components/chat-card/chat-card.component';


@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css']
})
export class JoinChatComponent implements OnInit {
  events:any[]=[];
  roomName:string='';
  eventDate:string='';
  username:string='tess';

  showMembers:boolean=false;

  constructor(
    public Events : EventsService,
    private _route: ActivatedRoute,
    private _router: Router,
    ) { }

  // model = new ChatUser(this.username, {roomName: this.roomName, endDate: this.eventDate})

  ngOnInit(): void {
    this.Events.getEventById(3)
    .subscribe((data) => {
      console.log(data)
      this.events.push(data);
    })
  }
  onJoin(event:any, clicked:any){
    if(clicked.target.innerText.includes('members')){

    } else {
      this.roomName = event.title;
      this.eventDate = event.date;

      this._router.navigate(['/chat'], {
      relativeTo: this._route,
      queryParams: {
        user: `${this.username}`,
        room: `${this.roomName}`,
        date: `${this.eventDate}`
      },
    })
    }
    
  }
  toggleMembers(){
    this.showMembers= !this.showMembers;
  }


}
