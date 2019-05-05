import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListingsRoutingModule } from './job-listings-routing.module';
import { JobListingsComponent } from './job-listings.component';
import { SharedModule } from '../shared/shared.module';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  declarations: [JobListingsComponent, SidePanelComponent],
  imports: [
    CommonModule,
    JobListingsRoutingModule,
    SharedModule,
  ]
})
export class JobListingsModule { }
