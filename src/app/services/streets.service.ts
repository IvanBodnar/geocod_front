import {Injectable, OnInit} from '@angular/core';
import { DataService } from './data.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreetsService implements OnInit {
  streetsArray: string[];

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

  getFilteredStreets(filter: string): string[] {
    const filtered = this.streetsArray.filter(  street => {
      return street !== null ? street.includes(filter.toLowerCase()) : false;
    });
    return filtered.slice(0, 10);
  }
}
