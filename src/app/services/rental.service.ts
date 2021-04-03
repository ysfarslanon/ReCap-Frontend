import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  baseApiUrl='https://localhost:44305/api/rentals/';
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newApiUrl=this.baseApiUrl+"getdetails"
  return this.httpClient.get<ListResponseModel<Rental>>(newApiUrl)
  }

  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newApiUrl=this.baseApiUrl+"getdetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newApiUrl)
  }
}
