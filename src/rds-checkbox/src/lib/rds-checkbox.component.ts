import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-checkbox',
  templateUrl: 'rds-checkbox.component.html',
  styleUrls: ['rds-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsCheckboxComponent,
    multi: true
  }]
})
export class RdsCheckboxComponent implements OnInit, ControlValueAccessor {

  title = "rds-checkbox";
  value = ''
  // onChange!:(value:string) => void;
  // onTouched!:() => void
  @Input() label?: string;
  @Output() onChange = new EventEmitter<boolean>();

  @Input() checked!: boolean;
  @Input() disabled!: boolean;

  @Input() switch?: boolean;

  @Input() inline?: boolean;

  @Input() id?: string
  @Input() withLabel?: boolean;
  @Input() textColor?: string;
  @Output() onCheck: EventEmitter<void> = new EventEmitter<void>();
  @Output() onUncheck: EventEmitter<void> = new EventEmitter<void>();
  @Input() check?: boolean;
  @Input() isInputGroup?: boolean;

  @Input() state: 'checkbox' | 'Indeterminate' | 'errorcheckbox' = 'checkbox';

  @Output() onClick = new EventEmitter<{ evnt: any, item: string }>();

  constructor() { }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj
    //throw new Error('Method not implemented.');
  }

  public get classes(): string[] {
    var classes = ['form-check']
    if (this.isInputGroup === true) {
      classes = ['input-group-text'];
    }
    if (this.switch === true) {
      classes.push('form-switch')
      return classes
    }
    if (this.inline === true) {
      classes.push('form-check-inline')
      return classes
    }
    if (this.state === 'Indeterminate') {
      classes.push('inder')
      return classes
    }
    if (this.state === 'errorcheckbox') {
      classes.push('errorche')
      return classes
    }
    return classes
  }

  getValue(event: any) {
    this.onClick.emit({ evnt: event, item: event.target.value });
    // this.onChange(event.target.value)
    // this.onTouched()
  }

  stateChanged() {
    console.log('clicked')
    this.checked ? this.onCheck.emit() : this.onUncheck.emit();
  }

}
