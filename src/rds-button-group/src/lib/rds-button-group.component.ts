import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-button-group',
  templateUrl: './rds-button-group.component.html',
  styleUrls: ['./rds-button-group.component.scss']
})
export class RdsButtonGroupComponent implements OnInit {

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;
  @Input()
  borderColor?: string;
  @Input()
  color?: string;

  @Input()
  vertical = false;

  @Input()
  type: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  @Input()
  outline = false;

  @Input()
  role: 'button' | 'radio' | 'checkbox' = 'button';

  @Input()
  size: 'small' | 'large' | 'medium' = 'medium';
  /**
   * How large should the button be?
   */
  @Input()
  buttonGroupItem: any[] = [
    {
      label: 'Left',
      iconClass: '',
      id: '',
      name: '',
    },
    {
      label: 'middle',
      iconClass: '',
      id: '',
      name: '',
    },
    {
      label: 'right',
      iconClass: '',
      id: '',
      name: '',
    },
  ];

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const mode = `${this.vertical ? 'btn-group-vertical' : 'btn-group'}`;
    const mode2 = ` btn-group-${this.size === 'small' ? 'sm' : this.size === 'large' ? 'lg' : 'md'}`;
    return mode + mode2;
  }

  public get itemClass(): string {
    const mode = `${this.outline ? 'btn btn-outline-' + this.type : 'btn btn-' + this.type}`;
    return mode;
  }

}
