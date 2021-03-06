import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
@Input() current: any  ;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.weatherService.getCurrentWeather('tunis', 'tn')
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
