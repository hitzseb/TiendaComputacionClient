import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablareportesComponent } from './tablareportes.component';

describe('TablareportesComponent', () => {
  let component: TablareportesComponent;
  let fixture: ComponentFixture<TablareportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablareportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablareportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
