import { Component, OnInit } from '@angular/core';
import { Health } from 'src/app/models/health';

@Component({
  selector: 'app-previous-visit-details',
  templateUrl: './previous-visit-details.component.html',
  styleUrls: ['../../css/main.css']
})
export class PreviousVisitDetailsComponent implements OnInit {

  data: Health;
  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('visit-details'));
  }

}
