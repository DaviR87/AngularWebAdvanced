import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrls: ['./lazy-page.component.scss']
})
export class LazyPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openLazyChild() {
    this.router.navigate(["/lazy-page/lazy-child"]);
  }

  openAnotherLazyChild() {
    this.router.navigate(["/lazy-page/another-lazy-child"]);
  }

}
