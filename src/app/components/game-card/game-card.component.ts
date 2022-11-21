import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { AuthService } from 'src/app/services/authS/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

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
    public authService: AuthService
  ) {}

  ngOnInit(): void {
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
    // this.authService.getCurrentUser();
    this.user_id = this.authService.currentUserId;
    this.gamesService
      .postGameToUserGames(this.user_id, this.game.game_id)
      .subscribe(({ userGame }) => {
        this.games.push(userGame.game_id);
      });
  }
}
