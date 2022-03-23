import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-profile-card',
  templateUrl: './rds-profile-card.component.html',
  styleUrls: ['./rds-profile-card.component.scss']
})
export class RdsProfileCardComponent implements OnInit {

  @Input() backgroundColor?: string;
  @Input() bodybackGroundColor?: string;
  @Input() borderRadious?: number;
  @Input() Paddig?: number;
  @Input() color?: string;
  @Input() width?: string = "100%";
  @Input() height?: string = "100%";
  clicked = false;
  @Input() borderwidth?: number;
  @Input() header!: TemplateRef<any>
  @Input() Size!: string;
  @Input() footer!: TemplateRef<any>
  @Input() body!: TemplateRef<any>
  @Input() footerbackGroundColor?: string;
  @Input()
  Data: any = {
    loginTitle: "Alex Doe",
  }

  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string {
    const mode = `btn-${this.Size === 'small' ? 'sm' : this.Size === 'large' ? 'lg' : 'md'}`;
    return mode;
  }

  public get classList(): string[] {
    var clsList: string[] = [`${this.Size}`]
    return clsList
  }

  public get cardClasses(): string[] {
    let custClasses = ['card']
    return custClasses
  }

  public get cardBody(): string[] {
    let custClasses = ['card-body', 'body-border']
    return custClasses
  }

  public get title(): string[] {
    let custClasses = ['card-title']
    return custClasses
  }

  showProfile() {
    debugger;
    this.clicked = !this.clicked;
  }

  hideProfile() {
    debugger;
    this.clicked = false;
  }

}
