import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private http: HttpClient) {}

  addCity(newName: String, newPop: String, newCountry: String) {
    const body = JSON.stringify({
      name: newName,
      population: newPop,
      country: newCountry,
    });
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(
      'http://localhost/smarti_test/server/public/api/city',
      body,
      { headers: headers }
    );
  }

  getCities(): Observable<any> {
    return this.http
      .get('http://localhost/smarti_test/server/public/api/cities')
      .pipe(
        map((data) => {
          console.log(data['cities']);
          return data;
        })
      );
  }
  updateCity(id: Number, newName: String, newPop: String, newCountry: String) {
    const body = JSON.stringify({
      name: newName,
      population: newPop,
      country: newCountry,
    });
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .patch(
        'http://localhost/smarti_test/server/public/api/city/' + id,
        body,
        {
          headers: headers,
        }
      )
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }

  deleteCity(id: Number) {
    return this.http.delete(
      'http://localhost/smarti_test/server/public/api/city/' + id
    );
  }
}
