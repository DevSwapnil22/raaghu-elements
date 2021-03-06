import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-tags',
  templateUrl: './rds-tags.component.html',
  styleUrls: ['./rds-tags.component.scss']
})
export class RdsTagsComponent implements OnInit {

  @Input()
  backgroundColor?: string;

  @Input() inputBorderColor?: string;

  @Input() inputBackgroundColor?: string;

  @Input()
  borderColor?: string;

  @Input()
  color?: string;

  @Input()
  tagType?: string;

  @Input()
  closeButtonStyle?: string;

  inputText!: string;
  Tagarray: Array<string> = [];

  showtag: boolean = true;
  @Input()
  Border?: number;

  @Input()
  Borderstyle?: string;

  @Input() roles: 'Basic' | 'TagWithScroll' = 'Basic';

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    var classes = ['bd-example']

    if (this.tagType === 'Square') {
      classes.push('bd-example');
      classes.push('square-tags');
      return classes
    }
    if (this.tagType === 'Round') {
      classes.push('bd-example')
      classes.push('rounded-tags')
      return classes
    }
    return classes
  }

  onKeyDownEvent(event: any) {
    this.Tagarray.push(this.inputText);
    this.inputText = '';
    this.showtag = true
  }

  public get Clossbtnclass(): boolean[] {
    var btnClass: any;
    btnClass = false;
    if (this.closeButtonStyle === 'Normal') {
      btnClass = false
    }
    if (this.closeButtonStyle === 'Fill') {
      btnClass = true
    }
    return btnClass
  }

}
