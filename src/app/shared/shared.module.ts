import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {MockService} from './mock.service';
import {DataStorageService} from '../services/data-storage.service';
import {RouterModule} from '@angular/router';
import {TypeAuditoryPipe} from '../pipes/type-auditory.pipe';
import {AuthService} from '../services/auth.service';
import {CanActivateService} from '../services/can-activate.service';
import {ConfigService} from '../services/config.service';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule
  ],
  declarations: [
    HeaderComponent,
    TypeAuditoryPipe
  ],
  exports: [
    CommonModule,

    HeaderComponent,
    RouterModule,

    TypeAuditoryPipe
  ],
  providers: [
    MockService,
    ConfigService,
    CanActivateService
  ]
})
export class SharedModule {
}
