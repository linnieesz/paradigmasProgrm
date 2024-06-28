import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CalendarComponent
      ],
    }).compileComponents();
  });

  it('should create the calendar', () => {
    const fixture = TestBed.createComponent(CalendarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
