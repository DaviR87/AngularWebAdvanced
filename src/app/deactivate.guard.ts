import { CanDeactivateFn } from '@angular/router';
import { SecretPageComponent } from './pages/secret-page/secret-page.component';

export const canDeactivateGuard: CanDeactivateFn<SecretPageComponent> = (component) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
