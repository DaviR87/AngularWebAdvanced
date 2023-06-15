import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';

export interface UserForm {
  username: FormControl<string>,
  password: FormControl<string>,
  remember: FormControl<boolean>,
  gender: FormControl<string>,
  streets: FormArray<FormControl<string>>
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  public coolView: boolean = false;
  form: FormGroup<UserForm>;
  dataToSubmit = null;
  submitteDate: Date = null;

  constructor() {
    this.form = new FormGroup<UserForm>({
      "username": new FormControl<string>('MarioRossi', [Validators.required, this.regexValidator(new RegExp(/^\d+$/))]),
      "password": new FormControl<string>('', [Validators.required]),
      "remember": new FormControl<boolean>(true),
      "gender": new FormControl<string>(''),
      "streets": new FormArray([])
    });
  }

  ngOnInit() {
    console.log(this.form.controls.username.value);
    this.form.controls.gender.valueChanges.subscribe(val => {
      console.log('Gender changed! Now you are a ' + val)
    });
  }

  onSubmitReactive() {
    this.dataToSubmit = null;
    this.submitteDate = new Date();
    this.dataToSubmit = this.form.getRawValue();
  }

  clear() {
    this.form.controls.streets.clear();
    this.form.reset();
  }

  addStreet() {
    const streetsArray = this.form.controls.streets;
    streetsArray.push(new FormControl<string>('', Validators.required));
  }

  removeStreet(i: number) {
    const streetsArray = this.form.controls.streets;
    streetsArray.removeAt(i);
  }

  regexValidator(regex: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = regex.test(control.value);
      return forbidden ? {'forbidden': {value: control.value}} : null;
    };
  }
  

}
