import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SatisfactionTrackerOverviewPageRoutingModule } from './satisfaction-tracker-overview-routing.module';

import { SatisfactionTrackerOverviewPage } from './satisfaction-tracker-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SatisfactionTrackerOverviewPageRoutingModule
  ],
  declarations: [SatisfactionTrackerOverviewPage]
})
export class SatisfactionTrackerOverviewPageModule {}
