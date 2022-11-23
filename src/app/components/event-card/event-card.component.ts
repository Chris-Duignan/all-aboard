import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { EventsService } from 'src/app/services/events/events.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  @Input() meet: any;
  singleEventPageLink = '';
  user_id: any;

  constructor(
    private eventsService: EventsService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.singleEventPageLink = `/events/${this.meet.event_id}`;
  }

  postEventToUserEvents() {
    this.user_id = this.stateService.getUser().user_id;
    this.eventsService
      .postEventToUserEvents(this.meet.event_id, this.user_id)
      .subscribe(() => {
        this.stateService.addEvent({
          name: this.meet.title,
          event_id: this.meet.event_id,
          organiser: false,
        });
      });
  }
}
