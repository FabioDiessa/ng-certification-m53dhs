import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';

import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';
import { WeatherService } from './common/weather.service';
import { CurrentCityWeatherComponent } from './current-city-weather/current-city-weather.component';
import { FiveDaysForecastComponent } from './five-days-forecast/five-days-forecast.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ZipCodeComponent,
    CurrentCityWeatherComponent,
    FiveDaysForecastComponent,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
