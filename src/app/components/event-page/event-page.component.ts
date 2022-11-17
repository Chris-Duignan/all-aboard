import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { Meet } from 'src/app/classes/event';
import { formatDate } from '../../../utils/formatDate';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css'],
})
export class EventPageComponent implements OnInit {
  meets: Meet[] = [];
  organiser: string = "";
  loading: boolean = true;

  constructor(private eventsService: EventsService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.loading = true;
    let organiser = ""
    this.eventsService.getEvents().subscribe((meets) => {
      this.meets = meets;
      this.meets.map((meet) => {
        meet.date = formatDate(meet.date);
        meet.organiser = ""
        
      });
      this.loading = false
    });
  }

  getUser(id: number): any {
    return this.usersService.getUser(id).subscribe((user) => {
      console.log(user)
      this.organiser = user.username;
    })
  }


}
