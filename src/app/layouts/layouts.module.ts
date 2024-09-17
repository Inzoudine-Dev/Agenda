import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHeaderComponent } from './header/users-header/users-header.component';



@NgModule({
  declarations: [
    UsersHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersHeaderComponent
  ]
})
export class LayoutsModule { }
