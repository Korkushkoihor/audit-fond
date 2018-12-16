import {Injectable} from '@angular/core';
import {Faculty} from '../models/Faculty.model';
import {Observable} from 'rxjs';
import {MockService} from '../shared/mock.service';

@Injectable({
  providedIn: 'root'
})
export class AuditOverviewService {

  constructor(private mockService: MockService) {
  }

  public getAllFaculties(): Observable<Faculty[]> {
    return this.mockService.getFaculties();
  }

  public getFacultyById(id: string): Observable<Faculty> {
    return this.mockService.getFacultyById(id);
  }
}
