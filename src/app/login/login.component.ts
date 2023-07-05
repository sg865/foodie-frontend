
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../classes/login';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { DatashareService } from '../services/datashare.service';
import { HideAndshowService } from '../services/hide-andshow.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackbar:MatSnackBar ,private userservice:UserService,private router:Router,private transfer:DatashareService,private showService:HideAndshowService) { }
  loginInfo:Login
  message:string
  image:any;
  userImage:any;
  tokenObj:any;
  
  

  ngOnInit() {
     
  }

 
  form=new FormGroup({
    emailId:new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  });
  

  submit() {
    localStorage.clear;
    this.loginInfo = this.form.value;
    console.log(this.loginInfo);
    let response = this.userservice.userLogin(this.loginInfo);
    response.subscribe(success=>
      {
          console.log(success);
          localStorage.setItem("emailId",this.form.value.emailId)
          window.localStorage.setItem("token",success.token);
          window.localStorage.setItem("role",success.role);
          window.localStorage.setItem("usercity",success.city);
          window.localStorage.setItem("userName",success.username);
           
          
          this.userservice.getImage().subscribe(success=>{
            this.image=success;
            console.log(this.image);
            this.userImage='data:image/jpeg;base64,' +this.image.image;
            this.snackbar.open("logged in successfully","",{duration:2000})
            localStorage.setItem("image1",this.userImage);
            this.transfer.setImage(this.userImage);  
            // window.location.reload();     
            
            this.router.navigate(["/"]);
              
            this.getCityAndRole(window.localStorage.getItem("token"));
            
           
         })
          this.message = success.message;
         
        
          
      },
      error=>{
          this.message = error;
           this.message = "invalid email or password";
           this.snackbar.open("invalid username/password","",{duration:2000})
           window.location.reload();
      });
    }
    getCityAndRole(token:string){
        this.tokenObj = JSON.parse(atob(token.split('.')[1]));

        console.log(this.tokenObj);
    }

  

    
    get emailId(){
      return this.form.get('emailId')
    }
    
    get password(){
      return this.form.get('password')
    }

}

