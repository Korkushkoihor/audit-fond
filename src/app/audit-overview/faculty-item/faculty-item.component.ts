import {Component, OnInit} from '@angular/core';
import {AuditOverviewService} from '../../services/audit-overview.service';
import {Faculty} from '../../models/Faculty.model';
import {FacultyService} from '../../services/faculty.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-faculty-item',
  templateUrl: './faculty-item.component.html',
  styleUrls: ['./faculty-item.component.css']
})
export class FacultyItemComponent implements OnInit {
  currentId: string;
  currentFaculty: Faculty;

  constructor(private facultyService: FacultyService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentId = params['id'];
      this.facultyService.getFacultyById(this.currentId).subscribe((faculty: Faculty) => {
        this.currentFaculty = faculty;
      });
    });
  }

}
