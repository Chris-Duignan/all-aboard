import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { Meet } from '../../classes/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {

  constructor(private eventsService: EventsService) {}

  submitted = false;
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

  onSubmit(model: any) {
    this.submitted = true;
    this.postMeet(model);
  }
  
  postMeet(model: any):void {
    this.eventsService.postEvent(model)
  }


}
