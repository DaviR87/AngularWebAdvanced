import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public coolView: boolean = false;
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      "firstName": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmitReactive() {
    console.log(this.form.getRawValue());
  }

  clear() {
    this.form.reset();
  }

}
