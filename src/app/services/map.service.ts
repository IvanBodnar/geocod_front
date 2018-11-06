import {EventEmitter, Injectable} from '@angular/core';

import { DataService } from './data.service';
import { IntersectionPoint, IntersectionResponse, StreetsToIntersectModel } from '../models/intersection.model';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapService {
  updateMarker = new EventEmitter<IntersectionPoint>();
  showMapError = new EventEmitter<HttpErrorResponse>();

  constructor(
    private dataService: DataService
  ) { }

  getStreetsToIntersect(streets: StreetsToIntersectModel): void {
    this.dataService.getIntersection(streets)
      .subscribe(
        (intersection: IntersectionResponse) => this.updateMarker.emit(new IntersectionPoint(intersection)),
        error => this.showMapError.emit(error)
      );
  }
}
