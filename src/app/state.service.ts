import { Injectable } from '@angular/core';
import { State } from './state.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class StateService {
  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
  }

  getStates(){
  return this.albums;
}
}
