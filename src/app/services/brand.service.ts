import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseApiUrl = 'https://localhost:44305/api/brands/';
  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newApiUrl = this.baseApiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newApiUrl);
  }
  
  add(brand: Brand): Observable<ResponseModel> {
    let newApiUrl = this.baseApiUrl + "add"
    return this.httpClient.post<ResponseModel>(newApiUrl, brand)
  }
}
