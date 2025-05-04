import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraIngresoComponent } from './cabecera-ingreso.component';

describe('CabeceraIngresoComponent', () => {
  let component: CabeceraIngresoComponent;
  let fixture: ComponentFixture<CabeceraIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraIngresoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
