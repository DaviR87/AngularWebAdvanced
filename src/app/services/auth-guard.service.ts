import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { StateService } from './state.service';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

@Injectable()
export class AuthGuard implements CanActivate, CanDeactivate<CanComponentDeactivate> {

    constructor(
        private stateService: StateService
    ) {

    }
  canActivate() {
    if (this.stateService.getSuperUserState()) {
        return true;
    } else {
        console.log(`You are not authorized to view this page!`);
        alert('Not authorized!');
        return false;
    }
  }

  canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
