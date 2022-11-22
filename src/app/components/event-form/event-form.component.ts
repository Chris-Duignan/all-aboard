import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { StateService } from 'src/app/services/state/state.service';
import { Meet } from '../../classes/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {

  constructor(private eventsService: EventsService, private stateService: StateService) {}

  submitted = false;
  location: any
  currentUserId: any = this.stateService.getUser().user_id
  
  model = new Meet(
    '',
    '12.35',
    '34.1',
    'Manchester',
    '',
    '',
    2 /* This is the user id, we need this from auth*/,
    0,
    true,
    false,
    ''
  );
saveLocation(eventInfo: any){
  this.location = eventInfo
  console.log('in form land', this.location)
}
  newMeet() {
    this.model = new Meet(
      '',
      '12.35',
      '34.1',
      'Manchester',
      '',
      '',
      2 /* This is the user id, we need this from auth*/,
      0,
      true,
      false,
      ''
    );
  }

  
  postMeet(model: any):void {
    this.eventsService.postEvent(model).subscribe()
    this.submitted = true;
  }
}
