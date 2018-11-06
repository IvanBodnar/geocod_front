import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MapService} from '../../services/map.service';

declare const $;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msgClasses = {
    ui: true,
    message: true,
    hide: true,
    show: false,
    remove: false
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
    this.msgClasses.remove = false;
    this.msgClasses.hide = false;
    this.msgClasses.show = true;
    this.header = 'Error';
    this.body = error.error.error;

    setTimeout(() => {
      this.closeMessage();
    }, 3000);
  }

  closeMessage() {
    this.msgClasses.hide = true;
    this.msgClasses.show = false;

    setTimeout(() => {
      this.msgClasses.remove = true;
    }, 1000);
  }

}
