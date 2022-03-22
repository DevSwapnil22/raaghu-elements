import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-offcanvas',
  templateUrl: './rds-offcanvas.component.html',
  styleUrls: ['./rds-offcanvas.component.scss']
})
export class RdsOffcanvasComponent implements OnInit {

  @Input() buttonTitle = 'Button'
  @Input() placement?: 'start' | 'end ' | 'top ' | 'bottom ' = 'start';
  @Input() backDrop?: boolean = true;
  @Input() scrolling?: boolean = true;
  @Input() offId = 'canvasExample';
  @Input() canvasTitle = "Title";
  @Output() onShow = new EventEmitter<Event>();
  @Output() onClose = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const align = ` offcanvas offcanvas-${this.placement}`;

    return align;
  }

}
