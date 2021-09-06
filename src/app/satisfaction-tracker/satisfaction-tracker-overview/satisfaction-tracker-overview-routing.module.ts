import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SatisfactionTrackerOverviewPage } from './satisfaction-tracker-overview.page';

const routes: Routes = [
  {
    path: '',
    component: SatisfactionTrackerOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatisfactionTrackerOverviewPageRoutingModule {}
