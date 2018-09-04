import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Measurement } from './components/weather-past/measurement';

@Injectable({
  providedIn: 'root'
})
export class WeatherMeasurementsService {

  private baseUrl: string = 'http://35.204.36.3:8080';

  constructor(private http: HttpClient) { }

  fetchLatestMeasurement(): Observable<Measurement> {
    return this.http.get<Measurement>(`${this.baseUrl}/api/weather/measurement/latest`);
  }

  fetchAllMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(`${this.baseUrl}/api/weather/measurement/all`);
  }

  postNewMeasurement(measurement: Measurement): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/weather/measurement/`, JSON.stringify(measurement), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
