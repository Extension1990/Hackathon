import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1ModalPage } from './tab1-modal.page';

describe('Tab1ModalPage', () => {
  let component: Tab1ModalPage;
  let fixture: ComponentFixture<Tab1ModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1ModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1ModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
