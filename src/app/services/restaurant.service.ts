import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../classes/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  selectedLocation:string;
 

  constructor(private httpclient:HttpClient) { }
  public addRestaurant(restaurant:any){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.post<any>("http://localhost:64100/restaurant/addrestaurant",restaurant,{ 'headers': reqHeader });
  }
  public getRestaurants(city:any){
    
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.get<any>("http://localhost:64100/restaurant/getallrestaurants/"+city,{ 'headers': reqHeader });
    // { 'headers': reqHeader }
  }

  public allRestaurants(){
    
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.get<any>("http://localhost:64100/restaurant/allrestaurants/",{ 'headers': reqHeader });
    // { 'headers': reqHeader }
  }
  public deleterestaurant(id:number){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.delete<any>("http://localhost:64100/restaurant/deleterestaurant/"+id,{ 'headers': reqHeader });
  }
  public updateRestaurant(restaurant:Restaurant){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.put("http://localhost:64100/data/update",restaurant,{ 'headers': reqHeader });
  }

  public setLocation(location: string) {
    
    this.selectedLocation=location;
}
}
