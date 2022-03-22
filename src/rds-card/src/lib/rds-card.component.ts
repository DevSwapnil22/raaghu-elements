import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-card',
  templateUrl: './rds-card.component.html',
  styleUrls: ['./rds-card.component.scss']
})
export class RdsCardComponent implements OnInit {

  @Input() backgroundColor?: string;
  @Input() bodybackGroundColor?: string;
  @Input() borderRadious?: number;
  @Input() Paddig?: number;
  @Input() color?: string;
  @Input() width?: string = "100%";
  @Input() height?: string = "100%";
  @Input() borderwidth?: number;
  @Input()
  header!: TemplateRef<any>
  @Input()
  footer!: TemplateRef<any>
  @Input()
  body!: TemplateRef<any>
  @Input()
  footerbackGroundColor?: string;
  @Input()
  Data: any = {
    headerTitle: "Header Title",
    cardDescription: "Some quick example text to build on the card title and make up the bulk of the card\'s content"
  }

  constructor() { }

  ngOnInit(): void {
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

}
