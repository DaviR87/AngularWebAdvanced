import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  time: Date = new Date();
  superUserSatus: boolean;
  
  constructor(
    private stateService: StateService,
    private router: Router
  ) {
    setInterval(() => {
      this.time = new Date(); 
     }, 1000);

     this.stateService.superUserState$.subscribe(state => {
      this.superUserSatus = state;
    })
  }

  ngOnInit() {
  }

  switchChange(event: MatSlideToggleChange) {
    this.stateService.setSuperUserState(event.checked);
  }

  goToLazyPage() {
    this.router.navigate(['/lazy-page'])
  }
}
