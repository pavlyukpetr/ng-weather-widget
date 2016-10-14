import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperatur',
  templateUrl: './temperatur.component.html',
  styleUrls: ['./temperatur.component.css']
})
export class TemperaturComponent implements OnInit {
  @Input()
  public places;
  
  public title = 'Temperature';

  constructor() { }

  ngOnInit() {
  }

}
