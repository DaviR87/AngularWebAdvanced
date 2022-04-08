import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyChildOfLazyChildComponent } from './lazy-child-of-lazy-child.component';

describe('LazyChildOfLazyChildComponent', () => {
  let component: LazyChildOfLazyChildComponent;
  let fixture: ComponentFixture<LazyChildOfLazyChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyChildOfLazyChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyChildOfLazyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
