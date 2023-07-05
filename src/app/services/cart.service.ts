import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuisine } from '../classes/cuisine';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  id =localStorage.getItem("emailId")

  constructor(private httpclient:HttpClient) { }

  public addCuisineToCart(cuisine:any){
    
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.post<any>("http://localhost:8083/cart/addcuisine",cuisine)
    // { 'headers': reqHeader });
    // ,{ 'headers': reqHeader }
  }
  public getAllCuisinesInCart(emailId:any){
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.get<any>("http://localhost:8083/cart/getall/"+this.id)
    // ,{ 'headers': reqHeader });
    // { 'headers': reqHeader }
  }
  public deleteCuisineInTheCart(id:number){
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.delete<any>("http://localhost:8083/cart/delete/"+id+"/"+this.id);
  }
  public updateRestaurant(cuisine:any){
    let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.put("http://localhost:8083/cart/updatecuisine/"+this.id,cuisine,{ 'headers': reqHeader });
  }
  public success(cuisine:any){
    console.log();
    
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.post<any>("http://localhost:64100/order/success/"+this.id,"thnx");
  }
  
  
}
