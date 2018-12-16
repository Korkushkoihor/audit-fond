import {Component, OnInit} from '@angular/core';
import {AuditOverviewService} from '../services/audit-overview.service';
import {DataStorageService} from '../services/data-storage.service';

@Component({
  selector: 'app-audit-overview',
  templateUrl: './audit-overview.component.html',
  styleUrls: ['./audit-overview.component.css']
})
export class AuditOverviewComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
  }

}
