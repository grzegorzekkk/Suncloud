import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IpWeatherService } from '../../ip-weather.service';
import { WeatherData } from './weather-data';
import { UserLocation } from './user-location';

@Component({
  selector: 'app-weather-live',
  templateUrl: './weather-live.component.html',
  styleUrls: ['./weather-live.component.css']
})
export class WeatherLiveComponent implements OnInit, AfterViewInit {
  currentTime: string;
  city: string;
  country: string;

  weather$: Observable<WeatherData>;
  userLocation$: Observable<UserLocation>;

  constructor(private weatherService: IpWeatherService) {
  }

  ngOnInit() {
    this.updateWeatherData();
    this.userLocation$=this.weatherService.fetchLocationByIp();
  }

  ngAfterViewInit() {
    this.startClock();
  }

  private startClock() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  updateWeatherData() {
    this.weather$=this.weatherService.fetchCurrentWeather();
  }
}
