import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropbox2Component } from './dropbox2.component';

describe('Dropbox2Component', () => {
  let component: Dropbox2Component;
  let fixture: ComponentFixture<Dropbox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dropbox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dropbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
