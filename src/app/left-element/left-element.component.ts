import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-left-element',
  templateUrl: './left-element.component.html',
  styleUrls: ['./left-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeftElementComponent implements OnInit {
  @Input()
  public places;

  public title = 'Righteous indignation & like';

  public changeImg(ev){
    console.log(ev);
  }

  constructor() { }

  ngOnInit() {
  }

}
