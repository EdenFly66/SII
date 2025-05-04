import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpendienteElectronicoComponent } from './expendiente-electronico.component';

describe('ExpendienteElectronicoComponent', () => {
  let component: ExpendienteElectronicoComponent;
  let fixture: ComponentFixture<ExpendienteElectronicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpendienteElectronicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpendienteElectronicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
