import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { WeatherData } from './components/weather-live/weather-data';
import { UserLocation } from './components/weather-live/user-location';

@Injectable({
  providedIn: 'root'
})
export class IpWeatherService {

  private locationApiUrl: string = 'https://ipapi.co/json/';
  private weatherApiUrl: string = '';

  constructor(private http: HttpClient) { }

  public fetchCurrentWeather(): Observable<WeatherData> {
    let appId = '9b4bbf30228eb8528d36e79d05da1fac';

    return this.fetchLocationByIp()
      .pipe(
        flatMap(data => {
          return this.http.get<object>(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast/daily?`
            +`APPID=${appId}&lat=${data.latitude}&lon=${data.longitude}&units=metric&cnt=5`);
        }),
        map(data => data['list'][0]),
        map(data => {
          return new WeatherData(
            data['temp']['day'],
            data['temp']['min'],
            data['temp']['max'],
            data['speed'],
            data['humidity'],
            data['dt']);
        })
      );
  }

  public fetchLocationByIp(): Observable<UserLocation> {
    return this.http.get<object>(this.locationApiUrl)
      .pipe(
        map(data => {
          return new UserLocation(
            data['city'],
            data['country'],
            data['latitude'],
            data['longitude']
          );
        })
      );
  }
}
