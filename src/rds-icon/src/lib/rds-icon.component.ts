import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-icon',
  templateUrl: './rds-icon.component.html',
  styleUrls: ['./rds-icon.component.scss']
})
export class RdsIconComponent implements OnInit {

  title = 'rds-icon';
  @Input() icon?: string;
  @Input() size = 15;

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const iconClass = `${'bi bi-' + this.icon}`;
    return iconClass;
  }

}
