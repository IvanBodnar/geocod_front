import {Component, Input, OnInit} from '@angular/core';
import {StreetsService} from '../../services/streets.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(
    private streetsService: StreetsService
  ) { }

  ngOnInit() {
  }

  onInput(event: any): void {
    const filter = this.streetsService.getFilteredStreets(event.target.value);
    console.log(filter);
  }
}
