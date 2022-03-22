import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'rds-dropdownlist',
  templateUrl: './rds-dropdownlist.component.html',
  styleUrls: ['./rds-dropdownlist.component.scss']
})
export class RdsDropdownlistComponent implements OnInit {

  title = 'rds-dropdownlist';

  isMasterSel: boolean;
  categoryList: any;
  checkedCategoryList: any;

  @Input()
  multiSelect!: boolean;

  @Input()
  size?: string;

  @Input()
  varient?: string;

  @Input()
  color?: string;

  @Input()
  placeholder = "Filter by user"

  @Input()
  DropdownItems!: TemplateRef<any>

  @Input()
  listItems!: any;

  constructor() {
    this.isMasterSel = false;
  }

  ngOnInit(): void {
  }

  public get button1(): string {

    var customClasses = [`${this.varient}`]

    if (this.size === 'small') {
      var selectSize = 'btn-sm'
      customClasses.push(selectSize)
    }
    else if (this.size === 'large') {
      var selectSize = 'btn-lg'
      customClasses.push(selectSize)
    }
    else {
      var selectSize = ''
      customClasses.push(selectSize)
    }

    if (this.color !== '') {

      var index = customClasses.indexOf(`${this.varient}`)
      customClasses.splice(index, 1)
    }
    return customClasses.join(' ')
  }

  checkUncheckAll() {
    for (var i = 0; i < this.listItems.length; i++) {
      this.listItems[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.isMasterSel = this.listItems.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  initAllSelect(event: any, item: any) {
    if (this.multiSelect) {
      item.isSelected = !item.isSelected;
      this.isAllSelected();
    }
    else {
      this.placeholder = item.value;
      console.log(item.value); // single select 
    }
  }

  getCheckedItemList() {
    this.checkedCategoryList = [];
    for (var i = 0; i < this.listItems.length; i++) {
      if (this.listItems[i].isSelected)
        this.checkedCategoryList.push(" " + this.listItems[i].value);
    }
    if (this.checkedCategoryList.length > 0) {
      this.placeholder = this.checkedCategoryList.toString();
    }
    else {
      this.placeholder = "Filter";
    }
    console.log(this.checkedCategoryList);

    this.checkedCategoryList = JSON.stringify(this.checkedCategoryList);
  }

}
