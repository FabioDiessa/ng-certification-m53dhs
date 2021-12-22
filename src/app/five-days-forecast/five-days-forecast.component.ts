import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../common/weather.service';
import { ICity, ITemperature, IWeather } from '../shared/city.model';

@Component({
  selector: 'app-five-days-forecast',
  templateUrl: './five-days-forecast.component.html',
  styleUrls: ['./five-days-forecast.component.css'],
})
export class FiveDaysForecastComponent implements OnInit {
  public week: string[] = [
    'Monday, Mar 23: ',
    'Tuesday, Mar 24: ',
    'Wednesday, Mar 25: ',
    'Thursday, Mar 26: ',
    'Friday, Mar 27: ',
  ];
  forecast: ICity[] = [];
  cityName: string = '';
  private currentZipCode: string;
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.currentZipCode = params['zipcode'];
      this.weatherService
        .get5daysWeather(params['zipcode'])
        .subscribe((data) => {
          this.forecast = this.populateCity(data);
        });
    });
  }
  goBack() {
    this.router.navigate(['/weather']);
  }

  populateCity(data): ICity[] {
    let cities = [];
    this.cityName = data.city.name;
    data.list.forEach((cityWeather) => {
      let weather: IWeather = {
        main: cityWeather.weather[0].main,
        description: cityWeather.weather[0].description,
        icon: cityWeather.weather[0].main?.toLocaleLowerCase(),
      };
      let temperature: ITemperature = {
        temp: cityWeather.temp.day,
        temp_min: cityWeather.temp.min,
        temp_max: cityWeather.temp.max,
      };
      let a: ICity = {
        zipCode: this.currentZipCode,
        name: this.cityName,
        weather: weather,
        temperature: temperature,
      };
      cities.push(a);
    });
    return cities;
  }
}
