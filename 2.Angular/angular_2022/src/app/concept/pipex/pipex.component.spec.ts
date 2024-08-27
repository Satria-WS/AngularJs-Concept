import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipexComponent } from './pipex.component';

describe('PipexComponent', () => {
  let component: PipexComponent;
  let fixture: ComponentFixture<PipexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
