import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'rds-tooltip',
  templateUrl: './rds-tooltip.component.html',
  styleUrls: ['./rds-tooltip.component.scss']
})
export class RdsTooltipComponent implements OnInit, AfterViewInit {

  @Input() tooltipTitle = '';
  @Input() tooltipPosition: 'top' | 'bottom' | 'right' | 'left' = 'bottom';

  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:prefer-const
    let script = this._renderer2.createElement('script');
    script.text = `
                var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
                var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                  return new bootstrap.Tooltip(tooltipTriggerEl)
                })
                `;
    this._renderer2.appendChild(this._document.body, script);
  }

}
