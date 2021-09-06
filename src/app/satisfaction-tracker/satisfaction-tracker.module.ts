import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SatisfactionTrackerService } from './satisfaction-tracker.service';



@NgModule({
  declarations: [
    // Components
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    SatisfactionTrackerService
  ]
})
export class SatisfactionTrackerModule { }
