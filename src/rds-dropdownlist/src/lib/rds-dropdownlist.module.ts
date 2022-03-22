import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';

@NgModule({
  declarations: [
    RdsDropdownlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsDropdownlistComponent
  ]
})
export class RdsDropdownlistModule { }
