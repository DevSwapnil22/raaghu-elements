import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAlertComponent } from './rds-alert.component';

@NgModule({
  declarations: [
    RdsAlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsAlertComponent
  ]
})
export class RdsAlertModule { }
