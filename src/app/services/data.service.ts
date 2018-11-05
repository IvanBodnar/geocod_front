import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import IntersectionModel from '../models/intersection.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/';

  constructor( private http: HttpClient ) {  }

  getStreets(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'streets');
  }

  getIntersection(intersection: IntersectionModel): Observable<IntersectionModel> {
    const params = new HttpParams().set('street1', intersection.street1).set('street2', intersection.street2);
    return this.http.get<IntersectionModel>(this.url + 'intersection', {params: params});
  }

}
