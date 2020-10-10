import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyChildComponent } from './lazy-child.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LazyChildComponent,
  }
];

const COMPONENTS = [
  LazyChildComponent
];
const DIRECTIVES = [
  
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)
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