import {Component, Input, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';

import {StreetsService} from '../../services/streets.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  datalistOptions: string[];

  constructor(
    private streetsService: StreetsService
  ) { }

  ngOnInit() {
  }

  onInput(event: Event): void {
    const filteredStreetsObservable = this.streetsService.getFilteredStreets( (<HTMLInputElement>event.target).value );
    filteredStreetsObservable
      .subscribe(
        filteredStreets => this.datalistOptions = filteredStreets,
        error => console.log(error)
      );
  }
}
