import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WeatherServiceFake {
    fakeWeather: any = {
        city: 'Bursa',
        country: 'TR',
        date: 1485789600,
        image: '',
        temperature: 280.32,
        description: 'light intensity drizzle',
    };

    constructor() { }


    getCurrentWeather(city: string, country: string): Observable<any> {
        return of(this.fakeWeather);
    }
}
