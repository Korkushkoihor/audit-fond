import {Component, OnInit} from '@angular/core';
import {Section} from '../../models/Section.model';
import {DataStorageService} from '../../services/data-storage.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {
  sectionGroup = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required]
  });

  isEdit = false;
  currentEditId = '-1';

  addressField: string;
  nameField: string;

  allSections: Section[];

  private sectionSubscription: Subscription = null;

  constructor(private dataStorageService: DataStorageService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.sectionSubscription = this.dataStorageService.sectionsSubscription.subscribe((sections: Section[]) => {
      this.allSections = sections;
    });
  }

  public submitSection() {
    alert('submittedUser');

    if (this.isEdit) {
      this.dataStorageService.updateSectionById({Id: this.currentEditId, Name: this.nameField, Address: this.addressField});
    } else {
      this.dataStorageService.addSection({Name: this.nameField, Address: this.addressField});
    }
  }

  public editSection(item: Section) {
    this.addressField = item.Address;
    this.nameField = item.Name;
    this.isEdit = true;
  }

  public cancelEdit() {
    this.addressField = '';
    this.nameField = '';
    this.isEdit = false;
  }
}
