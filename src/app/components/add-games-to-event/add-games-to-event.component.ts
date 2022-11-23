import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  search: string = '';

  constructor(
    private gamesService: GamesService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getGames();
  }

  filter() {
    if (this.search === '') {
      return;
    }
    this.games = this.games.filter((game) => {
      return game.name.includes(this.search);
    });
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        search: this.search,
      },
      queryParamsHandling: 'merge',
    });
  }

  getGames(): void {
    this.gamesService.getGames().subscribe((games) => {
      this.games = games;
      this.isLoading = false;
    });
  }
}
