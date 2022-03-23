import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'rds-select-list',
  templateUrl: './rds-select-list.component.html',
  styleUrls: ['./rds-select-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: RdsSelectListComponent,
    multi: true
  }]
})
export class RdsSelectListComponent implements OnInit {

  selectedValue = ''
  onChange!: (value: string) => void;
  onTouched!: () => void
  @Input()
  size: string = ''

  @Input()
  selectSize: string = '';

  @Input() Label = '';
  @Input() LabelType = '';

  @Input()
  rows: string = '';

  //@Input()
  //DropdownItems!:TemplateRef<any>

  @Input()
  showSizeAttribute?: boolean

  @Input()
  disabled?: boolean = false;

  @Input()
  multiple?: boolean = false;

  @Input()
  customIcon = '';
  // @Input()
  // floatinglabel=false


  @Input()
  placeholderText?: string

  // floatingcontent =false;

  @Input()
  listItems = [{ value: 'India', some: 'value' }, { value: 'USA' }, { value: 'Canada' }];

  @Output() select = new EventEmitter();

  static count: number = 0;

  @Input() tooltipTitle: string = '';

  @Input() tooltipPlacement: string = '';

  id: string = 'selectList';

  constructor() { 
    RdsSelectListComponent.count++;
  }

  writeValue(obj: any): void {
    this.selectedValue = obj;

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
    this.id = this.id + RdsSelectListComponent.count;
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
      //   $('[data-bs-toggle="tooltip"]').tooltip('dispose')
      //   $('#' + id).tooltip("dispose");
      //   $('#' + id).tooltip({ 'placement': position });
      //   setTimeout(() => {
      //     $('#' + id).attr('data-bs-original-title', title).parent().find('.tooltip-inner');
      //     $('[data-bs-toggle="tooltip"]').tooltip({ 'placement': position });
      //   }, 500);
      // });
    }
  }

  public get ClassesForShowSelect(): string {
    var show = this.showSizeAttribute ? '' : 'd-none'
    return show
  }

  public get classesForSelect(): string[] {
    var selectTagClasses = ['form-select']
    if (this.size === 'small') {
      var selectSize = 'form-select-sm'
      selectTagClasses.push(selectSize)
    }
    else if (this.size === 'large') {
      var selectSize = 'form-select-lg'
      selectTagClasses.push(selectSize)
    }
    else {
      var selectSize = 'default'
      selectTagClasses.push(selectSize)
    }

    return selectTagClasses
  }

  public get bootstrapIcon(): string {
    var icon = this.customIcon
    return icon
  }

  public get icon(): string[] {
    var classList = [''];
    if (this.customIcon === '') {

      return classList
    }
    else {
      classList.push('icon')
      return classList
    }
  }

  public get divclasses(): string[] {
    var classList = ['mb-3'];
    if (this.LabelType === 'Left') {
      classList.push('d-flex align-items-baseline justify-content-end gap-3');
    } else if (this.LabelType === 'Right') {
      classList.push('d-flex align-items-baseline flex-row-reverse gap-3');
    } else if (this.LabelType === 'Bottom') {
      classList.push('d-flex flex-column-reverse');
    } else {
      classList.push('d-block');
    }
    return classList;
  }

  public get iconPosition(): string {
    if (this.customIcon === '') {
      return ''
    }
    else {
      return 'icon-position'
    }
  }

  onSelect(event: any) {
    this.onChange(event.target.value)
    this.onTouched()
  }

}
