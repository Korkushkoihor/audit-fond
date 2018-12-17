import {Component, OnInit} from '@angular/core';
import {Section} from '../../models/Section.model';
import {DataStorageService} from '../../services/data-storage.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {SectionService} from '../../services/section.service';

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
              private sectionService: SectionService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.sectionSubscription = this.dataStorageService.sectionsSubscription.subscribe((sections: Section[]) => {
      this.allSections = sections;
    });
  }

  public submitSection() {
    if (this.sectionGroup.valid) {
      if (this.isEdit) {
        this.sectionService.putSection({Id: this.currentEditId, Name: this.nameField, Address: this.addressField}).subscribe(resp => {
          this.allSections[this.allSections.findIndex(el => el.Id === resp.Id)] = resp;
          this.cancelEdit();
          this.sectionGroup.reset({name: this.nameField, address: this.addressField});
        });
      } else {
        this.sectionService.postSection({Name: this.nameField, Address: this.addressField}).subscribe((section: Section) => {
          this.allSections.push(section);
          this.cancelEdit();
          this.sectionGroup.reset({name: this.nameField, address: this.addressField});
        });
      }
    }
  }

  public deleteSection(item: Section) {
    if (confirm('Press a button!')) {
      this.sectionService.deleteSection(item.Id).subscribe(() => {
        this.allSections.slice(this.allSections.findIndex(el => el.Id === item.Id), 1);
      });
    }
  }

  public editSection(item: Section) {
    this.addressField = item.Address;
    this.nameField = item.Name;
    this.currentEditId = item.Id;
    this.isEdit = true;
  }

  public cancelEdit() {
    this.addressField = '';
    this.nameField = '';
    this.isEdit = false;
  }
}
