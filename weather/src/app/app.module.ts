import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CityListComponent } from './city-list/city-list.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", component: CityListComponent},
  {path: "weather/:woeId", component: WeatherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
