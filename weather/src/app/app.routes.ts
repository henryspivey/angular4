import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import CityListComponent from "./city-list.component";
import WeatherComponent from "./weather.component";
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: "", component: CityListComponent},
  {path: "weather/:woeId", component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
export class AppRoutingModule { }
