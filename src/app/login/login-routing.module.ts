import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {LoginByEmailAndPassComponent} from './login-by-email-and-pass/login-by-email-and-pass.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [
    {path: '', component: LoginByEmailAndPassComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
