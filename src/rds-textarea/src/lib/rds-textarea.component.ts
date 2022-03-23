import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-textarea',
  templateUrl: './rds-textarea.component.html',
  styleUrls: ['./rds-textarea.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsTextareaComponent,
    multi: true
  }]
})
export class RdsTextareaComponent implements OnInit {

  static count = 0;
  value = 'Text area value';
  onChange!: (value: string) => void
  onTouched!: () => void

  @Input()
  disabled?: boolean

  @Input()
  rows?: string;

  @Input()
  readonly?: boolean;

  @Input()
  label = 'text area'

  // @Input()
  //floatinglabel=false

  @Input()
  floatinginputLabel?: string

  @Input()
  placeholderText = 'TextArea'

  floatingcontent = false;

  @Input() tooltipTitle: string = '';

  @Input() tooltipPlacement: string = '';

  id: string = 'textareaId';

  constructor() {
    RdsTextareaComponent.count++;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnChanges(): void {
    this.setTooltip();
  }

  ngOnInit(): void {
    this.id = this.id + RdsTextareaComponent.count;
    this.setTooltip();
  }

  setTooltip(): void {
    if (this.tooltipPlacement && this.tooltipTitle) {
      const position: any = this.tooltipPlacement;
      const title = this.tooltipTitle;
      var id = this.id;
      document.addEventListener("DOMContentLoaded", function (event) {
        //  do work
      });
      // $(document).ready(function () {
      //   $('[data-bs-toggle="tooltip"]').tooltip('dispose');
      //   $('#' + id).tooltip("dispose");
      //   $('#' + id).tooltip({ 'placement': position });
      //   setTimeout(() => {
      //     $('#' + id).attr('data-bs-original-title', title).parent().find('.tooltip-inner');
      //     $('[data-bs-toggle="tooltip"]').tooltip({ 'placement': position });
      //   }, 100);
      // });
    }
  }

  setValue(event: any) {
    this.value = event.target.value
    this.onChange(this.value)
    this.onTouched()
  }

  public get divclasses(): string[] {
    var classList = ['mb-3']
    if (this.floatinginputLabel) {
      classList.push('form-floating')
      this.floatingcontent = true;
    } else {
      this.floatingcontent = false;
    }

    return classList
  }

}
