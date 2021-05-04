import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllPatientsComponent } from './manage-all-patients.component';

describe('ManageAllPatientsComponent', () => {
  let component: ManageAllPatientsComponent;
  let fixture: ComponentFixture<ManageAllPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAllPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAllPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
