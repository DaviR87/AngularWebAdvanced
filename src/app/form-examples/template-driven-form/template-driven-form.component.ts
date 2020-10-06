import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public user: LoginData = new LoginData();
  public coolView: boolean = true;

  // Not only numbers RegExp
  public regEx: RegExp = new RegExp(/^\d+$/)

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.user = new LoginData();
  }

  onSubmitTemplateBased() {
    console.log(this.user);
  }


}

export class LoginData {
  firstName: string;
  password: string;

  constructor() {
    this.firstName = '';
    this.password = '';
  }

}