import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuditOverviewComponent} from './audit-overview.component';
import {HomeAuditComponent} from './home-audit/home-audit.component';
import {FacultyItemComponent} from './faculty-item/faculty-item.component';

const routes: Routes = [{
  path: '',
  component: AuditOverviewComponent,
  children: [
    {path: '', component: HomeAuditComponent},
    {path: ':id', component: FacultyItemComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditOverviewRoutingModule {
}
