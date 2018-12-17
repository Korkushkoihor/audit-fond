import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';
import {Auditory} from '../models/Auditory.model';

@Injectable({
  providedIn: 'root'
})
export class AuditoryService {

  constructor(private configService: ConfigService) {
  }

  public getAllAuditories(): Observable<Auditory[]> {
    return (this.configService.getConfig('/Room/GetList') as Observable<Auditory[]>);
  }

  public getAuditoryById(id: string): Observable<Auditory> {
    return (this.configService.getConfig(`/Room/GetById(${id})`) as Observable<Auditory>);
  }

  public postAuditory(): Observable<Auditory> {
    return (this.configService.getConfig(`/Room/Create`) as Observable<Auditory>);
  }

  public putAuditory(auditory: Auditory): Observable<Auditory> {
    return (this.configService.putConfig('/Room/Update', auditory) as Observable<Auditory>);
  }

  public deleteAuditory(id: string): Observable<boolean> {
    return this.configService.deleteConfig('/Room/Delete', id);
  }
}
