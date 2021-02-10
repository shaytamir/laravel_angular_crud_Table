import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';
import { NewCityComponent } from './new-city/new-city.component';
import { CitiesService } from './services/citiesService';
import { HttpClientModule, HttpResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CitiesComponent,
    NewCityComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CitiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
