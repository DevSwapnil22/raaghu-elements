import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdsTileComponent } from './rds-tile.component';

describe('RdsTileComponent', () => {
  let component: RdsTileComponent;
  let fixture: ComponentFixture<RdsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdsTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
