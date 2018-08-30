import { Component, OnInit } from '@angular/core';
import { WeatherMeasurementsService } from '../../weather-measurements.service';
import { Measurement } from './measurement';

@Component({
  selector: 'app-weather-past',
  templateUrl: './weather-past.component.html',
  styleUrls: ['./weather-past.component.css']
})
export class WeatherPastComponent implements OnInit {
  selectedMeasurement: Measurement;
  measurements: Measurement[];

  constructor(private weatherService: WeatherMeasurementsService) { }

  ngOnInit() {
    this.updateMeasurementsDropdown();
  }

  updateMeasurementsDropdown() {
    this.measurements = [];
    this.weatherService.fetchAllMeasurements().subscribe(data => {
      data.forEach(it => this.measurements.push(Measurement.fromJson(it)));
      this.selectedMeasurement = this.measurements[0];
    });
  }

  changeDisplayedMeasurement(id: number) {
    this.selectedMeasurement=this.measurements.find(x => x.id===id);
  }
}
