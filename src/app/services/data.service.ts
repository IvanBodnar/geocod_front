import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

import { Observable } from 'rxjs';
import { IntersectionResponse, StreetsToIntersectModel } from '../models/intersection.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.baseUrl;

  constructor( private http: HttpClient ) {  }

  getStreets(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'streets');
  }

  getIntersection(intersection: StreetsToIntersectModel): Observable<IntersectionResponse> {
    const params = new HttpParams().set('street1', intersection.street1).set('street2', intersection.street2);
    return this.http.get<IntersectionResponse>(this.url + 'intersection', {params: params});
  }

}
