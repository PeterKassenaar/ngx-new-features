import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalChildComponent } from './signal-child.component';

describe('SignalChildComponent', () => {
  let component: SignalChildComponent;
  let fixture: ComponentFixture<SignalChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
