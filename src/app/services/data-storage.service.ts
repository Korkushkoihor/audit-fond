import {Injectable} from '@angular/core';
import {Faculty} from '../models/Faculty.model';
import {Observable, Subject} from 'rxjs';
import {Section} from '../models/Section.model';
import {MockService} from '../shared/mock.service';
import {TypeAuditory} from '../models/TypeAuditory.model';
import {Auditory} from '../models/Auditory.model';
import {SectionService} from './section.service';
import {AuditoryService} from './auditory.service';
import {FacultyService} from './faculty.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private faculties: Faculty[];
  public facultiesSubscription: Subject<Faculty[]> = new Subject();
  public auditoriesSubscription: Subject<Auditory[]> = new Subject();
  public sectionsSubscription: Subject<Section[]> = new Subject();

  constructor(private mockSevrice: MockService,
              private sectionSecvice: SectionService,
              private auditoryService: AuditoryService,
              private facultyService: FacultyService) {
    this.mockSevrice.getSections().subscribe((sections: Section[]) => {
      setTimeout(() => {
        this.sectionsSubscription.next(sections);
      }, 200);
    });
  }

  public setFacultiesData(faculties: Faculty[]) {
    if (faculties) {
      this.faculties = faculties;
      this.facultiesSubscription.next(faculties);
    }
  }

  public getFacultiesData(): Observable<Faculty[]> {
    return this.mockSevrice.getFaculties();
  }

  public getSectionsList(): Observable<Section[]> {
    return this.mockSevrice.getSections();
  }

  public addSection(section: Section): void {
    this.mockSevrice.addSection(section).subscribe((sections: Section[]) => {
      this.sectionsSubscription.next(sections);
    });
  }

  public updateSectionById(section: Section): void {
    this.mockSevrice.updateSection(section).subscribe((sections: Section[]) => {
      this.sectionsSubscription.next(sections);
    });
  }

  public getTypesAuditories(): Observable<TypeAuditory[]> {
    return this.mockSevrice.getTypesAuditories();
  }

  public getAllAuditories(): Observable<Auditory[]> {
    return this.mockSevrice.getAllAuditories();
  }

  public updateAllData(): void {
    this.sectionSecvice.getAllSections().subscribe((section: Section[]) => {
      this.sectionsSubscription.next(section);
    });
    this.facultyService.getAllFaculties().subscribe((faculties: Faculty[]) => {
      this.facultiesSubscription.next(faculties);
    });
    this.auditoryService.getAllAuditories().subscribe((auditories: Auditory[]) => {
      this.auditoriesSubscription.next(auditories);
    });
  }
}
