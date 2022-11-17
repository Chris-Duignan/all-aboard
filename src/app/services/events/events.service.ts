import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Meet } from '../../interfaces/event';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  private eventsUrl = 'https://all-aboard.cyclic.app/api/events';

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) {}

  getEvents(): Observable<Meet[]> {
    return this.http.get<Meet>(this.eventsUrl).pipe(
      map((response: any) => {
        return response.events;
      })
    );
  };

  postEvent(meet: Meet): Observable<Meet> {
    return this.http.post<Meet>(this.eventsUrl, meet, this.httpOptions).pipe(
      map((response: any) => {
        console.log(response);
        return response.event;
      })
    )
  }
}
