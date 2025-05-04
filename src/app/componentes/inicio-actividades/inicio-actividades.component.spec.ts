import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioActividadesComponent } from './inicio-actividades.component';

describe('InicioActividadesComponent', () => {
  let component: InicioActividadesComponent;
  let fixture: ComponentFixture<InicioActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
