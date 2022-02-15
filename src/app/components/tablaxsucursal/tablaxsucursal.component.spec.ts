import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaxsucursalComponent } from './tablaxsucursal.component';

describe('TablaxsucursalComponent', () => {
  let component: TablaxsucursalComponent;
  let fixture: ComponentFixture<TablaxsucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaxsucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaxsucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
