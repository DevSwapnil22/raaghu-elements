import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rds-avatar',
  templateUrl: './rds-avatar.component.html',
  styleUrls: ['./rds-avatar.component.scss']
})
export class RdsAvatarComponent implements OnInit {

  title = 'rds-avatar';
  fName = '';
  lName = '';

  @Input() WithProfilePic!: boolean;
  @Input() profilePic!: string;
  @Input() FirstName!: string;
  @Input() LastName!: string;
  @Input() Size!: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.fName = this.FirstName.charAt(0);
    this.lName = this.LastName.charAt(0);
  }

}
