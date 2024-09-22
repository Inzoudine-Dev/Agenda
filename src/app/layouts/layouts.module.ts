import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersHeaderComponent } from './users/users-header/users-header.component';
import { UsersBaseComponent } from './users/users-base/users-base.component';
import { UsersFooterComponent } from './users/users-footer/users-footer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersHeaderComponent,
    UsersBaseComponent,
    UsersFooterComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
  ],

  
})
export class LayoutsModule { }
