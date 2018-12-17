import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {Faculty} from '../../models/Faculty.model';
import {Subscription} from 'rxjs';
import {AuditOverviewService} from '../../services/audit-overview.service';
import {FacultyService} from '../../services/faculty.service';

@Component({
  selector: 'app-home-audit',
  templateUrl: './home-audit.component.html',
  styleUrls: ['./home-audit.component.css']
})
export class HomeAuditComponent implements OnInit, OnDestroy {
  public faculties: Faculty[] = [];
  private facultiesSubscription: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private auditOverviewService: AuditOverviewService,
              private facultyService: FacultyService) {
  }

  ngOnInit() {

    this.facultiesSubscription = this.dataStorageService.facultiesSubscription.subscribe((res: Faculty[]) => {
      this.faculties = res;
    });

    this.facultyService.getAllFaculties().subscribe((faculties: Faculty[]) => {
      this.faculties = faculties;
    });

    this.auditOverviewService.getAllFaculties().subscribe((response) => {
      setTimeout(() => {
        this.dataStorageService.setFacultiesData(response);
      }, 100);
    });
  }

  ngOnDestroy() {
    if (this.facultiesSubscription) {
      this.facultiesSubscription.unsubscribe();
    }
  }

}
