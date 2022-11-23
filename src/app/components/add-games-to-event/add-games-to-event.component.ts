import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/classes/game';
import { GamesService } from 'src/app/services/games/games.service';

@Component({
  selector: 'app-add-games-to-event',
  templateUrl: './add-games-to-event.component.html',
  styleUrls: ['./add-games-to-event.component.css'],
})
export class AddGamesToEventComponent implements OnInit {
  isLoading = false;
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
      this.isLoading = false;
    });
  }
}
