import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class selectedRange {
  constructor(
    startDate: string,
    endDate: string
  ) { }
}

@Component({
  selector: 'rds-datepicker',
  templateUrl: './rds-datepicker.component.html',
  styleUrls: ['./rds-datepicker.component.scss']
})
export class RdsDatepickerComponent implements OnInit, ControlValueAccessor {

  selectedDate!: Date;
  bsInlineValue!: Date;
  bsInlineRangeValue?: Date[];
  currentDate!: Date;
  yesterdayDate!: Date;
  lastSevendate!: Date;
  lastFourteendate!: Date;
  firstRange: any;
  lastRange: any;
  maxDate!: Date;
  public selectdate: selectedRange = [];
  title = 'Today';
  dateRange?: Date[];
  public dates!: Date;
  newDate?: 'currentDate' | 'yesterdayDate' | 'lastSevendate' | 'lastFourteendate' | 'custom' = 'currentDate';
  @Input() Label = "Date Range";
  @Input() format: string = 'MM-dd-YYYY';
  selectedRange: any;
  @Output() change = new EventEmitter<any>();
  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };

  constructor() {
    this.selectedDate = new Date();
    this.bsInlineValue = new Date();
    this.currentDate = new Date();
    this.yesterdayDate = new Date();
    this.lastSevendate = new Date();
    this.lastFourteendate = new Date();
    this.dates = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue];
  }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  todayDate(event: Event): void {
    this.currentDate = this.dates;
    this.newDate = 'currentDate';
    this.title = 'Today';
    this.change.emit(this.currentDate);
  }


  yesDate(event: Event) {
    this.yesterdayDate.setDate(this.dates.getDate() - 1);
    this.newDate = 'yesterdayDate';
    this.title = 'Yesterday';
    this.change.emit(this.yesterdayDate);
  }


  lastSevenDate(event: Event): void {
    this.lastSevendate.setDate(this.dates.getDate() - 7);
    this.newDate = 'lastSevendate';
    this.title = ' Last 7 days';
    this.selectdate = [{
      startDate: this.dates,
      endDate: this.lastSevendate
    }]
    this.change.emit(this.selectdate);
  }


  lastFourteenDate(event: Event): void {
    this.lastFourteendate.setDate(this.dates.getDate() - 14);
    this.title = 'Last 14 days';
    this.newDate = 'lastFourteendate';
    this.selectdate = [{
      startDate: this.dates,
      endDate: this.lastFourteendate
    }]
    this.change.emit(this.selectdate);
  }

  changeDate(value: any) {
    let rangeDate = value;
    this.firstRange = rangeDate[0];
    this.lastRange = rangeDate[1];
    console.log(rangeDate);
    this.newDate = 'custom';
    this.title = 'Custom Date';
    this.selectdate = [{
      startDate: this.firstRange,
      endDate: this.lastRange
    }]
    this.change.emit(this.selectdate);
  }

}
