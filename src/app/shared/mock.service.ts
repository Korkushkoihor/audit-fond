import {Injectable} from '@angular/core';
import {Faculty} from '../models/Faculty.model';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {Section} from '../models/Section.model';
import {Auditory} from '../models/Auditory.model';
import {TypeAuditory} from '../models/TypeAuditory.model';
import {DataStorageService} from '../services/data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  private faculties: any[] = [
    {
      Id: '0',
      Name: 'Faculty of Philology',
      TotalSquare: 995,
      Logo: 'http://www.lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-chem.png',
      WebSite: 'chem.lnu.edu.ua',
      Email: 'chemdek@lnu.edu.ua',
      Phone: '(+38 032) 260-03-91',
      Sections: [{
        Id: '0',
        Name: 'Section 1',
        Address: 'Universytetska Street, 1, Lviv, 79001, Ukraine',
        FacultyCount: 4,
      }],
      Auditories: [
        {
          Id: '0',
          NumberAuditory: 111,
          Name: 'Auditory 111',
          Square: 98,
          FacultyId: '0',
          Capacity: 68,
          TypeAuditoriumId: '6',
          IsProjector: true,
          IsMagnetBoard: true
        }
      ]
    },
    {
      Id: '1',
      Name: 'Філософський факультет',
      TotalSquare: 800,
      Logo: 'http://www.lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-filos.png',
      WebSite: 'filos.lnu.edu.ua',
      Email: 'dfilos@lnu.edu.ua',
      Phone: '(+ 38 032) 239-45-79',
      Sections: [{
        Id: '1',
        Name: 'Section 6',
        Address: 'Адреса: вул. Кирила і Мефодія, 6, м. Львів, 79005, Україна',
        FacultyCount: 9,
      }],
      Auditories: [
        {
          Id: '1',
          NumberAuditory: 31,
          Name: 'Auditory 31',
          Square: 20,
          FacultyId: '1',
          Capacity: 10,
          TypeAuditoriumId: '6',
          IsProjector: false,
          IsMagnetBoard: false
        }
      ]
    }
  ];

  private faculty: any =
    {
      Id: '0',
      Name: 'Faculty of Philology',
      TotalSquare: 995,
      Logo: 'http://www.lnu.edu.ua/wp-content/uploads/2015/01/logo-faculty-chem.png',
      WebSite: 'chem.lnu.edu.ua',
      Email: 'chemdek@lnu.edu.ua',
      Phone: '(+38 032) 260-03-91',
      Sections: [{
        Id: '0',
        Name: 'Section 1',
        Address: 'Universytetska Street, 1, Lviv, 79001, Ukraine',
        FacultyCount: 4,
      }],
      Auditories: [
        {
          Id: '0',
          NumberAuditory: 111,
          Name: 'Auditory 111',
          Square: 98,
          FacultyId: '0',
          Capacity: 68,
          TypeAuditoriumId: '6',
          IsProjector: true,
          IsMagnetBoard: true
        },
        {
          Id: '1',
          NumberAuditory: 110,
          Name: 'Auditory 110',
          Square: 70,
          FacultyId: '0',
          Capacity: 50,
          TypeAuditoriumId: '6',
          IsProjector: false,
          IsMagnetBoard: false
        },
        {
          Id: '2',
          NumberAuditory: 83,
          Name: 'Auditory 83',
          Square: 90,
          FacultyId: '1',
          Capacity: 30,
          TypeAuditoriumId: '6',
          IsProjector: false,
          IsMagnetBoard: true
        },
        {
          Id: '3',
          NumberAuditory: 3,
          Name: 'Auditory 3',
          Square: 98,
          FacultyId: '0',
          Capacity: 20,
          TypeAuditoriumId: '1',
          IsProjector: false,
          IsMagnetBoard: false
        },
        {
          Id: '4',
          NumberAuditory: 5,
          Name: 'Auditory 5',
          Square: 98,
          FacultyId: '0',
          Capacity: 89,
          TypeAuditoriumId: '5',
          IsProjector: false,
          IsMagnetBoard: false
        }
      ]
    };

  private sections: any[] = [
    {
      Id: '0',
      Name: 'Section 1',
      Address: 'Universytetska Street, 1, Lviv, 79001, Ukraine',
      FacultyCount: 4,
    },
    {
      Id: '1',
      Name: 'Section 2',
      Address: 'вул. Дорошенка, 41, м. Львів, 79000, Україна',
      FacultyCount: 4,
    },
    {
      Id: '2',
      Name: 'Section 3',
      Address: 'вул. Михайла Грушевського, 4, м. Львів, 79005, Україна',
      FacultyCount: 4,
    },
    {
      Id: '3',
      Name: 'Section 4',
      Address: 'проспект Свободи, 18, м. Львів, 79008, Україна',
      FacultyCount: 4,
    },
  ];

  private auditories = [
    {
      Id: '0',
      NumberAuditory: 111,
      Name: 'Auditory 111',
      Square: 98,
      FacultyId: '0',
      Capacity: 68,
      TypeAuditoriumId: '6',
      IsProjector: true,
      IsMagnetBoard: true
    },
    {
      Id: '1',
      NumberAuditory: 110,
      Name: 'Auditory 110',
      Square: 70,
      FacultyId: '0',
      Capacity: 50,
      TypeAuditoriumId: '6',
      IsProjector: false,
      IsMagnetBoard: false
    },
    {
      Id: '2',
      NumberAuditory: 83,
      Name: 'Auditory 83',
      Square: 90,
      FacultyId: '1',
      Capacity: 30,
      TypeAuditoriumId: '6',
      IsProjector: false,
      IsMagnetBoard: true
    },
    {
      Id: '3',
      NumberAuditory: 3,
      Name: 'Auditory 3',
      Square: 98,
      FacultyId: '0',
      Capacity: 20,
      TypeAuditoriumId: '1',
      IsProjector: false,
      IsMagnetBoard: false
    },
    {
      Id: '4',
      NumberAuditory: 5,
      Name: 'Auditory 5',
      Square: 98,
      FacultyId: '0',
      Capacity: 89,
      TypeAuditoriumId: '5',
      IsProjector: false,
      IsMagnetBoard: false
    },
    {
      Id: '0',
      NumberAuditory: 111,
      Name: 'Auditory 111',
      Square: 98,
      FacultyId: '0',
      Capacity: 68,
      TypeAuditoriumId: '6',
      IsProjector: true,
      IsMagnetBoard: true
    }];

  private types = [
    {Name: 'teachers room', Id: 1},
    {Name: 'library', Id: 2},
    {Name: 'storage room', Id: 3},
    {Name: 'practical auditory', Id: 4},
    {Name: 'laboratory', Id: 5},
    {Name: 'lecture auditory', Id: 6}
  ];

  constructor() {
  }

  public getFaculties(): Observable<Faculty[]> {
    return of(this.faculties);
  }

  public getFacultyById(id: string): Observable<Faculty> {
    return of(this.faculty);
  }

  public getSections(): Observable<Section[]> {
    return of(this.sections);
  }

  public getTypesAuditories(): Observable<TypeAuditory[]> {
    return of(this.types);
  }

  public getAllAuditories(): Observable<Auditory[]> {
    return of(this.auditories as Auditory[]);
  }

  public addSection(section: Section): Observable<Section[]> {
    this.sections.push(Object.assign({Id: this.sections[this.sections.length - 1]}, section));
    return of(this.sections);
    // this.dataStorageService.sectionsSubscription.next(this.sections);
  }

  public updateSection(_section: Section): Observable<Section[]> {
    this.sections.find(section => section.Id === _section.Id).Name = _section.Name;
    this.sections.find(section => section.Id === _section.Id).Address = _section.Address;
    return of(this.sections);
    // this.dataStorageService.sectionsSubscription.next(this.sections);
  }
}
