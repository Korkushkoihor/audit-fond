import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {TypeAuditory} from '../../models/TypeAuditory.model';
import {Auditory} from '../../models/Auditory.model';

@Component({
  selector: 'app-create-auditory',
  templateUrl: './create-auditory.component.html',
  styleUrls: ['./create-auditory.component.css']
})
export class CreateAuditoryComponent implements OnInit {

  isEdit = false;

  nameField: string;
  numberAuditoryField: number;
  squareField: number;
  capacityField: number;
  isMagnetBoard = false;
  isProjector = false;

  auditoryTypes: TypeAuditory[] = [];
  selectedTypeAuditory = [];

  allAuditories: Auditory[];

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.dataStorageService.getTypesAuditories().subscribe((types: TypeAuditory[]) => {
      this.auditoryTypes = types;
    });

    this.dataStorageService.getAllAuditories().subscribe((allAuditories: Auditory[]) => {
      this.allAuditories = allAuditories;
    });
  }

}
