import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAccordianComponent } from './rds-accordian.component';
import { AccordionItemComponent } from './accordian-item/accordion-item.component';

@NgModule({
  declarations: [
    RdsAccordianComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsAccordianComponent,
    AccordionItemComponent
  ]
})
export class RdsAccordianModule { }
