import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  msgClasses = {
    ui: true,
    message: true,
    hidden: false,
    negative: true
  };
  header: string;
  body: string;

  constructor() { }

  ngOnInit() {
  }

}
