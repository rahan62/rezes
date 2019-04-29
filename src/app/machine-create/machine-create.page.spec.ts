import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineCreatePage } from './machine-create.page';

describe('MachineCreatePage', () => {
  let component: MachineCreatePage;
  let fixture: ComponentFixture<MachineCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
