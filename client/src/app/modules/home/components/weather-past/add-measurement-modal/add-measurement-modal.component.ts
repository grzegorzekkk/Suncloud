import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WeatherMeasurementsService } from '../../../weather-measurements.service';
import { Measurement } from '../measurement';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-measurement-modal',
  templateUrl: './add-measurement-modal.component.html',
  styleUrls: ['./add-measurement-modal.component.css']
})
export class AddMeasurementModalComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Input() buttonStyle: object = {};

  newMeasurement: Measurement = new Measurement();
  modalRef: NgbModalRef;

  formDate: string;
  formTime: string;

  displayError: boolean;

  constructor(private modalService: NgbModal, private weatherService: WeatherMeasurementsService) { }

  ngOnInit() {
  }

  openMeasurementModal(content) {
    this.modalRef=this.modalService.open(content, { centered: true, beforeDismiss: () => {
      this.displayError=false;
      return true;
    }});
  }

  submitNewMeasurement() {
    this.blockUI.start();
    this.newMeasurement.dateTime = `${this.formDate}T${this.formTime}`;
    this.weatherService.postNewMeasurement(this.newMeasurement).subscribe(
      res => {
        console.log(res);
        this.modalRef.close();
        this.blockUI.stop();
      },
      err => {
        console.log("Error occured");
        this.displayError = true;
        this.blockUI.stop();
      }
    );
  }

}
