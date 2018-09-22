import { TestBed, inject } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherServiceFake } from './weather.service.fake';

describe('WeatherService', () => {
  let service: WeatherServiceFake;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: WeatherService, useValue: WeatherServiceFake }],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });

    service = TestBed.get(WeatherService);
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));

  it('test request', inject([WeatherServiceFake, HttpTestingController], (service: WeatherServiceFake, controller: HttpTestingController) => {
    service.getCurrentWeather("", "").subscribe();
    controller.verify();
  });

});
