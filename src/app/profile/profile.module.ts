import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileComponent} from './profile.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule
} from '@angular/material';
import {CreateSectionComponent} from './create-section/create-section.component';
import {CreateFacultyComponent} from './create-faculty/create-faculty.component';
import {CreateAuditoryComponent} from './create-auditory/create-auditory.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  declarations: [
    ProfileComponent,
    CreateSectionComponent,
    CreateFacultyComponent,
    CreateAuditoryComponent
  ]
})
export class ProfileModule {
}
