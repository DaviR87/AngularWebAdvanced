import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-of-lazy-child',
  templateUrl: './child-of-lazy-child.component.html',
  styleUrls: ['./child-of-lazy-child.component.scss']
})
export class ChildOfLazyChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
