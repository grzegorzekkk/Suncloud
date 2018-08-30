import { TestBed, inject } from '@angular/core/testing';

import { WeatherMeasurementsService } from './weather-measurements.service';

describe('WeatherMeasurementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherMeasurementsService]
    });
  });

  it('should be created', inject([WeatherMeasurementsService], (service: WeatherMeasurementsService) => {
    expect(service).toBeTruthy();
  }));
});
