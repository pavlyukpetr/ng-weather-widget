import { Component, ViewEncapsulation } from '@angular/core';
import { LeftElementComponent } from './left-element/left-element.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';

import {Place} from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Hot Weather Widget';

  public selectedPlace: Place;
  public type:string = 'hotel';

  public onSelect(item){//пришло событие из app-left-element
    this.selectedPlace = item;
    console.log(item);
  }

  public places: Place[] = [
    {
      name: 'Hotel 1',
      phone: '+1 111 111 1111',
      temp: 15,
      followers: 254,
      following: 12,
      img1: 'assets/images/1.jpg',
      img2: 'assets/images/b1.jpg',
      type: 'hotel'
    },
    {
      name: 'Fishing 1',
      phone: '+1 222 222 2222',
      temp: 20,
      followers: 24,
      following: 102,
      img1: 'assets/images/2.jpg',
      img2: 'assets/images/b2.jpg',
      type: 'fishing'
    },
    {
      name: 'Tours 1',
      phone: '+1 333 333 3333',
      temp: 30,
      followers: 414,
      following: 1200,
      img1: 'assets/images/3.jpg',
      img2: 'assets/images/b3.jpg',
      type: 'tours'
    }
  ]
}
