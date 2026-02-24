import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenOddComponent } from './even-odd.component';

describe('EvenOddComponent', () => {
  let component: EvenOddComponent;
  let fixture: ComponentFixture<EvenOddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenOddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvenOddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
