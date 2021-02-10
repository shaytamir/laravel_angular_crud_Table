import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { City } from '../interfaces/city';
import { CitiesService } from '../services/citiesService';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() city: City;
  @Output() cityDeleted = new EventEmitter<City>();
  editing = false;
  editName: String = '';
  editPopulation: String = '';
  editCountry: String = '';
  // editPath: any = require('../../assets/images/edit.png');

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {}
  onEditClick() {
    // console.log(form.value);
    this.editing = true;
    this.editName = this.city.name;
    this.editPopulation = this.city.population;
    this.editCountry = this.city.country;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.citiesService
      .updateCity(
        this.city.id,
        form.value.name,
        form.value.population,
        form.value.country
      )
      .subscribe((city: City) => {
        this.editName = '';
        this.editPopulation = '';
        this.editCountry = '';
      });
    this.editing = false;
  }
  onCencelClick() {
    this.editing = false;
    this.editName = this.city.name;
    this.editPopulation = this.city.population;
    this.editCountry = this.city.country;
  }
  onDeleteClick() {
    this.citiesService.deleteCity(this.city.id).subscribe(() => {
      this.cityDeleted.emit(this.city);
      console.log('city Deleted');
    });
  }
}
