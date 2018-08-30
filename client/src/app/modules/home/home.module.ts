import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WeatherLiveComponent } from './components/weather-live/weather-live.component';
import { TranslateModule } from '@ngx-translate/core';
import { WeatherPastComponent } from './components/weather-past/weather-past.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { AddMeasurementModalComponent } from './components/weather-past/add-measurement-modal/add-measurement-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    NgbDropdownModule,
    FormsModule
  ],
  declarations: [
    WeatherLiveComponent,
    WeatherPastComponent,
    HomeComponent,
    WeatherPastComponent,
    AddMeasurementModalComponent
  ]
})
export class HomeModule { }
