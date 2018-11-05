import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {StreetsService} from '../../services/streets.service';
import {DataService} from '../../services/data.service';
import IntersectionModel from '../../models/intersection.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  streetsForm = new FormGroup({
    calle1: new FormControl(),
    calle2: new FormControl()
  });

  constructor(
    private streetsService: StreetsService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    const intersection = new IntersectionModel(form.controls.calle1.value, form.controls.calle2.value);
    this.dataService.getIntersection(intersection)
      .subscribe(
        result => console.log(result)
      )
  }

}
