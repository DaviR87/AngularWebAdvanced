import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LazyPageComponent } from './lazy-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LazyPageComponent,
    children: [
      {
        path: 'lazy-child',
        loadChildren: () => import('./lazy-child/lazy-child.module').then(m => m.LazyChildModule)
      },
      {
        path: 'another-lazy-child',
        loadChildren: () => import('./another-lazy-child/another-lazy-child.module').then(m => m.AnotherLazyChildModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    LazyPageComponent
  ],
  exports: [
    LazyPageComponent
  ],
  providers: [
  ]
})
export class LazyModule { }