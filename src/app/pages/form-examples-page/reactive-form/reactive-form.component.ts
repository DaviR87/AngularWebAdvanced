import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public coolView: boolean = false;
  form: FormGroup;
  dataToSubmit = null;
  submitteDate: Date = null;

  constructor() {
    this.form = new FormGroup({
      "username": new FormControl('MarioRossi', [Validators.required, this.regexValidator(new RegExp(/^\d+$/))]),
      "password": new FormControl('', [Validators.required]),
      "remember": new FormControl('true'),
      "gender": new FormControl(''),
      "streets": new FormArray([])
    });
  }

  ngOnInit() {
    console.log(this.form.controls['username'].value);
    this.form.controls['gender'].valueChanges.subscribe(val => {
      console.log('Gender changed! Now you are a ' + val)
    });
  }

  onSubmitReactive() {
    this.dataToSubmit = null;
    this.submitteDate = new Date();
    this.dataToSubmit = this.form.getRawValue();
  }

  clear() {
    (this.form.get('streets') as FormArray).clear();
    this.form.reset();
  }

  addStreet() {
    const streetsArray = this.form.get('streets') as FormArray;
    streetsArray.push(new FormControl('', Validators.required));
  }

  removeStreet(i: number) {
    const streetsArray = this.form.get('streets') as FormArray;
    streetsArray.removeAt(i);
  }

  regexValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = regex.test(control.value);
      return forbidden ? {'forbidden': {value: control.value}} : null;
    };
  }
  

}
