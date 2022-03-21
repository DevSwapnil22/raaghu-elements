import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-banner',
  templateUrl: './rds-banner.component.html',
  styleUrls: ['./rds-banner.component.scss']
})
export class RdsBannerComponent implements OnInit {

  @Input() backgroundColor!: string;
  @Input() color!: string;
  @Input() alignCenter!: boolean;
  @Input() bannerText!: string;
  @Input() sticky!: boolean;
  @Input() position!: 'top' | 'bottom';

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    let classes: string[] = [];
    if (this.alignCenter === true)
      classes.push('justify-content-center');
    if (this.sticky === true && this.position === 'bottom')
      classes.push('fixed-bottom m-auto');
    if (this.sticky === true && this.position === 'top')
      classes.push('fixed-top');
    return classes
  }

}
