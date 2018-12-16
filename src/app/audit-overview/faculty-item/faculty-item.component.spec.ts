import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyItemComponent } from './faculty-item.component';

describe('FacultyItemComponent', () => {
  let component: FacultyItemComponent;
  let fixture: ComponentFixture<FacultyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
