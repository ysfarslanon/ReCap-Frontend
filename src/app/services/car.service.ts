import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseApiUrl="https://localhost:44305/api/cars/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"getdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"getdetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }
  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"getdetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }

  getCarsByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"getdetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }

  getCarsByBrandIdAndColorId(brandId:number,colorId:number):Observable<ListResponseModel<Car>>{
    let newApiUrl=this.baseApiUrl+"getdetailsbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newApiUrl)
  }

  add(car:Car):Observable<ResponseModel>{
    let newApiUrl=this.baseApiUrl+"add"
    return this.httpClient.post<ResponseModel>(newApiUrl,car)
  }
}
