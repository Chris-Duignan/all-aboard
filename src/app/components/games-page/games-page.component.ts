import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/classes/game';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css'],
})
export class GamesPageComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
}
