import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { formatDate } from '../../../utils/formatDate';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  meets: any;
  isLoading = false;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getEvents();
  }

  getEvents(): void {
    this.eventsService.getEvents().subscribe((meets) => {
      this.meets = meets;
      meets.map((meet) => {
        meet.date = formatDate(meet.date);
        meet.latitude = parseFloat(meet.latitude)
      });
      this.isLoading = false;
    });
  }
}
