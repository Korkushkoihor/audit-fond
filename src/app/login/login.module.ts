import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {SharedModule} from '../shared/shared.module';
import {LoginByEmailAndPassComponent} from './login-by-email-and-pass/login-by-email-and-pass.component';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    LoginComponent,
    LoginByEmailAndPassComponent
  ]
})
export class LoginModule {
}
