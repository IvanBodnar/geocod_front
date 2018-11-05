import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import {IntersectionPoint, IntersectionResponse, StreetsToIntersectModel} from '../models/intersection.model';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(
    private dataService: DataService
  ) { }

  getStreetsToIntersect(streets: StreetsToIntersectModel): void {
    this.dataService.getIntersection(streets)
      .subscribe(
        (intersection: IntersectionResponse) => console.log(new IntersectionPoint(intersection).getLatLong()),
        error => console.log(error)
      );
  }
}
