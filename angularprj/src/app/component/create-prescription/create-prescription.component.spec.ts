import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrescriptionComponent } from './create-prescription.component';

describe('CreatePrescriptionComponent', () => {
  let component: CreatePrescriptionComponent;
  let fixture: ComponentFixture<CreatePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePrescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
