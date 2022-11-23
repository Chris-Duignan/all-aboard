import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { StateService } from 'src/app/services/state/state.service';
import { Meet } from '../../classes/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent {
  constructor(
    private eventsService: EventsService,
    private stateService: StateService
  ) {}

  submitted = false;
  location: any;
  user: any = this.stateService.getUser();

  model = new Meet(
    '',
    '',
    '',
    'Manchester',
    '',
    '',
    0, /* This is the user id, we need this from auth*/
    0,
    true,
    false,
    ''
  );
  saveLocation(eventInfo: any) {
    this.location = eventInfo;
    this.model.latitude=this.location.lat.toString();
    this.model.longitude=this.location.lng.toString();
    console.log('in form land', this.location.lat);
  }
  newMeet() {
    this.model = new Meet(
      '',
      '12.35',
      '34.1',
      'Manchester',
      '',
      '',
      0, /* This is the user id, we need this from auth*/
      0,
      true,
      false,
      ''
    );
  }

  postMeet(model: any): void {
    model.user_id = this.stateService.getUser().user_id
    this.eventsService.postEvent(model).subscribe();
    this.submitted = true;
  }

}
