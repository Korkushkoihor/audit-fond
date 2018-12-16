import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuditOverviewRoutingModule} from './audit-overview-routing.module';
import {AuditOverviewComponent} from './audit-overview.component';
import {SharedModule} from '../shared/shared.module';
import {HomeAuditComponent} from './home-audit/home-audit.component';
import {MatCardModule, MatExpansionModule, MatListModule} from '@angular/material';
import {AuditOverviewService} from '../services/audit-overview.service';
import {FacultyItemComponent} from './faculty-item/faculty-item.component';

@NgModule({
  imports: [
    CommonModule,
    AuditOverviewRoutingModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [
    AuditOverviewComponent,
    HomeAuditComponent,
    FacultyItemComponent
  ],
  providers: [
    AuditOverviewService
  ]
})
export class AuditOverviewModule {
}
