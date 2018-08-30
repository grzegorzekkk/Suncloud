import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLiveComponent } from './weather-live.component';

describe('WeatherLiveComponent', () => {
  let component: WeatherLiveComponent;
  let fixture: ComponentFixture<WeatherLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
