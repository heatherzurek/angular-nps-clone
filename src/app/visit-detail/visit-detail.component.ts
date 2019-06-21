import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { State } from '../state.model';

@Component({
  selector: 'app-visit-detail',
  templateUrl: './visit-detail.component.html',
  styleUrls: ['./visit-detail.component.css']
})
export class VisitDetailComponent implements OnInit {
  visitId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    // this.route.params.forEach((urlParameters) => {
    //   this.stateId = parseInt(urlParameters['id']);
    }
}
