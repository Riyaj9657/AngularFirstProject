import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoponrentComponent } from './shoponrent.component';

describe('ShoponrentComponent', () => {
  let component: ShoponrentComponent;
  let fixture: ComponentFixture<ShoponrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoponrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoponrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
