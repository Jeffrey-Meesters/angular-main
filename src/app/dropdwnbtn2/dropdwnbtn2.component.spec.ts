import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dropdwnbtn2Component } from './dropdwnbtn2.component';

describe('Dropdwnbtn2Component', () => {
  let component: Dropdwnbtn2Component;
  let fixture: ComponentFixture<Dropdwnbtn2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dropdwnbtn2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dropdwnbtn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
