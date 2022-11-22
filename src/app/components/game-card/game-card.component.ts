import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { AuthService } from 'src/app/services/authS/auth.service';
import { StateService } from 'src/app/services/state/state.service';

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

  constructor(
    private gamesService: GamesService,
    public authService: AuthService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.user_id = this.stateService.getUser().user_id;
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

  postGameToUserGames() {
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
}
