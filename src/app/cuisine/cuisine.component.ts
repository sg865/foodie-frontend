import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuisineService } from '../services/cuisine.service';
import { Cuisine } from '../classes/cuisine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

   message:any;
   dish:Cuisine;

  cuisineFormGroup= new FormGroup({
    cuisineName:new FormControl('',Validators.required),
    cuisineId:new FormControl('',Validators.required),
    price:new FormControl('',[Validators.required,Validators.pattern("^[1-9]+[0-9]*$")]),
    quantity:new FormControl('',Validators.required),
    image:new FormControl('',Validators.required)
  });
  selectedFile: any;
  cuisinetInfo: any;
  cusObj: any;
  cuslist: any=[];
  url: any;


  constructor(private cuisineService:CuisineService, private router:Router) { }

  ngOnInit(): void {
  }

  // addCuisineToRestaurant(){this.dish = this.cuisineFormGroup.value;
  //   console.log(this.dish);
  //   let response = this.cuisineService.addCuisine(this.dish);
  //   response.subscribe(
  //     (success)=>    
  //     {
  //        this.message=success;
  //        alert("cuisine added to restaurant successfully");
  //        this.router.navigateByUrl("/cuisinesuccess")
  //     },
  //     (error)=>{
  //         console.log("invalid")
  //     });
  


  // }
  addCuisineToRestaurant() {
    // if (this.form.valid) {
    //   this.submitEM.emit(this.form.value);
    this.cuisinetInfo = this. cuisineFormGroup.value;
          this.cusObj={
            cuisineId:this. cuisineFormGroup.value. cuisineId,
            cuisineName:this. cuisineFormGroup.value.cuisineName,
            price:this.cuisineFormGroup.value.price,
            quantity:this.cuisineFormGroup.value.quantity,
            image:this.selectedFile
          }
          this.cuslist.push(this.cusObj)
          let obj = new FormData(           
          )
          let data;
          data =obj.append("image",this.cuslist[0].image,this.cuslist[0].image.name);
          delete this.cuslist[0]['image'];
          console.log(data)
          obj.append("cuisine",JSON.stringify(this.cuslist[0]));

          console.log(obj.toString)
    let response = this.cuisineService.addCuisine(obj);
    response.subscribe(
      (success)=>    
      {
         this.message=success;
         console.log(this.message);
         this.router.navigateByUrl("cuisinesuccess");
         
      },
      (error)=>{
          console.log("invalid")
          alert("restaurant added successfully..");

        //  this.router.navigateByUrl("/home")
      });

    }
    imgSave(e:any){
      this.selectedFile=e.target.files[0]
      var reader= new FileReader()
      reader.readAsDataURL(this.selectedFile)
      reader.onload=(data:any)=>{
       this.url=data.target.result
      }
      console.log(this.selectedFile)
  }

  get price(){
    return this.cuisineFormGroup.get('price')
  }
}
