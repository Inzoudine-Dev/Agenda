import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'home/appointment', component:AppointmentComponent},
  { path: '', redirectTo: 'home',pathMatch:'full' },
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],

  exports: [RouterModule]
 
})
export class UsersRoutingModule { }
