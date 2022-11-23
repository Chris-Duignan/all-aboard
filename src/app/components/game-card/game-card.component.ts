import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { AuthService } from 'src/app/services/authS/auth.service';
import { StateService } from 'src/app/services/state/state.service';
import { EventsService } from 'src/app/services/events/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input() game: any;
  formattedName = '';
  shortDescription = '';
  gamePageLink = '';
  games = new Array<number>();
  user_id: any;
  event_id: any;

  constructor(
    private gamesService: GamesService,
    public authService: AuthService,
    public stateService: StateService,
    public eventsService: EventsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //this.user_id = this.stateService.getUser().user_id;
    this.route.params.subscribe(
      (params) => (this.event_id = params['event_id'])
    );
    this.formattedName = this.game.name
      .split('-')
      .map((word: string) => {
        if (word[0]) {
          return word[0].toUpperCase() + word.slice(1);
        } else {
          return '-';
        }
      })
      .join(' ');
    this.shortDescription = this.game.description.split('.')[0];
    this.gamePageLink = `/games/${this.game.game_id}`;
  }

  handleButtonClick() {
    if (this.event_id) {
      this.postGameToEvent();
    } else {
      this.postGameToUserGames();
    }
  }

  postGameToUserGames() {
    this.user_id = this.stateService.getUser().user_id;
    this.gamesService
      .postGameToUserGames(this.user_id, this.game.game_id)
      .subscribe(({ userGame }) => {
        this.stateService.addGame({
          game_id: this.game.game_id,
          game_title: this.game.name,
        });
        this.games.push(userGame.game_id);
      });
  }

  postGameToEvent() {
    this.eventsService
      .postGameToEvent(this.event_id, this.game.game_id)
      .subscribe();
  }
}
