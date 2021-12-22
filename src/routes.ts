import { Routes } from '@angular/router';
import { FiveDaysForecastComponent } from './app/five-days-forecast/five-days-forecast.component';
import { HelloComponent } from './app/hello.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch:'full' },
  { path: 'weather', component: HelloComponent },
  {
    path: 'weather/forecast/:zipcode',
    component: FiveDaysForecastComponent,
  },
];
