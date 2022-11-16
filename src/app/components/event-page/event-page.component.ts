import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents().subscribe((events) => {
      console.log(events)
      this.events = events;
    });
  }
}
