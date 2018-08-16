import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interface';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

    this.weatherService.getCurrentWeather('Bethesda', 'US')
      .subscribe((data) => this.current = data)

    // mock api
    this.current = {
      city: 'Bethesda',
      country: 'US',
      date: new Date(),
      image: 'assets/img/sunny.svg',
      temperature: 72,
      description: 'sunny',
    } as ICurrentWeather
  }

}
