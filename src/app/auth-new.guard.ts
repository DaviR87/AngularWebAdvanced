import { CanActivateFn } from '@angular/router';
import { StateService } from './services/state.service';
import { inject } from '@angular/core';

export const canActivateGuard: CanActivateFn = (route, state) => {
    if (inject(StateService).getSuperUserState()) {
      return true;
    } else {
      console.log(`You are not authorized to view this page!`);
      alert('Not authorized!');
      return false;
    }
};
