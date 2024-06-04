import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Game } from 'src/app/interfaces/game';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private gamesUrl = 'https://all-aboard-be.onrender.com/api/games';
  private usersUrl = 'https://all-aboard-be.onrender.com/api/users';

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

  postGameToUserGames(user_id: number, game_id: number): Observable<any> {
    return this.http
      .post<any>(this.usersUrl + `/${user_id}/games`, {
        game_id: game_id,
      })
      .pipe(catchError(this.handleError));
  }

  //copied from https://angular.io/guide/http#error-details
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
