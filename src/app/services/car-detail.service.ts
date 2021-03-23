import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {  
  constructor(private httpClient:HttpClient) { }
  
  baseApiUrl="https://localhost:44305/api/"
  getCarImagesByCarId2():Observable<ListResponseModel<CarImage>>{
    let newApiUrl=this.baseApiUrl+"carimages/getbycarid?carid=2"
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl)
  }


  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newApiUrl=this.baseApiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl)
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newApiUrl=this.baseApiUrl+"carimages/getbycarid?carid="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl)
  }

}


