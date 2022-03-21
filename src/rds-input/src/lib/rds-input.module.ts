import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsInputComponent } from './rds-input.component';

@NgModule({
  declarations: [
    RdsInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsInputComponent
  ]
})
export class RdsInputModule { }
