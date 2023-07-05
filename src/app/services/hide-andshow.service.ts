import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideAndshowService {
  role:any = window.localStorage.getItem("role")

  constructor() { }

  isLoggedIn(){
    
  
      return !!window.localStorage.getItem("token");
      
  }
  getRole():boolean{
    
    if(this.role==="ROLE_USER"){
        return false ; //false for user and true for admin
    }
    else{
      return  true;   //true for user and false for admin
    } 
    
  }
}
