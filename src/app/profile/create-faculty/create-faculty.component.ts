import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {Section} from '../../models/Section.model';
import {Faculty} from '../../models/Faculty.model';

@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {
  isEdit = false;

  nameField: string;
  logoField: string;
  emailField: string;
  phoneField: string;
  webSiteField: string;

  sections: Section[];
  selectedSection = [];

  allFaculties: Faculty[];

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.dataStorageService.getSectionsList().subscribe((sections: Section[]) => {
      this.sections = sections;
    });

    this.dataStorageService.getFacultiesData().subscribe((faculties: Faculty[]) => {
      this.allFaculties = faculties;
    });
  }

}
