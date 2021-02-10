import { Component, OnInit } from '@angular/core';
import { City } from '../interfaces/city';
import { CitiesService } from '../services/citiesService';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities: City[];

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {
    this.citiesService.getCities().subscribe(
      (cities: City[]) => (this.cities = cities['cities']),
      (error) => console.log(error)
    );
  }
  onDeleted(e) {
    console.log(e);
    const position = this.cities.findIndex((cityEl: City) => {
      return cityEl.id == e.id;
    });
    this.cities.splice(position, 1);
  }
  onAdded(e) {
    console.log(e);
    console.log(this.cities);
    const city = this.cities.findIndex((cityEl: City) => {
      return cityEl.id == e.id;
    });
    console.log(city);
    this.cities.push(e);
  }
}
