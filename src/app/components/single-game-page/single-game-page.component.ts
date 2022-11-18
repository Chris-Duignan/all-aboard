import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-single-game-page',
  templateUrl: './single-game-page.component.html',
  styleUrls: ['./single-game-page.component.css'],
})
export class SingleGamePageComponent implements OnInit {
  game: any;
  formattedName = '';

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
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
}
