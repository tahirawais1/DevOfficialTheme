/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DuTextFieldComponent } from './du-textField.component';

describe('DuTextFieldComponent', () => {
  let component: DuTextFieldComponent;
  let fixture: ComponentFixture<DuTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
