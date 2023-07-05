import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuisine } from '../classes/cuisine';
import { Login } from '../classes/login';
import { Restaurant } from '../classes/restaurant';


@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  id=window.localStorage.getItem("restaurantId");
  // rest=window.localStorage.getItem("restId");

  constructor(private httpclient:HttpClient) { }

  public addCuisine(obj:any){
    console.log(this.id);
    
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.put<any>("http://localhost:64100/restaurant/addcuisine/"+this.id,obj,{ 'headers': reqHeader });
    // ,{ 'headers': reqHeader }
  }
  public getAllCuisines(){
    
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.get<any>("http://localhost:64100/restaurant/getallcuisines/"+this.id,{ 'headers': reqHeader });
    // { 'headers': reqHeader }
  }
  public deleteCuisine(id:number){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.delete<any>("http://localhost:64100/restaurant/deteltecuisine/"+this.id+"/"+id,{ 'headers': reqHeader });
  }
  public updateCuisine(cuisine:any){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.put<any>("http://localhost:64100/restaurant/updatecuisine/"+this.id,cuisine,{ 'headers': reqHeader });
  }

  public addToCart(cuisine:Cuisine){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.put<any>("http://localhost:64100/restaurant/addcuisine/"+this.id,cuisine,{ 'headers': reqHeader });
    // ,{ 'headers': reqHeader }
  }
}
