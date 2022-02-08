import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-lazy-child',
  templateUrl: './another-lazy-child.component.html',
  styleUrls: ['./another-lazy-child.component.scss']
})
export class AnotherLazyChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
