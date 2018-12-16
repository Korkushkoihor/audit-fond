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
  }

  public setFacultiesData(faculties: Faculty[]) {
    if (faculties) {
      this.faculties = faculties;
      this.facultiesSubscription.next(faculties);
    }
  }

  public getTypesAuditories(): Observable<TypeAuditory[]> {
    return this.mockSevrice.getTypesAuditories();
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
