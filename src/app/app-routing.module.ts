import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { HomeComponent } from './home/home.component';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { SecretPageComponent } from './secret-page/secret-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'form-examples', component: FormExamplesComponent },
  { path: 'routing-page', component: RoutingPageComponent },
  { path: 'secret-page/:id', component: SecretPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
