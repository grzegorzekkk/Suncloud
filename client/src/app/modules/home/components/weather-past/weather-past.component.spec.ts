import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPastComponent } from './weather-past.component';

describe('WeatherPastComponent', () => {
  let component: WeatherPastComponent;
  let fixture: ComponentFixture<WeatherPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
