import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {Section} from '../../models/Section.model';
import {Faculty} from '../../models/Faculty.model';
import {Subscription} from 'rxjs';
import {Auditory} from '../../models/Auditory.model';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit, OnDestroy {
  isEdit = false;

  nameField: string;
  logoField: string;
  emailField: string;
  phoneField: string;
  webSiteField: string;
  sections: Section[];
  selectedSection = [];

  allFaculties: Faculty[];

  private facultySubscription: Subscription = null;

  // private auditoriesSubscription: Subscription = null;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    // this.dataStorageService.getSectionsList().subscribe((sections: Section[]) => {
    //   this.sections = sections;
    // });
    //
    // this.dataStorageService.getFacultiesData().subscribe((faculties: Faculty[]) => {
    //   this.allFaculties = faculties;
    // });

    this.facultySubscription = this.dataStorageService.facultiesSubscription.subscribe((faculties: Faculty[]) => {
      this.allFaculties = faculties;
    });

    // this.auditoriesSubscription = this.dataStorageService.auditoriesSubscription.subscribe((faculties: Auditory[]) => {
    //   this.a = faculties;
    // });
  }


  ngOnDestroy() {
    if (this.facultySubscription) {
      this.facultySubscription.unsubscribe();
    }
  }

  public cancelEdit() {
    this.nameField = '';
    this.logoField = '';
    this.emailField = '';
    this.phoneField = '';
    this.webSiteField = '';
    this.sections = [];
    this.selectedSection = [];
    this.isEdit = false;
  }

}
