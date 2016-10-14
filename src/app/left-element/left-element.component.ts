import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftElementComponent implements OnInit {
  public title = 'Righteous indignation & like';

  public places = [
    {
      phone: '+1 111 111 1111',
      img1: 'assets/images/1.jpg',
      img2: 'assets/images/b1.jpg'
    },
    {
      phone: '+1 222 222 2222',
      img1: 'assets/images/2.jpg',
      img2: 'assets/images/b2.jpg'
    },
    {
      phone: '+1 333 333 3333',
      img1: 'assets/images/3.jpg',
      img2: 'assets/images/b3.jpg'
    }
  ]

  public changeImg(ev){
    console.log(ev);
  }

  constructor() { }

  ngOnInit() {
  }

}
