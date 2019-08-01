import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  productsApi = 'https://restcountries.eu/rest/v2/all';

  constructor(private router: Router, private http: HttpClient) { }

  /**
   *  Get countries methods
   */
  getCountry() {
    return this.http.get(this.productsApi);
  }
}
