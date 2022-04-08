import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyChildOfLazyChildComponent } from './lazy-child-of-lazy-child/lazy-child-of-lazy-child.component';
import { LazyChildComponent } from './lazy-child.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LazyChildComponent,
    children: [
      {
        path: 'lazy-child-of-lazy-child',
        component: LazyChildOfLazyChildComponent
      },
      {
        path: '**',
        redirectTo: 'lazy-child'
      }
    ]
  }
];

const COMPONENTS = [
  LazyChildComponent,
  LazyChildOfLazyChildComponent
];

const DIRECTIVES = [
  
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
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
export class LazyChildModule { }