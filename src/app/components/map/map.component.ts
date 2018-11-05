import { Component, OnInit } from '@angular/core';

import { MapService } from '../../services/map.service';
import {IntersectionPoint} from '../../models/intersection.model';

declare const L;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit() {
    const map = L.map('map').setView([-34.612443, -58.447531], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.mapService.updateMarker
      .subscribe(
        (point: IntersectionPoint) => {
          L.marker(point.getLatLong()).addTo(map);
        },
        error => console.log(error)
      );
  }

}
