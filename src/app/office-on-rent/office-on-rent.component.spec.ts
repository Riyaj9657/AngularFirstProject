import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeOnRentComponent } from './office-on-rent.component';

describe('OfficeOnRentComponent', () => {
  let component: OfficeOnRentComponent;
  let fixture: ComponentFixture<OfficeOnRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeOnRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeOnRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
