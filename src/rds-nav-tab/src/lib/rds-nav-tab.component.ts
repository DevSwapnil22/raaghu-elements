import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-nav-tab',
  templateUrl: './rds-nav-tab.component.html',
  styleUrls: ['./rds-nav-tab.component.scss']
})
export class RdsNavTabComponent implements OnInit {

  @Input() navtabsItems?: any
  @Input() horizontalAlignment: 'start' | 'center' | 'end' = 'start';
  @Input() verticalAlignment?: boolean;
  @Input() pills?: boolean;
  @Input() tabs?: boolean;
  @Input() fill?: boolean;
  @Input() justified?: boolean;
  @Input() flex?: boolean;
  activepage = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(i: number): void {
    this.activepage = i;
    console.log(i);
  }

  public get classes(): string {
    const align = ` justify-content-${this.horizontalAlignment}`;
    const vertical = `${this.verticalAlignment ? ' flex-column' : ' flex'}`;
    const pill = `${this.pills ? ' nav-pills' : ''}`;
    const tab = `${this.tabs ? ' nav-tabs' : ''}`;
    const fill = `${this.fill ? ' nav-pills nav-fill' : ''}`;
    const justify = `${this.justified ? ' nav-pills nav-justified' : ''}`;
    const flex = `${this.flex ? 'nav-pills flex-column flex-sm-row' : ''}`
    return align + vertical + pill + tab + fill + justify + flex;
  }

  public get class1(): string {
    const mode = `${this.flex ? 'flex-sm-fill text-sm-center' : ''}`
    return mode;
  }

}
