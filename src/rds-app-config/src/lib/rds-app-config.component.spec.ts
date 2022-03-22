import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsAppConfigComponent } from './rds-app-config.component';

describe('RdsAppConfigComponent', () => {
  let component: RdsAppConfigComponent;
  let fixture: ComponentFixture<RdsAppConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsAppConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsAppConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
