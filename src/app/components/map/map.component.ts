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
  layer: any;
  mb = 'pk.eyJ1IjoiaXZhbmdib2RuYXIiLCJhIjoiY2pvNm16ZDQ1MG1yMzN2cGEyMHV1bjl1YSJ9.LOfRdnXTDUUmGIz2K4RltA';

  constructor(
    private mapService: MapService
  ) { }

  ngOnInit() {
    const map = L.map('map', {zoomControl: false}).setView([-34.612443, -58.447531], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
        ' <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.high-contrast',
      accessToken: this.mb
    }).addTo(map);

    this.mapService.updateMarker
      .subscribe(
        (point: IntersectionPoint) => {
          if (this.layer) { this.layer.remove(); }
          const coords = point.getLatLong();
          this.layer = L.marker(coords).addTo(map);
          map.flyTo(coords, 17);
        },
        error => console.log(error)
      );
  }

}
