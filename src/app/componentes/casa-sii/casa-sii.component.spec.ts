import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaSiiComponent } from './casa-sii.component';

describe('CasaSiiComponent', () => {
  let component: CasaSiiComponent;
  let fixture: ComponentFixture<CasaSiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasaSiiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasaSiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
