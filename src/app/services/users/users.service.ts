import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(user_id: number): Observable<User> {
    let userUrl = `https://all-aboard.cyclic.app/api/users/${user_id}`;
    return this.http.get<any>(userUrl).pipe(
      map((response: any) => {
        return response.user;
      })
    );
  }

  getUserIdByUID(uid: string): Observable<number> {
    return this.http
      .get<number>(`https://all-aboard.cyclic.app/api/users/uidLookup/${uid}`)
      .pipe(
        map((response: any) => {
          return response.user_id;
        })
      );
  }
}
