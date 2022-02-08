import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormExamplesPageComponent } from './pages/form-examples-page/form-examples-page.component';
import { ReactiveFormComponent } from './pages/form-examples-page/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './pages/form-examples-page/template-driven-form/template-driven-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingPageComponent } from './pages/routing-page/routing-page.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { ServiceExamplesPageComponent } from './pages/service-examples-page/service-examples-page.component';
import { SharedModule } from './shared/shared.module';

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
