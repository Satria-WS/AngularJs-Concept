import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningCustomEventComponent } from './listening-custom-event.component';

describe('ListeningCustomEventComponent', () => {
  let component: ListeningCustomEventComponent;
  let fixture: ComponentFixture<ListeningCustomEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeningCustomEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeningCustomEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
