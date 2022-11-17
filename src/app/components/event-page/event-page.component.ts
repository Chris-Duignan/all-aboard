import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { Meet } from 'src/app/classes/event';
import {User } from "src/app/interfaces/user"
import { formatDate } from '../../../utils/formatDate';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  meets: Meet[] = [];
  user: any;
  loading: boolean = true;

  constructor(private eventsService: EventsService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.loading = true;
    this.eventsService.getEvents().subscribe((meets) => {
      this.meets = meets;
      this.meets.map((meet) => {
        this.usersService.getUser(meet.organiser).subscribe((user) => {
          meet.organiser = user.username
        })
        meet.date = formatDate(meet.date);
      });
      this.loading = false
    });
  }
}
