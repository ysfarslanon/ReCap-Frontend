import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  baseApiUrl = 'https://localhost:44305/api/colors/';
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newApiUrl = this.baseApiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Color>>(newApiUrl);
  }

  add(color: Color): Observable<ResponseModel> {
    let newApiUrl = this.baseApiUrl + "add"
    return this.httpClient.post<ResponseModel>(newApiUrl, color)
  }

  update(color:Color):Observable<ResponseModel>{
    let newApiUrl=this.baseApiUrl+"update"
    return this.httpClient.post<ResponseModel>(newApiUrl,color)
  }
  delete(color:Color):Observable<ResponseModel>{
    let newApiUrl=this.baseApiUrl+"delete"
    return this.httpClient.post<ResponseModel>(newApiUrl,color)
  }
}
