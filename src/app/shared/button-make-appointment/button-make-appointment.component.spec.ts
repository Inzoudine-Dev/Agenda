import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMakeAppointmentComponent } from './button-make-appointment.component';

describe('ButtonMakeAppointmentComponent', () => {
  let component: ButtonMakeAppointmentComponent;
  let fixture: ComponentFixture<ButtonMakeAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonMakeAppointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
