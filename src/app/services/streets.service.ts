import {Injectable, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreetsService implements OnInit {
  streetsArray: string[];

  _cleanString(string: string): string {
    const termsArray = string.toLowerCase().replace(',', '').split(' ');
    return termsArray.join('');
  }

  constructor(
    private dataService: DataService
  ) {}

  init() {
    this.dataService.getStreets()
      .subscribe(
        data => {
          this.streetsArray = data;
          // console.log('streetService: ', this.streetsArray);
        }
      );
  }

  ngOnInit(): void { }

  getFilteredStreets(filter: string): Observable<string[]> {
    const filtered = this.streetsArray.filter(  street => {
      return street !== null ? this._cleanString(street).includes(this._cleanString(filter)) : false;
    });
    return of(filtered.slice(0, 10));
  }


}
