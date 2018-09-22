import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;
  let weatherMockService;
  beforeEach( () => {

    weatherMockService= jasmine.createSpyObj(['getCurrentWeather'])
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: WeatherService, useValue: weatherMockService }],
       schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
