import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rds-alert',
  templateUrl: './rds-alert.component.html',
  styleUrls: ['./rds-alert.component.scss']
})
export class RdsAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  title = 'rds-alert';

  // visibility true or false
  @Input() visibility = false;

  @Input()
  alertOpen = true

  // @Input()
  // showicon =false
  // @Input()
  // showheading =true
  @Input()
  dismisable = true
  // background-color property
  @Input() backgroundColor?: string;

  @Input() color?: string;

  // added icon in Alert Box

  @Input() icon?: string;

  @Input() label = 'A simple primary alert—check it out!';
  @Input() heading = 'Heading';
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Input() position: 'top' | 'bottom' = 'top';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDismiss = new EventEmitter<Event>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onShow = new EventEmitter<Event>(this.visibility = true);

  public get classes(): string {
    const mode = `alert alert-${this.type} alert-dismissible fade show`;
    const mode2 = `${this.position === 'top' ? ' position-absolute top-0 start-0 m-3' : ' position-absolute bottom-0 start-0 m-3'}`;
    return mode + mode2;
  }
  // public get showIcon():string{
  //   let icon = ''
  //   if(this.showicon=== true){
  //     icon = 'd-none'
  //   }
  //   return icon

  // }

  public get withDismiss(): string {
    let dismiss = 'd-none'
    if (this.dismisable === true) {
      dismiss = ''
    }
    return dismiss

  }

  showAlert() {
    this.alertOpen = true
  }

  closeAlert() {
    this.alertOpen = false;
    this.onDismiss.emit();
    console.log(this.alertOpen)
  }

  // tslint:disable-next-line:typedef
  close() {
    this.visibility = true;
  }

}
