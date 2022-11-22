import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { formatDate } from '../../../utils/formatDate';
// import { Meet } from 'src/app/classes/event';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-event-single-page',
  templateUrl: './event-single-page.component.html',
  styleUrls: ['./event-single-page.component.css']
})
export class EventSinglePageComponent implements OnInit {
meet: any;
formatDate = '';

@Input() Meet: any;
  constructor(private route: ActivatedRoute, private eventsService: EventsService) {
  }
  
  
  ngOnInit(): void {
    this.route.params.subscribe( params => this.getEventById(params['event_id']));
  }

  getEventById(event_id: number): void {
    this.eventsService.getEventById(event_id).subscribe((meet) => {
    
      this.meet=meet;
   this.formatDate = formatDate(this.meet.date);
      

    })
  }

}
