import { Component, OnInit } from '@angular/core';
import { State } from '../state.model';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
  states: FirebaseListObservable<any[]>;

  constructor(private router: Router){}

  ngOnInit(){
    this.states = this.statesService.getStates();
  }

  // states: State[] = [
  //   new State("Alabama", 1),
  //   new State("Alaska", 2),
  //   new State("Arizona", 3),
  //   new State("Arkansas", 4),
  //   new State("California", 5),
  //   new State("Colorado", 6),
  // ];

  goToDetailPage(clickedState) {
    this.router.navigate(['states', clickedState.$key]);
  };
}
