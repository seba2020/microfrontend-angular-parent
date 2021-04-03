import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildWrapperComponent } from './child-wrapper.component';

describe('ChildWrapperComponent', () => {
  let component: ChildWrapperComponent;
  let fixture: ComponentFixture<ChildWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
