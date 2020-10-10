import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { RegexValidatorDirective } from './regex-validator.directive';

const COMPONENTS = [

];
const DIRECTIVES = [
    RegexValidatorDirective
];

const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
  MatCardModule,
  MatChipsModule,
  MatToolbarModule,
  MatDividerModule
]

@NgModule({
    imports: [
      ...ANGULAR_MATERIAL_MODULES,
    ],
    declarations: [
      ...COMPONENTS,
      ...DIRECTIVES,
    ],
    exports: [
      ...COMPONENTS,
      ...DIRECTIVES,
      ...ANGULAR_MATERIAL_MODULES
    ],
    providers: [
    ]
  })
  export class SharedModule { }