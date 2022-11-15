import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Events } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventsUrl = "https://all-aboard.cyclic.app/api/events"

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Events> {
    return this.http.get<Events>(this.eventsUrl);
  }
}
