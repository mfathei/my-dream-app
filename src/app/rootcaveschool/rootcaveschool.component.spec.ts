import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootcaveschoolComponent } from './rootcaveschool.component';

describe('RootcaveschoolComponent', () => {
  let component: RootcaveschoolComponent;
  let fixture: ComponentFixture<RootcaveschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootcaveschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootcaveschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
