import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/classes/game';
import { AuthService } from 'src/app/services/authS/auth.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css'],
})
export class GamesPageComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService, public authService: AuthService) {}

  ngOnInit(): void {
    this.getGames(); 
  }

  getGames(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
    });
  }
  currentUser: any  ;
  
}
