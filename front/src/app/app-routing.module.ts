import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { NewCityComponent } from './new-city/new-city.component';

const routes: Routes = [
  {
    path: '',
    component: CitiesComponent,
  },
  {
    path: 'new-city',
    component: NewCityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
