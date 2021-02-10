import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { City } from '../interfaces/city';
import { CitiesService } from '../services/citiesService';

@Component({
  selector: 'app-new-city',
  templateUrl: './new-city.component.html',
  styleUrls: ['./new-city.component.scss'],
})
export class NewCityComponent implements OnInit {
  @Output() cityAdded = new EventEmitter<City>();

  constructor(private citiesService: CitiesService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.citiesService
      .addCity(form.value.name, form.value.population, form.value.country)
      .subscribe((data) => {
        console.log(data);
        this.cityAdded.emit(data['city']);
        alert('City has been created');
      });
    form.reset();
  }
}
