import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorCreateObservableComponent } from './operator-create-observable.component';

describe('OperatorCreateObservableComponent', () => {
  let component: OperatorCreateObservableComponent;
  let fixture: ComponentFixture<OperatorCreateObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorCreateObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorCreateObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
