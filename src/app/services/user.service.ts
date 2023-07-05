import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../classes/login';
import { Signup } from '../classes/signup';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }
     

   userLogin(login:Login){
  
    // return this.httpclient.post<any>("http://localhost:64100/user/register",login) 
    return this.httpclient.post<any>( "http://localhost:64200/user/login", login);
      // return "hi";
  }
  signUp(user:any){
    // return this.httpclient.post<any>("",user)
        // return "hello";
        return this.httpclient.post<any>("http://localhost:64100/user/register",user);
  }
  getImage(){
    return this.httpclient.get<any>("http://localhost:64100/user/getprofile/"+localStorage.getItem("emailId"));
  }
}
