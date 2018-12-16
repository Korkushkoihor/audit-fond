import {Injectable} from '@angular/core';
import {Faculty} from '../models/Faculty.model';
import {Observable, of} from 'rxjs';
import {MockService} from '../shared/mock.service';
import {DataStorageService} from './data-storage.service';
import {ConfigService} from './config.service';
import {FacultyService} from './faculty.service';

@Injectable({
  providedIn: 'root'
})
export class AuditOverviewService {

  constructor(private mockService: MockService,
              private dataStorageService: DataStorageService,
              private facultiesService: FacultyService) {
  }

  public getAllFaculties(): Observable<Faculty[]> {
    return this.facultiesService.getAllFaculties();
  }

  public getFacultyById(id: string): Observable<Faculty> {
    return this.facultiesService.getFacultyById(id);
  }
}
