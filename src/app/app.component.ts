import { Component, ViewEncapsulation } from '@angular/core';
import { LeftElementComponent } from './left-element/left-element.component';
import { TemperaturComponent } from './temperatur/temperatur.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Hot Weather Widget';

  public places = [
    {
      phone: '+1 111 111 1111',
      temp: '15',
      img1: 'assets/images/1.jpg',
      img2: 'assets/images/b1.jpg'
    },
    {
      phone: '+1 222 222 2222',
      temp: '20',
      img1: 'assets/images/2.jpg',
      img2: 'assets/images/b2.jpg'
    },
    {
      phone: '+1 333 333 3333',
      temp: '30',
      img1: 'assets/images/3.jpg',
      img2: 'assets/images/b3.jpg'
    }
  ]
}
