import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HighlightDirective } from './highlight.directive';
import { RegexValidatorDirective } from './regex-validator.directive';

const COMPONENTS = [
];

const DIRECTIVES = [
  RegexValidatorDirective,
  HighlightDirective
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