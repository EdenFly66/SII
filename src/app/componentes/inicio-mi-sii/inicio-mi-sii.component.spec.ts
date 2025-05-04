import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMiSiiComponent } from './inicio-mi-sii.component';

describe('InicioMiSiiComponent', () => {
  let component: InicioMiSiiComponent;
  let fixture: ComponentFixture<InicioMiSiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioMiSiiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioMiSiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
