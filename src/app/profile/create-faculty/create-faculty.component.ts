import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {Section} from '../../models/Section.model';
import {Faculty} from '../../models/Faculty.model';
import {Subscription} from 'rxjs';
import {Auditory} from '../../models/Auditory.model';
import {FacultyService} from '../../services/faculty.service';
import {SectionService} from '../../services/section.service';
import {FormBuilder, Validators} from '@angular/forms';

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
  private sectionSubscription: Subscription = null;

  facultyGroup = this.fb.group({
    name: ['', Validators.required],
    logo: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    phone: ['', Validators.required],
    webSite: ['', Validators.required],
    selectedSections: ['', Validators.required]
  });

  constructor(
    private dataStorageSerice: DataStorageService,
    private facultyService: FacultyService,
    private sectionService: SectionService,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.sectionSubscription = this.dataStorageSerice.sectionsSubscription.subscribe((sections: Section[]) => {
      this.sections = sections;
    });

    this.facultySubscription = this.dataStorageSerice.facultiesSubscription.subscribe((faculties: Faculty[]) => {
      this.allFaculties = faculties;
    });

    this.facultyService.getAllFaculties().subscribe((faculties: Faculty[]) => {
      this.allFaculties = faculties;
    });

    this.sectionService.getAllSections().subscribe((sections: Section[]) => {
      this.sections = sections;
    });
  }

  ngOnDestroy() {
    if (this.facultySubscription) {
      this.facultySubscription.unsubscribe();
    }

    if (this.sectionSubscription) {
      this.sectionSubscription.unsubscribe();
    }
  }

  public deleteFaculty(faculty: Faculty) {
    if (confirm(`Do you want to delete ${faculty.Name}?`)) {
      this.facultyService.deleteFaculty(faculty.Id).subscribe(() => {
        this.allFaculties.splice(this.allFaculties.findIndex(el => el.Id === faculty.Id), 1);
        this.dataStorageSerice.facultiesSubscription.next(this.allFaculties);
      });
    }
  }

  public editFaculty(faculty: Faculty) {
    this.nameField = faculty.Name;
    this.logoField = faculty.Logo;
    this.emailField = faculty.Email;
    this.phoneField = faculty.Phone;
    this.webSiteField = faculty.WebSite;
    this.selectedSection = faculty.Sections;
    this.isEdit = false;
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

  public submitFaculty() {
    if (this.isEdit) {
      this.facultyService.putFaculty({
        Name: this.nameField,
        Logo: this.logoField,
        Email: this.emailField,
        Phone: this.phoneField,
        WebSite: this.webSiteField,
        Sections: this.selectedSection,
        Auditories: [],
      });
    } else {

    }
  }

}
