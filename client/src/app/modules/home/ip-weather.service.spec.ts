import { TestBed, inject } from '@angular/core/testing';

import { IpWeatherService } from './ip-weather.service';

describe('IpWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpWeatherService]
    });
  });

  it('should be created', inject([IpWeatherService], (service: IpWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
