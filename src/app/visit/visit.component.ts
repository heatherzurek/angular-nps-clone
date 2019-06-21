import { Component, OnInit } from '@angular/core';
import { State } from '../state.model';
import { Router } from '@angular/router';
import { StateService } from '../state.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css'],
  providers: [StateService]
})
export class VisitComponent implements OnInit {
  states: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private stateService: StateService){}

  ngOnInit(){
    this.states = this.stateService.getStates();
  }

  goToDetailPage(clickedState) {
    this.router.navigate(['states', clickedState.$key]);
  };
}
