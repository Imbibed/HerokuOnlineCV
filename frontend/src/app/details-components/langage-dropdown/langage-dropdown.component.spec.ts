import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageDropdownComponent } from './langage-dropdown.component';

describe('LangageDropdownComponent', () => {
  let component: LangageDropdownComponent;
  let fixture: ComponentFixture<LangageDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangageDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
