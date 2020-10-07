import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-routing-page',
  templateUrl: './routing-page.component.html',
  styleUrls: ['./routing-page.component.scss']
})
export class RoutingPageComponent implements OnInit {
  superUserSatus: boolean;

  constructor(
    private router: Router,
    private backendService: BackendService,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.superUserState$.subscribe(state => {
      this.superUserSatus = state;
    })
  }

  alternativeRouting() {
    const randomNumber = (Math.random()*100).toFixed(0);
    this.router.navigate(['/secret-page', randomNumber])
  }

  switchChange(event: MatSlideToggleChange) {
    this.stateService.setSuperUserState(event.checked);

  }

}
