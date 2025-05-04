import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraCierreComponent } from './cabecera-cierre.component';

describe('CabeceraCierreComponent', () => {
  let component: CabeceraCierreComponent;
  let fixture: ComponentFixture<CabeceraCierreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraCierreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraCierreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
