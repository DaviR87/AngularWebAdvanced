import { NgModule } from '@angular/core';
import { RegexValidatorDirective } from './regex-validator.directive';

const COMPONENTS = [

];
const DIRECTIVES = [
    RegexValidatorDirective
];

@NgModule({
    imports: [
    ],
    declarations: [
      ...COMPONENTS,
      ...DIRECTIVES,
    ],
    exports: [
      ...COMPONENTS,
      ...DIRECTIVES,
    ],
    providers: [
    ]
  })
  export class SharedModule { }