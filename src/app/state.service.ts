import { Injectable } from '@angular/core';
import { State } from './state.model';
// import { ALBUMS } from './mock-states';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class StateService {
  states: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.states = database.list('states');
  }

  getStates() {
    return this.states;
  }

  addState(newState: State) {
    this.states.push(newState);
  }
  getStateById(stateId: string){
    return this.database.object('/states/' + stateId);
  }
}
