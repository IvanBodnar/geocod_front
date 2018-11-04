import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formGroup = new FormGroup({
    calle1: new FormControl(),
    calle2: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log(form);
  }

}
