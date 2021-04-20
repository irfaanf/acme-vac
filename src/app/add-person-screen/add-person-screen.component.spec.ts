import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonScreenComponent } from './add-person-screen.component';

describe('AddPersonScreenComponent', () => {
  let component: AddPersonScreenComponent;
  let fixture: ComponentFixture<AddPersonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
