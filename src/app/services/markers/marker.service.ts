import { Injectable } from '@angular/core';
import * as L from "leaflet"
import { EventsService } from '../events/events.service';
import { PopupService } from '../popup.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private eventsService: EventsService, private popupService: PopupService) {}

  makeMarkerOnClick(map: L.Map, latlng: {lat: number, lng: number}): void {
    const marker = L.marker([latlng.lat, latlng.lng])
    marker.addTo(map);
  }
  makeMarkers(map: L.Map): void {
      this.eventsService.getEvents().subscribe((meets) => {
        meets.map((meet) => {
          meet.latitude = parseFloat(meet.latitude);
          meet.longitude = parseFloat(meet.longitude);
        });
        for (const location of meets) {
          const marker = L.marker([location.latitude, location.longitude])
          marker.bindPopup(this.popupService.makeMeetPopup(location))
          marker.addTo(map);
        }
      });
  }
}
