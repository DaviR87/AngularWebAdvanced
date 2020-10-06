import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecretPageComponent } from './secret-page/secret-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './form-examples/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form-examples/reactive-form/reactive-form.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from './shared/shared.module';

const MAT_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecretPageComponent,
    FormExamplesComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    ...MAT_MODULES,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Necessary module for Reactive Form!
    ReactiveFormsModule,
    // Necessary module for Template Driven Form!
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
