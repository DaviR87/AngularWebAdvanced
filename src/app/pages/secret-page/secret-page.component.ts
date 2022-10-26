import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secret-page',
  templateUrl: './secret-page.component.html',
  styleUrls: ['./secret-page.component.scss']
})
export class SecretPageComponent implements OnInit {
  public num: number;
  canGo = false;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(param => {
        console.log(param);
        this.num = param['id'];
      })
  }

  canDeactivate() {
    if (this.canGo) {
      return true
    } else {
      alert('Check the checkbox in order to change the page!');
      return false;
    }
  }
}
