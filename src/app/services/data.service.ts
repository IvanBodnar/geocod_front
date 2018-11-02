import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000/';

  constructor( private http: HttpClient ) {  }

  getStreets(): Observable<string[]> {
    return this.http.get<string[]>(this.url + 'streets');
  }

}
