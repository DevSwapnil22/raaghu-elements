import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewBoxComponent } from './add-new-box.component';

describe('AddNewBoxComponent', () => {
  let component: AddNewBoxComponent;
  let fixture: ComponentFixture<AddNewBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
