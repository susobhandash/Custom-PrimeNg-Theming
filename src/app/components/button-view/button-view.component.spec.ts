import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonViewComponent } from './button-view.component';

describe('ButtonViewComponent', () => {
  let component: ButtonViewComponent;
  let fixture: ComponentFixture<ButtonViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonViewComponent]
    });
    fixture = TestBed.createComponent(ButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
