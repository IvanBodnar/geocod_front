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
  ) {
    this.dataService.getStreets()
      .subscribe(
        data => {
          this.streetsArray = data;
        }
      );
  }

  ngOnInit(): void {

  }

}
