import { Component } from '@angular/core';
import {StreetsService} from './services/streets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'geocod-front';

  constructor(
    private streetService: StreetsService
  ) {
    this.streetService.init();
  }
}
