import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './users/home/home.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule,
  ]
})
export class FeaturesModule { }
