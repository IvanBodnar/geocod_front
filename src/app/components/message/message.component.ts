import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MapService} from '../../services/map.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msgClasses = {
    ui: true,
    message: true,
    hidden: true
  };
  header: string;
  body: string;

  constructor(
    private mapService: MapService
  ) {  }

  ngOnInit() {
    this.mapService.showMapError
      .subscribe(
        error => this.showErrorMessage(error)
      );
  }

  showErrorMessage(error: HttpErrorResponse): void {
    Object.assign(this.msgClasses, { negative: true });
    this.msgClasses.hidden = false;
    this.header = 'Error';
    this.body = error.error.error;
    console.log(this);
  }

}
