import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games/games.service';
import { Game } from 'src/app/classes/game';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.css'],
})
export class GamesPageComponent implements OnInit {
  games: Game[] = [];
  isLoading = false;
  search:string='';

  constructor(
    private gamesService: GamesService,
    private _route: ActivatedRoute,
    private _router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getGames();
  }

  filter(){
    if(this.search=== ''){
      return
    }
    this.games = this.games.filter((game) => {
      return game.name.includes(this.search)
    })
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        search: this.search
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
