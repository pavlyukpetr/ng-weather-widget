import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import {Place} from '../shared';

@Component({
  selector: 'app-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftElementComponent implements OnInit {
  @Input()//пришло из app
  public places;

  @Output() // ушло в app
  public currentEmitter: EventEmitter<any> = new EventEmitter();

  public title = 'Righteous indignation & like';
  public selectedPlace;

  public type = 'hotel';

  public changePlace(item){
    console.log('changePlace');
    this.selectedPlace = item;
    this.currentEmitter.emit(item)
  }

  constructor() { }

  ngOnInit() {
    this.changePlace(this.places[0]);
  }

}
