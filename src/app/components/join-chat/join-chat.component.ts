import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { ChatUser } from '../../interfaces/ChatUser';
import { Router, ActivatedRoute } from '@angular/router';
import { EventsService } from '../../services/events/events.service'
import { ChatCardComponent } from 'src/app/components/chat-card/chat-card.component';
import { StateService } from 'src/app/services/state/state.service';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-join-chat',
  templateUrl: './join-chat.component.html',
  styleUrls: ['./join-chat.component.css']
})
export class JoinChatComponent implements OnInit {
  events:any[]=[];
  roomName:string='';
  eventDate:string='';
  username:string='';

  showMembers:boolean=false;

  constructor(
    public Events : EventsService,
    private _route: ActivatedRoute,
    private _router: Router,
    public state: StateService
    ) { }

    user:any;


  ngOnInit(): void {

    setTimeout(() => {

      this.Events.getEventsByUserId(this.state.getUser().user_id)
      .subscribe((data) => {
        this.events = data;

      })
    },1000)
    
  }
  onJoin(event:any, clicked:any){
    if(clicked.target.innerText.includes('members')){

    } else {
      this.roomName = event.title;
      this.eventDate = event.date;

      this._router.navigate(['/chat'], {
      relativeTo: this._route,
      queryParams: {
        user: `${this.state.getUser().username}`,
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
