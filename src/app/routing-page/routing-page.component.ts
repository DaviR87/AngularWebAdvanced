import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-page',
  templateUrl: './routing-page.component.html',
  styleUrls: ['./routing-page.component.scss']
})
export class RoutingPageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  alternativeRouting() {
    const randomNumber = (Math.random()*100).toFixed(0);
    this.router.navigate(['/secret-page', randomNumber])
  }

}
