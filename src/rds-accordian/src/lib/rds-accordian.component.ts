import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-accordian',
  templateUrl: './rds-accordian.component.html',
  styleUrls: ['./rds-accordian.component.scss']
})
export class RdsAccordianComponent implements OnInit {

  @Input() flush = false;

  @Input() expand = false;

  @Input() Size!: string;

  title: any;

  constructor() { }

  ngOnInit(): void {
  }
  public get classes(): string {
    const mode = this.flush ? 'accordion accordion-flush' : 'accordion';

    return mode;
  }

}
