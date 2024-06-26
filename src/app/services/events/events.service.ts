import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Meet } from '../../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'https://all-aboard-be.onrender.com/api/events';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Meet[]> {
    return this.http.get<Meet>(this.eventsUrl).pipe(
      map((response: any) => {
        return response.events;
      })
    );
  }

  postEvent(meet: Meet): Observable<Meet> {
    return this.http.post<Meet>(this.eventsUrl, meet, this.httpOptions).pipe(
      map((response: any) => {
        return response.event;
      })
    );
  }

  getEventById(event_id: number): Observable<Meet> {
    return this.http.get<Meet>(this.eventsUrl + '/' + event_id).pipe(
      map((response: any) => {
        return response.event;
      })
    );
  }

  postEventToUserEvents(event_id: number, user_id: number): Observable<Object> {
    return this.http.post(this.eventsUrl + `/${event_id}/users`, {
      user_id: user_id,
    });
  }

  postGameToEvent(event_id: number, game_id: number): Observable<Object> {
    return this.http.post(this.eventsUrl + `/${event_id}/games`, {
      game_id: game_id,
    });
  }

  getEventsByUserId(user_id: number): Observable<Event[]> {
    return this.http
      .get(`https://all-aboard-be.onrender.com/api/users/${user_id}/events`)
      .pipe(
        map((response: any) => {
          return response.events;
        })
      );
  }
}
