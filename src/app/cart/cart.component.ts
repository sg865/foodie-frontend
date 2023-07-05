import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cuisine } from '../classes/cuisine';
import { CartService } from '../services/cart.service';
import { OrderSuccessfullService } from '../services/order-successfull.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cuisineList:any;
  emailId=localStorage.getItem("emailId")
  cuisineObj: { userName: any; mobileNo: any; emailId: any; password: any; city: any; image: any; };

  constructor(private service:CartService,private successService:OrderSuccessfullService,private router:Router) { }

  ngOnInit() {
    let response = this.service.getAllCuisinesInCart(this.emailId);
    response.subscribe(
      (success)=>{
           this.cuisineList = success;
           console.log("success");
           console.log(this.cuisineList);
           
           
      },
      (error)=>{
            console.log("error");
            
      });
  }
  deleteCuisine(id:number){
    console.log(id);
    let response = this.service.deleteCuisineInTheCart(id);   
    
    response.subscribe(
      (success)=>{           
           console.log("success");
           this.ngOnInit();
           window.location.reload();
      },
      (error)=>{
            console.log("error");
            window.location.reload();  
      });
  }
  order(orderobj:any){
           console.log(orderobj);
           
    
      // let response =this.service.success(orderobj);
      // response.subscribe((success)=>{console.log("done");
      // },(error)=>{console.log("error");
      // });


       
      //  this.router.navigate(["/success"])
  }
  totalPrice:any;
  onShowLog(cusquantity:any,cusprice:any){
      this.totalPrice = cusquantity*cusprice;

  }
  email(product: any) {
    // const body = {
    //    message:"order successfull thank you ",
    //    cuisineName:product.cuisineName,
    //    cuisineId:product.cuisineId,
    //    quantity:product.quantity,
    //    price:product.price,

    // };
    const body = {
      message:"your order is successfully placed, thank you for ordering",
      cuisineId:product.cuisineId,
      cuisineName:product.cuisineName,
      price:product.price,
      quantity:product.quantity
    }
    const data = {
      toEmail: localStorage.getItem("emailId"),
      subject: 'ProductDetails',
      body: JSON.stringify(body),
    };
    this.successService.email(data).subscribe((resp: any) => {
      console.log(resp);
      console.log('in emil');
      this.shareForm.reset();
    });
    this.router.navigate(["/success"]);
  }
  shareForm = new FormGroup({
    shareEmail: new FormControl('', [Validators.required]),
  });



}
