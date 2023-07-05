import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  id=localStorage.getItem("emailId");

  constructor(private httpclient:HttpClient) { }
  public addToFavorites(cuisine:any){
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.post<any>("http://localhost:8082/fav/addcuisine",cuisine);
    // ,{ 'headers': reqHeader }
  }
  public getFavorites(){    
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.get<any>("http://localhost:8082/fav/getall/"+this.id);
    // { 'headers': reqHeader }
  }
  public deleteFavorites(id:number){
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.delete<any>("http://localhost:8082/fav/delete/"+id+"/"+this.id);
  }
  // public updateCuisine(restaurant:Restaurant){
  //   let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
  //   return this.httpclient.put("http://localhost:65001/data/update",restaurant,{ 'headers': reqHeader });
  // }

  public addToCart(cuisine:any){
    // let reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
    return this.httpclient.put<any>("http://localhost:8083/cart/addcuisine/"+this.id,cuisine);
    // ,{ 'headers': reqHeader }
  }
}
