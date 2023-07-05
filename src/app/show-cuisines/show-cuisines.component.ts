import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, _SnackBarContainer } from '@angular/material/snack-bar';
import { Cuisine } from '../classes/cuisine';
import { Favorite } from '../classes/favorite';
import { CartService } from '../services/cart.service';
import { CuisineService } from '../services/cuisine.service';
import { FavoritesService } from '../services/favorites.service';
import { HideAndshowService } from '../services/hide-andshow.service';


@Component({
  selector: 'app-show-cuisines',
  templateUrl: './show-cuisines.component.html',
  styleUrls: ['./show-cuisines.component.css']
})
export class ShowCuisinesComponent implements OnInit {
  cuisineList:any;
  searchCuisine:any;
  show: boolean;
  islogged:boolean;
  p:number=1
  updateInfo={
    cuisineId:0,
    cuisineName:"",
    image:"",
    price:"",
    quantity:""
  };
  
  updateForm: any;

  // existingFav:any;  
  // existingFav: Favorite=[];
  constructor(private snackbar:MatSnackBar,private cuisineService:CuisineService,private favService:FavoritesService,private cartService:CartService,private hideService:HideAndshowService) { }

  ngOnInit() {
    this.islogged = this.hideService.isLoggedIn();
    this.show = this.hideService.getRole();
    // let favresponse = this.favService.getFavorites();
    // favresponse.subscribe((success)=>{
    //   this.existingFav=success;
    // });

    let response = this.cuisineService.getAllCuisines();

    response.subscribe(
      (success)=>{
        
          this.cuisineList = success;
          for(let i=0;i<this.cuisineList.length;i++)
          this.cuisineList[i].image='data:image/jpeg;base64,' +this.cuisineList[i].image
          console.log("success")
          
      },
      (error)=>{
           console.log("fail")        
      });
    
  }

  deleteCuisine(id:number){
    let response=this.cuisineService.deleteCuisine(id);
    response.subscribe(
      (success)=>{
        console.log("delete successfully")
        this.snackbar.open("Deleted successfully","",{duration:2000});
        this.ngOnInit();
      },
      (error)=>{
        console.log("failed")
      }
    );
    
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
        // alert("added successfully");
        this.snackbar.open("added successfully")
        console.log("added successfully")
        this.ngOnInit();
      },
      (error)=>{

        console.log("failed")
      }
    );
    
    
   
     
  }
  addToFav(cuisine:any){
    // console.log(this.existingFav);
    
    // let found:boolean=false;    
    // console.log(cuisine);
    // for(let fav of this.existingFav){
    //   // console.log(fav.cuisineName)
    //   console.log(fav)
    //    if(fav.cuisineName=== cuisine.cuisineName){
    //     found=true;
    //      this.snackbar.open("favorite is already exists","",{duration:2000})
    //    }
    // }
    // if(found===false){
    const cart = {
      buyerEmail: localStorage.getItem('emailId'),
      favoriteList: [
        {
          cuisineId: cuisine.cuisineId,
          cuisineName: cuisine.cuisineName,
          image: cuisine.image,
          price: cuisine.price,
          quantity: cuisine.quantity,
         
        },
      ],
    };
      console.log(cart);
      
     let response = this.favService.addToFavorites(cart);
     
     
     response.subscribe(
      (success)=>{
        
            console.log("added to fav");
            this.snackbar.open("added to favourites successfully","",{ duration: 2000 });
            
      },
      (error)=>{
             console.log("fav already exhists")
             this.snackbar.open("fav already exists")
      });

  }
  cuisineFormGroup= new FormGroup({
    price:new FormControl('',[Validators.required,Validators.pattern("^[1-9]+[0-9]*$")]),
    cuisineName: new FormControl(''),
    
  });

  dataCuisine(cuisine:any){
    // this.updateForm = this.cuisineFormGroup.value;
    
      this.updateInfo.cuisineName=cuisine.cuisineName,
      this.updateInfo.price=cuisine.price,
      this.updateInfo.image=cuisine.image,
      this.updateInfo.quantity=cuisine.quantity,
      this.updateInfo.cuisineId=cuisine.cuisineId
    
    // this.cuisineService.updateCuisine(this.updateInfo).subscribe(
    //   success => {
    //     console.log(success);
    //     this.snackbar.open("Value changed successfully","",{duration:2000})
       
    //   },
    //   error => {
    //     console.log(error);
    //     this.snackbar.open("Error","",{duration:2000})
    //   });


  }
  updateCuisine(){
    console.log(this.updateInfo);
    
    this.cuisineService.updateCuisine(this.updateInfo).subscribe(
      success => {
        console.log(success);
        this.ngOnInit();
        this.snackbar.open("Value changed successfully","",{duration:2000})
       
      },
      error => {
        console.log(error);
        this.snackbar.open("Error","",{duration:2000})
      });

  }

  

  get price(){
    return this.cuisineFormGroup.get('price')
  }


}
// }
