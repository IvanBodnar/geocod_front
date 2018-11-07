import {Injectable, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreetsService implements OnInit {
  streetsArray: string[];

  static _cleanString(string: string): string {
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
        }
      );
  }

  ngOnInit(): void { }

  getFilteredStreets(filter: string): Observable<string[]> {
    filter = StreetsService._cleanString(filter);
    const filtered = this.streetsArray.filter(  street => {
      return street !== null ? StreetsService._cleanString(street).includes(filter) : false;
    });

    // Fixed: close datalist when street is selected
    if (filtered.length === 1 && StreetsService._cleanString(filtered[0]) === filter) {
      return of([]);
    }
    return of(
      filtered
        .slice(0, 10)
        .sort(
          (streetA, streetB) => {
            streetA = StreetsService._cleanString(streetA);
            streetB = StreetsService._cleanString(streetB);
            return streetA.startsWith(filter) ? -1 : streetB.startsWith(filter) ? 1 : 0;
          }
        )
    );
  }


}
