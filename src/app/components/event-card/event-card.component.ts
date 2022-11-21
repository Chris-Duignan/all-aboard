import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() meet: any;
  singleEventPageLink = '';

  constructor() { }

  ngOnInit(): void {
    this.singleEventPageLink=`/events/${this.meet.event_id}`;
  }

}
