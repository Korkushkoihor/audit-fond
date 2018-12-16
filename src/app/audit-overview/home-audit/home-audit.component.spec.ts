import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuditComponent } from './home-audit.component';

describe('HomeAuditComponent', () => {
  let component: HomeAuditComponent;
  let fixture: ComponentFixture<HomeAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
