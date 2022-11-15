import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events-service.service';
import { Events } from '../interfaces/event';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {
  events: any;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents()
      .subscribe((events) => {
        this.events = events.events
      });
  }

}
