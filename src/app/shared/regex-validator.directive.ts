import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[regexValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RegexValidatorDirective, multi: true}]
})
export class RegexValidatorDirective implements Validator {
  @Input('regexValidator') regExp: RegExp;

  validate(control: AbstractControl): {[key: string]: any} | null {
    const forbidden = this.regExp.test(control.value);
    return forbidden ? {'forbidden': {value: control.value}} : null;
  }
}