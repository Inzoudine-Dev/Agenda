import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsgroupUsersHomeComponent } from './users/buttonsgroup-users-home/buttonsgroup-users-home.component';
import { ButtonMakeAppointmentComponent } from './button-make-appointment/button-make-appointment.component';
import { ButtonUpdateAppointmentComponent } from './button-update-appointment/button-update-appointment.component';
import { ButtonCancelAppointmentComponent } from './button-cancel-appointment/button-cancel-appointment.component';
import { RouterModule } from '@angular/router';
import { FormAppointmentComponent } from './form-appointment/form-appointment.component';


@NgModule({
  declarations: [
    ButtonsgroupUsersHomeComponent,
    ButtonMakeAppointmentComponent,
    ButtonUpdateAppointmentComponent,
    ButtonCancelAppointmentComponent,
    FormAppointmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    ButtonsgroupUsersHomeComponent,
    ButtonMakeAppointmentComponent,
    ButtonUpdateAppointmentComponent,
    ButtonCancelAppointmentComponent,
    FormAppointmentComponent,
  ]
})
export class SharedModule { }
