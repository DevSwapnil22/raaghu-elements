import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsPaginationComponent } from './rds-pagination.component';

@NgModule({
  declarations: [
    RdsPaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RdsPaginationComponent
  ]
})
export class RdsPaginationModule { }
