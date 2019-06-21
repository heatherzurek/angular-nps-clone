import { Component, OnInit } from '@angular/core';
import { State } from '../state.model';
import { StateService } from '../state.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent {

  constructor(private router: Router){}

  states: State[] = [
    new State("Alabama", 1),
    new State("Alaska", 2),
    new State("Arizona", 3),
    new State("Arkansas", 4),
    new State("California", 5),
    new State("Colorado", 6),
  ];

  goToDetailPage(clickedState: State) {
    this.router.navigate(['states', clickedState.id]);
  };
}
