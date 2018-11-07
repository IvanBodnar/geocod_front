import {Component, Input, OnInit} from '@angular/core';

import {StreetsService} from '../../services/streets.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() id: number;
  @Input() parent: FormGroup;
  controlName: string;
  datalistOptions: string[];

  constructor(
    private streetsService: StreetsService
  ) { }

  ngOnInit() {
    this.controlName = 'calle' + this.id;
  }

  onInput(event: Event): void {
    const filteredStreetsObservable = this.streetsService.getFilteredStreets( (<HTMLInputElement>event.target).value );
    filteredStreetsObservable
      .subscribe(
        filteredStreets => this.datalistOptions = filteredStreets,
        error => console.log(error)
      );
  }

  clearInput() {
    this.parent.controls[this.controlName].setValue(null);
  }
}
