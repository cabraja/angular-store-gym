import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Country } from '../interfaces/Country';

const htttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiUrl:string = 'assets/data/countries.json';

  constructor(private http:HttpClient) { }

  getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl);
  }
}
