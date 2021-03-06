import { Component, OnInit } from '@angular/core';
import { StreetsService } from '../../services/streets.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private streetService: StreetsService
  ) { }

  ngOnInit() { }

}
