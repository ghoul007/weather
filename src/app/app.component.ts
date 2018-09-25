import { Component } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  current: { city: any; country: any; date: number; image: string; temperature: number; description: any; };


  constructor(private weatherService: WeatherService) { }

  doSearch(searValue){
    debugger
    this.weatherService.getCurrentWeather(searValue, searValue)
    .subscribe((data) => {
      this.current = this.transformCurrentWeather(data)
    })
  }


  transformCurrentWeather(data: any) {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToFahrenheit(data.main.temp),
      description: data.weather[0].description
    }
  }


  convertKelvinToFahrenheit(kelvin: number): number {
    return kelvin * 9 / 5 - 459.67;
  }
  
}
