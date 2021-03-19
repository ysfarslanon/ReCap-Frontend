import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseApiUrl="https://localhost:44305/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"cars/getdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"cars/getdetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }

}
