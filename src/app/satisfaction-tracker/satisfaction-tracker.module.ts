import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SatisfactionTrackerService } from './satisfaction-tracker.service';


@NgModule({
  declarations: [
    // Components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [],
  providers: [
    SatisfactionTrackerService
  ]
})
export class SatisfactionTrackerModule { }
