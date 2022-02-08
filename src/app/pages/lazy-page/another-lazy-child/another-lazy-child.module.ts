import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherLazyChildComponent } from './another-lazy-child.component';

const ROUTES: Routes = [
  {
    path: '',
    component: AnotherLazyChildComponent,
  }
];

const COMPONENTS = [
    AnotherLazyChildComponent
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
export class AnotherLazyChildModule { }