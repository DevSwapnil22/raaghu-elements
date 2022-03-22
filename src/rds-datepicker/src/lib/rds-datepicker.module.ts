import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RdsDatepickerComponent } from './rds-datepicker.component';

@NgModule({
  declarations: [
    RdsDatepickerComponent
  ],
  imports: [
    CommonModule,
    BsDatepickerModule
  ],
  exports: [
    RdsDatepickerComponent
  ]
})
export class RdsDatepickerModule { }
