import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyPageComponent } from './lazy-page.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { AnotherLazyChildComponent } from './another-lazy-child/another-lazy-child.component';
import { SharedModule } from 'src/app/shared/shared.module';

const ROUTES: Routes = [
  {
    path: '',
    component: LazyPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'lazy-child'
      },
      {
        path: 'lazy-child',
        loadChildren: () => import('./lazy-child/lazy-child.module').then(m => m.LazyChildModule)
      },
      {
        path: 'another-lazy-child',
        loadChildren: () => import('./another-lazy-child/another-lazy-child.module').then(m => m.AnotherLazyChildModule)
      },
      {
        path: '**',
        redirectTo: 'lazy-child'
      }
    ]
  }
];

const COMPONENTS = [
  LazyPageComponent
];
const DIRECTIVES = [
  
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  providers: [
  ]
})
export class LazyModule { }