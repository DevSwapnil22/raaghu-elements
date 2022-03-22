import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAddNewBoxComponent } from './rds-add-new-box.component';

describe('RdsAddNewBoxComponent', () => {
  let component: RdsAddNewBoxComponent;
  let fixture: ComponentFixture<RdsAddNewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAddNewBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAddNewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
