import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginByEmailAndPassComponent } from './login-by-email-and-pass.component';

describe('LoginByEmailAndPassComponent', () => {
  let component: LoginByEmailAndPassComponent;
  let fixture: ComponentFixture<LoginByEmailAndPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginByEmailAndPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginByEmailAndPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
