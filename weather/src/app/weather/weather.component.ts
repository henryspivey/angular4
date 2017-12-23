import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherInformation, WeatherService} from ".././weather.service";

interface WeatherInformation {
  city: string;
  code: number;
  temperature: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  weather: WeatherInformation = undefined;

  weatherExists() {
    return !!this.weather;
  }

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.weatherService.getWeather()

  }

}
