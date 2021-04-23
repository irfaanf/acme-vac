import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopSecondaryNavigationComponent } from './desktop-secondary-navigation.component';

describe('DesktopSecondaryNavigationComponent', () => {
  let component: DesktopSecondaryNavigationComponent;
  let fixture: ComponentFixture<DesktopSecondaryNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopSecondaryNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesktopSecondaryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
