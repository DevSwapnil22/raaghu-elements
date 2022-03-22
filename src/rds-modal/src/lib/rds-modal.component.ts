import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-modal',
  templateUrl: './rds-modal.component.html',
  styleUrls: ['./rds-modal.component.scss']
})
export class RdsModalComponent implements OnInit {

  onChange!: (value: string) => void;
  onTouched!: () => void

  constructor() { }

  ngOnInit(): void {
  }

  // @Input()
  // modalNo?:string ;

  @Input()
  label?: string;

  @Input() title?: string;
  @Input() content?: string;
  // @Input() footer? : string;
  @Input()
  backgroundColor?: string;
  @Input()
  height?: number;


  @Input()
  modalId?: string;
  @Input()
  backdropstatic?: any

  @Input() modalData: any

  @Output()
  onShow = new EventEmitter<Event>();

  @Output()
  onClose = new EventEmitter<Event>();
  @Output() onClick = new EventEmitter();

  @Input()
  ModalClasses: 'modal-dialog' | 'modal-dialog modal-dialog-centered' | 'modal-dialog modal-dialog-scrollabl' | 'modal-dialog modal-xl' | 'modal-dialog modal-lg' | 'modal-dialog modal-sm' = 'modal-dialog';

  @Input()
  Animation: 'modal fade' | 'modal fade-scale' | 'modal fade-rotate' | 'modal fade-flip' = 'modal fade';

  @Input()
  modalheader!: TemplateRef<any>;
  @Input()
  Modalbody!: TemplateRef<any>
  @Input()
  Modalfooter!: TemplateRef<any>

  public get classes(): string[] {
    var classes = ['modal-dialog']
    if (this.ModalClasses === 'modal-dialog modal-dialog-centered') {
      classes.push('modal-dialog-centered')
      return classes
    }
    if (this.ModalClasses === 'modal-dialog modal-dialog-scrollabl') {
      classes.push('modal-dialog-scrollabl')
      return classes
    }
    return classes
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

}
