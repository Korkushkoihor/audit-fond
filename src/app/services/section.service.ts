import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Section} from '../models/Section.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  constructor(private configService: ConfigService) {
  }

  public getAllSections(): Observable<Section[]> {
    return (this.configService.getConfig('/Section/GetList') as Observable<Section[]>);
  }

  public getSectionById(id: string): Observable<Section> {
    return (this.configService.getConfig(`/Section/GetById(${id})`) as Observable<Section>);
  }

  public postSection(section: Section): Observable<Section> {
    return (this.configService.postConfig(`/Section/Create`, section) as Observable<Section>);
  }

  public putSection(section: Section): Observable<Section> {
    return (this.configService.putConfig('/Section/Update', section) as Observable<Section>);
  }

  public deleteSection(id: string): Observable<boolean> {
    return this.configService.deleteConfig('/Section/Delete', id);
  }
}
