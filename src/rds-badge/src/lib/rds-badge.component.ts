import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-badge',
  templateUrl: './rds-badge.component.html',
  styleUrls: ['./rds-badge.component.scss']
})
export class RdsBadgeComponent implements OnInit {

  title = 'rds-badge';
  @Input()
  color?: string;
  @Input()
  BackgroundColor?: string;
  @Input()
  size = 'mid'
  @Input()
  label = '';
  @Input()
  pillBadges = false;
  @Input()
  positioned = false
  @Input()
  iconBadge = false;
  @Output()
  onClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classList(): string[] {
    var clsList: string[] = [`${this.size}`]
    if (this.positioned === true) {
      clsList.push('position-absolute')
      clsList.push('top-0')
      clsList.push('start-100')
      clsList.push('translate-middle')
      clsList.push('badge')
      clsList.push('rounded-pill')

    }
    else if (this.iconBadge === true) {
      clsList.push('position-absolute')
      clsList.push('top-0')
      clsList.push('start-100')
      clsList.push('translate-middle')
      clsList.push('badge')
      clsList.push('rounded-pill')

    }
    else if (this.iconBadge) {

    }
    else {
      if (this.pillBadges) {
        clsList.push('badge')
        clsList.push('rounded-pill')

      } else {
        clsList.push('badge')

      }
    }

    return clsList
  }

}
