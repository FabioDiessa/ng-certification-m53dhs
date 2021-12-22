import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getTodayWeather(zipCode: string): Observable<any[]> {
    let URL = 'https://api.openweathermap.org/data/2.5/weather';
    let params = new HttpParams();
    params = params.append('zip', zipCode);
    params = params.append('appid', '5a4b2d457ecbef9eb2a71e480b947604');
    return this.http.get(URL, { responseType: 'json', params: params }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  get5daysWeather(zipCode: string): Observable<any[]> {
    let URL = 'https://api.openweathermap.org/data/2.5/forecast/daily';
    let params = new HttpParams();
    params = params.append('zip', zipCode);
    params = params.append('appid', '5a4b2d457ecbef9eb2a71e480b947604');
    params = params.append('cnt', '5');
    return this.http.get(URL, { responseType: 'json', params: params }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
