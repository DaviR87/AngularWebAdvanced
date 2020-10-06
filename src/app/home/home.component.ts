import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
