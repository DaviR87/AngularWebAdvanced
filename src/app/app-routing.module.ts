import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormExamplesPageComponent } from './pages/form-examples-page/form-examples-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoutingPageComponent } from './pages/routing-page/routing-page.component';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';
import { ServiceExamplesPageComponent } from './pages/service-examples-page/service-examples-page.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'form-examples', component: FormExamplesPageComponent },
  { path: 'routing-page', component: RoutingPageComponent },
  { path: 'secret-page/:id', component: SecretPageComponent, canActivate: [AuthGuard] },
  { path: 'service-page', component: ServiceExamplesPageComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
