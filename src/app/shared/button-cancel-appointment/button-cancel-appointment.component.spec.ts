import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCancelAppointmentComponent } from './button-cancel-appointment.component';

describe('ButtonCancelAppointmentComponent', () => {
  let component: ButtonCancelAppointmentComponent;
  let fixture: ComponentFixture<ButtonCancelAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCancelAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCancelAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
