import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from '../weather/weather.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {


  search = new FormControl('tunis');
  @Output() searchEvent = new EventEmitter<string>();
  constructor( ) { }

  ngOnInit() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.searchEvent.emit(value);
    })
  }

}
