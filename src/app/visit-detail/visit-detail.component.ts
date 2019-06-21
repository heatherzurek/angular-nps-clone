import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { State } from '../state.model';
import { StateService } from '../state.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css'],
  providers: [StateService]
})
export class VisitDetailComponent implements OnInit {
  stateId: string;
  stateToDisplay;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.stateId = urlParameters['id'];
    });
    this.stateToDisplay = this.stateService.getStateById(this.stateId);
  }

}
