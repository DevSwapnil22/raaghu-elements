import { Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-input',
  templateUrl: './rds-input.component.html',
  styleUrls: ['./rds-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RdsInputComponent),
    multi: true
  }]
})
export class RdsInputComponent implements OnInit, ControlValueAccessor {

  title = 'rds-input';
  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };

  @Input()
  size?: string;

  @Input()
  disabled = false;

  @Input() Title = '';
  @Input() TitleType = '';

  @Input()
  readonly?: boolean;

  @Input()
  value = '';

  @Input()
  inputType = '';

  @Input()
  placeholder = 'Enter a value';

  @Input()
  inputName = 'Field_name';

  @Input()
  icon = '';

  // @Input()
  // ErrorMessage ='Add custom error message'

  // @Input()
  // validate = false

  @Input()
  floatinginputLabel?: string

  floatingcontent = false;


  static count: number = 0;

  @Input() tooltipTitle: string = '';

  @Input() tooltipPlacement: string = 'auto';

  id: string = 'inputText';
  constructor() {
    RdsInputComponent.count++
  }
  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }


  ngOnChanges(): void {
    this.setTooltip();
  }

  ngOnInit(): void {
    this.id = this.id + RdsInputComponent.count;
    this.setTooltip();
  }

  setTooltip(): void {
    const position: any = this.tooltipPlacement;
    const title = this.tooltipTitle;
    var id = this.id;
    document.addEventListener("DOMContentLoaded", function(event) { 
      //  do work
    });
    // $(document).ready(function () {
    //   $('#' + id).tooltip("dispose");
    //   $('#' + id).tooltip({ 'placement': position });
    //   setTimeout(() => {
    //     $('#' + id).attr('data-bs-original-title', title).parent().find('.tooltip-inner');
    //     $('[data-bs-toggle="tooltip"]').tooltip({ 'placement': position });
    //   }, 10);
    // });
  }

  onKeyup(event: any) {
    this.onChange(event.target.value);
  }

  focus() {
    this.onTouched();
  }

  //   onKeyup(event: any){
  //     this.onChange(event.target.value)
  //  }
  onMouseup(event: any) {
    this.onChange(event.target.value)
  }
  //  focus(){
  //   this.onTouched()
  //  }

  public get classes(): string[] {
    var classList = ['form-control'];
    // if(this.validate === true){
    //   classList.push('is-invalid')
    // }
    if (this.size === 'small') {
      var selectSize = 'form-control-sm';
      classList.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'form-control-lg';
      classList.push(selectSize);
    } else {
      var selectSize = '';
      classList.push(selectSize);
    }

    return classList;
  }

  public get floatclasses(): string[] {
    var classList = [''];
    if (this.TitleType === 'Floating') {
      classList.push('form-floating');
    } else {
      classList.push('d-flex flex-column-reverse');
    }
    return classList;
  }

  public get labelClass(): string[] {
    var classList = [''];
    if (this.TitleType === 'Floating') {
      classList.push('d-none');
    } else if (this.TitleType === 'Top') {
      classList.push('d-flex flex-column-reverse mb-2');
    } else if (this.TitleType === 'Bottom') {
      classList.push('d-block mt-2');
    }
    else {
      classList.push('d-flex flex-column-reverse');
    }
    return classList;
  }


  public get iconClass(): string[] {
    var classList = ['icon-position'];
    if (this.size === 'small') {
      var selectSize = 'icon-size-sm';
      classList.push(selectSize);
    } else if (this.size === 'large') {
      var selectSize = 'icon-size-lg';
      classList.push(selectSize);
    } else {
      var selectSize = '';
      classList.push(selectSize);
    }

    return classList;
  }

  public get divclasses(): string[] {
    var classList = [''];
    // if (this.TitleType === 'Left') {
    //   classList.push('d-flex align-items-baseline flex-row-reverse justify-content-end gap-3');
    // } else if (this.TitleType === 'Right') {
    //   classList.push('d-flex align-items-baseline gap-3');
    // } else 
    if (this.TitleType === 'Bottom') {
      classList.push('d-block mt-2');
    } else {
      classList.push('d-flex flex-column-reverse');
    }
    return classList;
  }

  public get formState(): string {
    var state = 'd-none';
    if (this.disabled === true) {
      var state = '';
      return state;
    }
    return state;
  }

}
