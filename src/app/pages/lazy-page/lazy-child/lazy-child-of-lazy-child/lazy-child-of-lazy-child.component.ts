import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-child-of-lazy-child',
  templateUrl: './lazy-child-of-lazy-child.component.html',
  styleUrls: ['./lazy-child-of-lazy-child.component.scss']
})
export class LazyChildOfLazyChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
