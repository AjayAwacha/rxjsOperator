import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralRxjsOperatorComponent } from './general-rxjs-operator.component';

describe('GeneralRxjsOperatorComponent', () => {
  let component: GeneralRxjsOperatorComponent;
  let fixture: ComponentFixture<GeneralRxjsOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralRxjsOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralRxjsOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
