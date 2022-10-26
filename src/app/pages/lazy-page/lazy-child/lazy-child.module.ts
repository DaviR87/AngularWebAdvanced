import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChildOfLazyChildComponent } from './child-of-lazy-child/child-of-lazy-child.component';
import { LazyChildComponent } from './lazy-child.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LazyChildComponent,
    children: [
      {
        path: 'child-of-lazy-child',
        component: ChildOfLazyChildComponent
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
  ChildOfLazyChildComponent
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