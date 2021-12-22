export interface ICity {
  zipCode: string;
  name: string;
  weather: IWeather;
  temperature: ITemperature;
}

export interface IWeather {
  main: string;
  description: string;
  icon: string;
}

export interface ITemperature {
  temp: number;
  temp_min: number;
  temp_max: number;
}
