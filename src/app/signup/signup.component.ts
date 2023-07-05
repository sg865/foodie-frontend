import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Signup } from '../classes/signup';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { HideAndshowService } from '../services/hide-andshow.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpInfo:any;
  message:string;
  emailcheck: any;
  show:boolean;

  constructor(private snackbar:MatSnackBar,private service:UserService,private router:Router,private hideService:HideAndshowService) { }

  ngOnInit(): void {
    
  }
  form: FormGroup = new FormGroup({
    userName: new FormControl('',Validators.required),
    mobileNo: new FormControl('',[Validators.pattern("^[0-9]*$")]),  
    emailId: new FormControl('',[Validators.required,Validators.pattern("^([0-9a-z]{4,16})+@[a-z]+\.[a-z]{2,3}$")]),
    password: new FormControl('',[Validators.minLength(5)]),
    city: new FormControl('',Validators.required),
    role: new FormControl('',Validators.required),
    image: new FormControl('',Validators.required),
  });
  
  userObj:any
  userlist:any=[]

  submit() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    this.signUpInfo = this.form.value;
          this.userObj={
            userName:this.form.value.userName,
            mobileNo:this.form.value.mobileNo,
            emailId:this.form.value.emailId,
            password:this.form.value.password,
            city:this.form.value.city,
             image:this.selectedFile
          }
          this.userlist.push(this.userObj)
          let obj = new FormData(
            
          )
          let data;
          data =obj.append("image",this.userlist[0].image,this.userlist[0].image.name);
          delete this.userlist[0]['image'];
          console.log(data)
          obj.append("registration",JSON.stringify(this.userlist[0]));

          console.log(obj.toString)
    let response = this.service.signUp(obj);
    response.subscribe(
      (success)=>    
      {
         this.message=success;
         console.log(this.message);
         localStorage.setItem("emailId",this.form.value.emailId);
         
      },
      (error)=>{
          console.log("invalid")
          // alert("user added successfully..please login to continue");
          this.snackbar.open("user added successfully..please login to continue","",{duration:2000})
         this.router.navigateByUrl("/login")
      });

    }
   
    get userName(){

      return this.form.get('userName')
     
    }
    get password(){

      return this.form.get('password')
     
    }
    get mobileNo(){

      return this.form.get('mobileNo')
     
    }
    get emailId(){

      return this.form.get('emailId')
     
    }
    get address(){

      return this.form.get('address')
     
    }
    get role(){

      return this.form.get('role')
     
    }
    selectedFile:any
    url:any

    imgSave(e:any){
          this.selectedFile=e.target.files[0]
          var reader= new FileReader()
          reader.readAsDataURL(this.selectedFile)
          reader.onload=(data:any)=>{
                     this.url=data.target.result
          }
          console.log(this.selectedFile)
    }

    get image()
    {
      return this.form.get("image")
    }
    onEmailChanged(event:any){
      
      if(this.emailcheck.includes(event.target.value))
       {
         alert("User Already Exists")
       }
     }
   

}
