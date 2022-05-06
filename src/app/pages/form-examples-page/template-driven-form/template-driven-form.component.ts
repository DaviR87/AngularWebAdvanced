import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  public coolView: boolean = false;

  public user: LoginData = new LoginData();

  // Not only numbers RegExp
  public regEx: RegExp = new RegExp(/^\d+$/)

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.user = new LoginData();
  }

  onSubmitTemplateBased(form: NgForm) {
    console.log(form.value);
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