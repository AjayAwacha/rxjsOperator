import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergingOperatorComponent } from './merging-operator.component';

describe('MergingOperatorComponent', () => {
  let component: MergingOperatorComponent;
  let fixture: ComponentFixture<MergingOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergingOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergingOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
