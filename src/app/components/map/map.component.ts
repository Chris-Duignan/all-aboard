import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from "leaflet"
import { MarkerService } from 'src/app/services/markers/marker.service';
import { Output, EventEmitter } from '@angular/core';
import { threadId } from 'worker_threads';


const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
 
  @Input() meets: any;
  @Output() myOutputValue = new EventEmitter()
lastClick: any

  private map: any;

  private initMap():void {
    this.map = L.map("map", {
      center: [53.472324470503466, -2.2385631146457268],
      zoom: 15
    })
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 25,
      minZoom: 1,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeMarkers(this.map)
    this.map.on("click", (e: any) => {
    
      this.myOutputValue.emit(e.latlng)
     
    })

    
  }


}
