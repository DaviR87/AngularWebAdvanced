import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  superUserState$: Observable<boolean>;
  private superUserState = new BehaviorSubject<boolean>(false);

  constructor() {
    this.superUserState$ = this.superUserState.asObservable();
  }

  setSuperUserState(state: boolean) {
    this.superUserState.next(state);
  }

  getSuperUserState(): boolean {
    return this.superUserState.value;
  }
}
