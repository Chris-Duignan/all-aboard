import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { Meet } from 'src/app/classes/event';
import { formatDate } from '../../../utils/formatDate';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  meets: Meet[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents().subscribe((meets) => {
      this.meets = meets;
      meets.map((meet) => {
        meet.date = formatDate(meet.date);
      });
    });
  }
}
