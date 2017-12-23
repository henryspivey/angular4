import { Component, OnInit } from '@angular/core';
import {City, WeatherService} from '.././weather.service';


interface City {
  name: string;
  imageSrc: string;
  woeId: string;
}

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css'],
  providers: [WeatherService]
})
export class CityListComponent implements OnInit {

  cities: Array<City> = this.weatherService.cities;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

}
