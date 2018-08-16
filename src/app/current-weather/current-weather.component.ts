import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;

  constructor() { }

  ngOnInit() {
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
