import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaComponent } from './informa.component';

describe('InformaComponent', () => {
  let component: InformaComponent;
  let fixture: ComponentFixture<InformaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
