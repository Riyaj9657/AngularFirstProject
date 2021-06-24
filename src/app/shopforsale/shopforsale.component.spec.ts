import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopforsaleComponent } from './shopforsale.component';

describe('ShopforsaleComponent', () => {
  let component: ShopforsaleComponent;
  let fixture: ComponentFixture<ShopforsaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopforsaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopforsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
