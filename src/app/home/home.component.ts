import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Restaurant } from '../classes/restaurant';
import { HideAndshowService } from '../services/hide-andshow.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurantList: any;
  searchCity: any
  searchRestaurant: any;
  city: any = window.localStorage.getItem("usercity");
  islogged: boolean;
  p:number =1;


  constructor(private snackbar:MatSnackBar,private restaurantService: RestaurantService, private hideService: HideAndshowService) { 
    // this.city="";
  }

  hide: boolean;
// i:any=0

  ngOnInit() {
    
    // this.city="Banglore";
    // for(this.i;this.i<1;this.i++){
    //   window.location.reload()
    // }
    
    this.hide = this.hideService.getRole();
    this.islogged = this.hideService.isLoggedIn();

    console.log(this.city);
    // if(this.city==="location")
    // {
    //    this.restaurantService.allRestaurants().subscribe(
    //     success => {
    //       this.restaurantList =success;
    //       console.log(success);
    //       this.snackbar.open("All Restaurants","",{duration:2000})
         
    //     },
    //     error => {
    //       console.log(error);
    //       this.snackbar.open("Error","",{duration:2000})
    //     });
    // }
 
    let response = this.restaurantService.getRestaurants(this.city);

    response.subscribe(
      (success) => {
        this.restaurantList = success;
        for (let i = 0; i < this.restaurantList.length; i++)
          this.restaurantList[i].image = 'data:image/jpeg;base64,' + this.restaurantList[i].image
        console.log("success")
      },
      (error) => {
        console.log("fail")
      });




  }

  getAllRestaurantsByCity() {
    window.localStorage.setItem("city", this.searchCity);
    console.log(window.localStorage.getItem("city"));
    let response = this.restaurantService.getRestaurants(this.city);

    response.subscribe(
      (success) => {
        this.restaurantList = success;
        console.log("success")
      },
      (error) => {
        console.log("fail")
      });


  }
  getRestaurantId(id: any) {
    window.localStorage.clear;
    window.localStorage.setItem("restaurantId", id)
    console.log(id);
  }

  selectLocation(e: any) {
    // alert(e.target.value);
    this.snackbar.open(e.target.value,"",{duration:1000})
    this.city = e.target.value;
    this.ngOnInit();
    console.log(this.city);

  }
  deleteRestaurant(id: number) {
    let response = this.restaurantService.deleterestaurant(id);
    response.subscribe(
      (success) => {
        this.ngOnInit();
        console.log("deleted");

      },
      (error) => {
        console.log("error");


      })
  }

}
