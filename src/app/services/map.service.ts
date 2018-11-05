import {EventEmitter, Injectable} from '@angular/core';

import { DataService } from './data.service';
import { IntersectionPoint, IntersectionResponse, StreetsToIntersectModel } from '../models/intersection.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  updateMarker = new EventEmitter<IntersectionPoint>();

  constructor(
    private dataService: DataService
  ) { }

  getStreetsToIntersect(streets: StreetsToIntersectModel): void {
    this.dataService.getIntersection(streets)
      .subscribe(
        (intersection: IntersectionResponse) => this.updateMarker.emit(new IntersectionPoint(intersection)),
        error => console.log(error)
      );
  }
}
