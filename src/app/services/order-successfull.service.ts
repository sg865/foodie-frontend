import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSuccessfullService {
   requiredcuisine:any
   id = window.localStorage.getItem("emailId")
  constructor(private httpClient:HttpClient) { }
    
     getCuisine(){
        return this.requiredcuisine;
     }
     setCuisine(cuisine:any){
      this.requiredcuisine = cuisine;
     }
     email(data:any){
         return  this.httpClient.post("http://localhost:9093/data/email",data)
     }

}
