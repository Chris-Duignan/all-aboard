import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // Some maps options
  title = "all_aboard"
  mapOptions: google.maps.MapOptions = {
    zoom: 15,
    center: {
      lat: 35.3606255,
      lng: 138.7273634,
    },
    mapTypeId: 'hybrid',
  };
  mapMarker: google.maps.MarkerOptions = {
    position: {
      lat: 35.3606255,
      lng: 138.7273634,
    },
    label: {
      color: 'red',
      text: 'Yep',
    },
    title: 'Yep',
  };

  // This observable will emit the value when the Maps API is loaded
  // This is needed to make sure we don't access the API when it's not loaded yet
  mapsLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.mapsLoaded = httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.GOOGLE_MAPS_KEY}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }

  ngOnInit() {}
}