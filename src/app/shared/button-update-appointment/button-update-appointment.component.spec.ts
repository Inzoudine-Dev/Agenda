import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUpdateAppointmentComponent } from './button-update-appointment.component';

describe('ButtonUpdateAppointmentComponent', () => {
  let component: ButtonUpdateAppointmentComponent;
  let fixture: ComponentFixture<ButtonUpdateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonUpdateAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUpdateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
