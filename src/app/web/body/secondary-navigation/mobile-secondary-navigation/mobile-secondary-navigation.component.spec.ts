import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSecondaryNavigationComponent } from './mobile-secondary-navigation.component';

describe('MobileSecondaryNavigationComponent', () => {
  let component: MobileSecondaryNavigationComponent;
  let fixture: ComponentFixture<MobileSecondaryNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSecondaryNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSecondaryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
