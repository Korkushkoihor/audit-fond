import {Component, OnInit} from '@angular/core';
import {AuditOverviewService} from '../../services/audit-overview.service';
import {Faculty} from '../../models/Faculty.model';

@Component({
  selector: 'app-faculty-item',
  templateUrl: './faculty-item.component.html',
  styleUrls: ['./faculty-item.component.css']
})
export class FacultyItemComponent implements OnInit {
  currentId: string;
  currentFaculty: Faculty;

  constructor(private auditOverviewService: AuditOverviewService) {
  }

  ngOnInit() {
    this.auditOverviewService.getFacultyById(this.currentId).subscribe((faculty: Faculty) => {
      this.currentFaculty = faculty;
    });
  }

}
