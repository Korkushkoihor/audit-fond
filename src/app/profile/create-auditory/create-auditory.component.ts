import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../services/data-storage.service';
import {TypeAuditory} from '../../models/TypeAuditory.model';
import {Auditory} from '../../models/Auditory.model';
import {Subscription} from 'rxjs';

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
  isPlatform = false;


  auditoryTypes: TypeAuditory[] = [];
  selectedTypeAuditory = [];

  allAuditories: Auditory[];

  private facultySubscription: Subscription = null;
  private auditorySubscription: Subscription = null;
  private sectionSubscription: Subscription = null;

  constructor(private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.dataStorageService.getTypesAuditories().subscribe((types: TypeAuditory[]) => {
      this.auditoryTypes = types;
    });

    this.auditorySubscription = this.dataStorageService.auditoriesSubscription.subscribe((auditories: Auditory[]) => {
      this.allAuditories = auditories;
    });

  }

  public deleteAuditory() {
    if (confirm("Press a button!")) {

    } else {
    }
  }

  public cancelEdit() {
    this.nameField = '';
    this.numberAuditoryField = 0;
    this.squareField = 0;
    this.capacityField = 0;
    this.isMagnetBoard = false;
    this.isProjector = false;
    this.isPlatform = false;
    this.isEdit = false;
  }

}
