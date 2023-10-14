import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToViewComponent } from './how-to-view.component';

describe('HowToViewComponent', () => {
  let component: HowToViewComponent;
  let fixture: ComponentFixture<HowToViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToViewComponent]
    });
    fixture = TestBed.createComponent(HowToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
