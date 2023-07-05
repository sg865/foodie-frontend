import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../services/cart.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  
  cuisineList:any;
  constructor(private snackbar:MatSnackBar,private service:FavoritesService,private cartService:CartService) { }

  ngOnInit() {
    let response = this.service.getFavorites();
    response.subscribe(
      (success)=>{
           this.cuisineList = success;
           console.log("success");
           
      },
      (error)=>{
            console.log("error");
            
      });

  }
  deleteCuisine(id:number){
    let response = this.service.deleteFavorites(id);
    response.subscribe(
      (success)=>{
           console.log("deleted successfully");
           this.ngOnInit();
           
      },
      (error)=>{
            console.log("error");
            this.ngOnInit();
            
      });
  }
  addToCart(cuisine:any){
    console.log(cuisine);
    const cart = {
      buyerEmail: localStorage.getItem('emailId'),
      cuisineList: [
        {
          cuisineId: cuisine.cuisineId,
          cuisineName: cuisine.cuisineName,
          image: cuisine.image,
          price: cuisine.price,
          quantity: cuisine.quantity,
         
        },
      ],
    };

    let response=this.cartService.addCuisineToCart(cart);
    response.subscribe(
      (success)=>{
        this.snackbar.open("Added To cart Successfully check cart to order","",{duration:2000})
        console.log("added successfully")
        this.ngOnInit();
      },
      (error)=>{
        console.log("failed")
      }
    );
    
  }

}
