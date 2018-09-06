import { Component, OnInit } from '@angular/core';
import { WeatherMeasurementsService } from '../../weather-measurements.service';
import { Measurement } from './measurement';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-weather-past',
  templateUrl: './weather-past.component.html',
  styleUrls: ['./weather-past.component.css']
})
export class WeatherPastComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  latestMeasurement: Measurement;
  selectedMeasurement: Measurement;
  measurements: Measurement[];

  constructor(private weatherService: WeatherMeasurementsService) { }

  ngOnInit() {
    this.updateDisplayedMeasurements();
  }

  updateDisplayedMeasurements() {
    this.blockUI.start();
    this.measurements = [];
    this.weatherService.fetchAllMeasurements().subscribe(data => {
      data.forEach(it => this.measurements.push(Measurement.fromJson(it)));
    });
    this.weatherService.fetchLatestMeasurement().subscribe(data => {
      this.latestMeasurement = Measurement.fromJson(data);
      this.selectedMeasurement = this.latestMeasurement;
      this.blockUI.stop();
    }, err => {
      this.selectedMeasurement = undefined;
      this.blockUI.stop();
    });
  }

  changeDisplayedMeasurement(id: number) {
    this.selectedMeasurement=this.measurements.find(x => x.id===id);
  }

  deleteMeasurement(id: number) {
    this.weatherService.deleteMeasurement(id).subscribe(res => {
      this.updateDisplayedMeasurements();
    }, err => {
      console.log(err);
    });
  }
}
