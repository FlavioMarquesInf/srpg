import { Component, OnInit } from '@angular/core';
import { SatisfactionTrackerService } from '../satisfaction-tracker.service';

@Component({
  selector: 'app-satisfaction-tracker-overview',
  templateUrl: './satisfaction-tracker-overview.page.html',
  styleUrls: ['./satisfaction-tracker-overview.page.scss'],
})
export class SatisfactionTrackerOverviewPage implements OnInit {

  constructor( private satisfactionTrackerService: SatisfactionTrackerService ) { }

  ngOnInit() {
  }

}
