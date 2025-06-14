import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPerfilComponent } from './doctor-perfil.component';

describe('DoctorPerfilComponent', () => {
  let component: DoctorPerfilComponent;
  let fixture: ComponentFixture<DoctorPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorPerfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
