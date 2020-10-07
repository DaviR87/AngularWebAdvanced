import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './pages/form-examples-page/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './pages/form-examples-page/reactive-form/reactive-form.component';
import { SharedModule } from './shared/shared.module';
import { RoutingPageComponent } from './pages/routing-page/routing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './services/backend.service';
import { ServiceExamplesPageComponent } from './pages/service-examples-page/service-examples-page.component';
import { FormExamplesPageComponent } from './pages/form-examples-page/form-examples-page.component';

import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSlideToggleModule, MatTableModule, MatCardModule, MatChipsModule, MatToolbarModule, MatDividerModule } from '@angular/material';


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
  declarations: [
    AppComponent,
    HomePageComponent,
    SecretPageComponent,
    FormExamplesPageComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    RoutingPageComponent,
    ServiceExamplesPageComponent
  ],
  imports: [
    ...ANGULAR_MATERIAL_MODULES,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // Mandatory module for Reactive Form
    ReactiveFormsModule,
    // Mandatory module for Template Driven Form
    FormsModule,
    // Mandatory module for using Angular http API
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
