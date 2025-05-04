import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSiiComponent } from './mi-sii.component';

describe('MiSiiComponent', () => {
  let component: MiSiiComponent;
  let fixture: ComponentFixture<MiSiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiSiiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiSiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
