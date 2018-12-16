import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CanActivateService} from './services/can-activate.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'overview',
    loadChildren: './audit-overview/audit-overview.module#AuditOverviewModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [CanActivateService]
  },
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
