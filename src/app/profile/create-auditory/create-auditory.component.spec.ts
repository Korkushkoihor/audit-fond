import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuditoryComponent } from './create-auditory.component';

describe('CreateAuditoryComponent', () => {
  let component: CreateAuditoryComponent;
  let fixture: ComponentFixture<CreateAuditoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAuditoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuditoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
