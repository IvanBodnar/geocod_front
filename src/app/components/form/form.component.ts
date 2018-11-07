import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StreetsService} from '../../services/streets.service';
import {DataService} from '../../services/data.service';
import { StreetsToIntersectModel } from '../../models/intersection.model';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  streetsForm = new FormGroup({
    calle1: new FormControl(undefined, [Validators.required]),
    calle2: new FormControl(undefined, [Validators.required])
  });

  constructor(
    private streetsService: StreetsService,
    private dataService: DataService,
    private mapService: MapService
  ) { }

  ngOnInit() { }

  onSubmit(form: FormGroup) {
    const streetsToIntersect = new StreetsToIntersectModel(form.controls.calle1.value, form.controls.calle2.value);
    this.mapService.getStreetsToIntersect(streetsToIntersect);
  }

}
