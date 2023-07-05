import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from '../classes/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
        rest:Restaurant;
        message:String;
        imageurl:string;
        imageFile:any;
       selectedFile: any;
        url: any;
  restaurantInfo: any;
  restObj: any;
  restlist: any=[];
    
  constructor(private snackbar:MatSnackBar,private restService:RestaurantService,private router:Router) { }

  restaurantFormGroup= new FormGroup({
    // restaurantId:new FormControl('',Validators.required),
    restaurantName:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required)
  });

  ngOnInit(): void {
  }
  addRestaurant() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    this.restaurantInfo = this.restaurantFormGroup.value;
          this.restObj={
            restaurantId:this.restaurantFormGroup.value.restaurantId,
            restaurantName:this.restaurantFormGroup.value.restaurantName,
            city:this.restaurantFormGroup.value.city,
            address:this.restaurantFormGroup.value.address,
            image:this.selectedFile
          }
          this.restlist.push(this.restObj)
          let obj = new FormData(
            
          )
          let data;
          data =obj.append("image",this.restlist[0].image,this.restlist[0].image.name);
          delete this.restlist[0]['image'];
          console.log(data)
          obj.append("restaurant",JSON.stringify(this.restlist[0]));

          console.log(obj.toString)
    let response = this.restService.addRestaurant(obj);
    response.subscribe(
      (success)=>    
      {
         this.message=success;
         console.log(this.message);
         this.snackbar.open("added successfully","",{duration:1000})
         window.localStorage.setItem("restId",this.restaurantFormGroup.value.restaurantId);
         this.router.navigateByUrl("restadd");
         
      },
      (error)=>{
          console.log("invalid")
          this.snackbar.open("added successfully")

        //  this.router.navigateByUrl("/home")
      });

    }
   
  // addRestauant(){
  //   this.rest = this.restaurantFormGroup.value;
  //   console.log(this.rest);
  //   let response = this.restService.addRestaurant(this.rest);
  //   response.subscribe(
  //     (success)=>    
  //     {
  //        this.message=success;
  //       //  alert("restaurant added successfully");
  //        window.localStorage.setItem("restId",this.restaurantFormGroup.value.restaurantId);
  //        this.router.navigateByUrl("restadd");
        
  //     },
  //     (error)=>{
  //         console.log("invalid")
  //     });
  

  // }
  imgSave(e:any){
    this.selectedFile=e.target.files[0]
    var reader= new FileReader()
    reader.readAsDataURL(this.selectedFile)
    reader.onload=(data:any)=>{
               this.url=data.target.result
    }
    console.log(this.selectedFile)
}

}
