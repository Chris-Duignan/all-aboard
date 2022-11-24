import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events/events.service';
import { formatDate } from '../../../utils/formatDate';
// import { Meet } from 'src/app/classes/event';
import { ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-event-single-page',
  templateUrl: './event-single-page.component.html',
  styleUrls: ['./event-single-page.component.css'],
})
export class EventSinglePageComponent implements OnInit {
  meet: any;
  formatDate = '';
  user_id: any;
  games: any;

  @Input() Meet: any;
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.getEventById(params['event_id'])
    );
  }

  getEventById(event_id: number): void {
    this.eventsService.getEventById(event_id).subscribe((meet) => {
      this.meet = meet;
      this.formatDate = formatDate(this.meet.date);
      this.games = this.meet.games.map((game: string) => {
        return this.formatGameName(game);
      });
    });
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
  formatGameName(gameName: string) {
    return gameName
      .split('-')
      .map((word: string) => {
        if (word[0]) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return '-';
        }
      })
      .join(' ');
  }
}
