import { Injectable } from '@angular/core';
import { State } from './state.model';

@Injectable()
export class StateService {

  constructor() { }

  getStates() {
    return STATES;
  }

}
