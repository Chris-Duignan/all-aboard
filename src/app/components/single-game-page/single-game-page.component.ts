import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games/games.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-single-game-page',
  templateUrl: './single-game-page.component.html',
  styleUrls: ['./single-game-page.component.css'],
})
export class SingleGamePageComponent implements OnInit {
  game: any;
  formattedName = '';
  user_id: any;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    public stateService: StateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getGame(params['game_id']);
    });
  }

  getGame(game_id: number): void {
    this.gamesService.getGame(game_id).subscribe((game) => {
      this.game = game;
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
    });
  }

  postGameToUserGames() {
    this.user_id = this.stateService.getUser().user_id;
    this.gamesService
      .postGameToUserGames(this.user_id, this.game.game_id)
      .subscribe(() => {
        this.stateService.addGame({
          game_id: this.game.game_id,
          game_title: this.game.name,
        });
      });
  }
}
