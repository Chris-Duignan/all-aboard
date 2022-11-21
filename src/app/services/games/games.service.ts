import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private gamesUrl = 'https://all-aboard.cyclic.app/api/games';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game>(this.gamesUrl).pipe(
      map((response: any) => {
        return response.games;
      })
    );
  }

  getGame(game_id: number): Observable<Game> {
    return this.http.get<Game>(this.gamesUrl + '/' + game_id).pipe(
      map((response: any) => {
        return response.game;
      })
    );
  }
}
