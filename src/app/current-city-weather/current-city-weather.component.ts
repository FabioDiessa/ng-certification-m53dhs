import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WeatherService } from '../common/weather.service';
import { ICity, ITemperature, IWeather } from '../shared/city.model';

@Component({
  selector: 'app-current-city-weather',
  templateUrl: './current-city-weather.component.html',
  styleUrls: ['./current-city-weather.component.css'],
})
export class CurrentCityWeatherComponent implements OnInit {
  @Input() cityZipCode: string;
  @Output() removeCity = new EventEmitter();
  city: ICity;
  imageUrl: string = '';
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getTodayWeather(this.cityZipCode).subscribe((data) => {
      this.city = this.populateCity(data);
      this.imageUrl = this.city.weather?.main.toLocaleLowerCase();
    });
  }

  deleteCity() {
    this.removeCity.emit(this.cityZipCode);
  }

  populateCity(data): ICity {
    let weather: IWeather = {
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
    };

    let temperature: ITemperature = {
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
    };
    let a: ICity = {
      zipCode: this.cityZipCode,
      name: data.name,
      weather: weather,
      temperature: temperature,
    };
    return a;
  }
}
