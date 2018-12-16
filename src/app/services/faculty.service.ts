import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {Faculty} from '../models/Faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private configService: ConfigService) {
  }

  public getAllFaculties(): Observable<Faculty[]> {
    return (this.configService.getConfig('/Faculty/GetList') as Observable<Faculty[]>);
  }

  public getFacultyById(id: string): Observable<Faculty> {
    return (this.configService.getConfig(`/Faculty/GetById(${id})`) as Observable<Faculty>);
  }

  public postFaculty(): Observable<Faculty> {
    return (this.configService.getConfig(`/Faculty/Create`) as Observable<Faculty>);
  }

  public putFaculty(faculty: Faculty): Observable<Faculty> {
    return (this.configService.putConfig('/Faculty/Update', faculty) as Observable<Faculty>);
  }

  public deleteFaculty(id: string): Observable<boolean> {
    return this.configService.deleteConfig('/Faculty/Delete');
  }
}
