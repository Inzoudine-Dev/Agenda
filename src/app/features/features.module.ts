import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './users/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';
import { AppointmentComponent } from './users/appointment/appointment.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppointmentComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
