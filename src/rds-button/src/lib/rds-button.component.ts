import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-button',
  templateUrl: './rds-button.component.html',
  styleUrls: ['./rds-button.component.scss']
})
export class RdsButtonComponent implements OnInit {

  @Input()
  color?: string;

  @Input()
  submit = false;

  static count: number = 0;
  // @Input()
  // backgroundColor?: string;

  // @Input()
  // borderColor?: string;

  // @Input()
  // color?: string;

  @Input()
  block = false;

  @Input()
  size?: string;

  @Input()
  disabled = false;

  @Input()
  outlineButton = false;

  @Input()
  roundedButton = false;

  // @Input()
  // toggleButton = false;

  @Input()
  icon?: string;

  @Input()
  label?: string;

  @Output()
  onClick = new EventEmitter<Event>();

  @Input() tooltipTitle: string = '';

  @Input() tooltipPlacement: string = 'auto';

  id: string = 'buttonId';
  constructor() {
    RdsButtonComponent.count++;
  }

  ngOnChanges(): void {
    this.setTooltip();
  }

  ngOnInit(): void {
    this.id = this.id + RdsButtonComponent.count;
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
    //   }, 100);
    // });
  }

  public get classes(): string {
    const outline = `${this.outlineButton ? 'btn btn-outline-' + this.color : 'btn btn-' + this.color}`;
    const mode = ` btn-${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`;
    const icon = `${this.roundedButton ? ' btn-icon' : ''}`;
    return outline + mode + icon;
  }

  public get width(): string {
    return this.block ? 'btn-block' : '';
  }

  public get buttonType(): string {
    return this.submit ? 'submit' : 'button';
  }

  ngOnDestroy(): void {
    RdsButtonComponent.count = 0;
  }

}
