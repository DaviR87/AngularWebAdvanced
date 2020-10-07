import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { BackendService } from './backend.service';
import { StateService } from './state.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private stateService: StateService
    ) {

    }
  canActivate() {
    if (this.stateService.getSuperUserState()) {
        return true;
    } else {
        console.log(`You are not authorized to view this page!`);
        // this.router.navigate(['/unauthorized']);
        alert('Not authorized!');
        return false;
    }
  }
}
