import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './cuisine/cuisine.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShowCuisinesComponent } from './show-cuisines/show-cuisines.component';
import { RestAddsuccessComponent } from './rest-addsuccess/rest-addsuccess.component';
import { CuisineAddsuccessComponent } from './cuisine-addsuccess/cuisine-addsuccess.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth.guard';
import { OrderSuccessfullComponent } from './order-successfull/order-successfull.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"signup",
    component: SignupComponent
  },
  {
    path:"addrest",
    component:RestaurantComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"addcuisine",
    component:CuisineComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"cart",
    component: CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"aboutus",
    component: AboutUsComponent
  },
  {
    path:"showcuisine",
    component: ShowCuisinesComponent
    
  },
  {
    path:"restadd",
    component: RestAddsuccessComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:"cuisinesuccess",
    component: CuisineAddsuccessComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path:"favorites",
    component: FavouritesComponent,
    canActivate:[AuthGuard],   
    
    
  },
  {
    path:"success",
    component: OrderSuccessfullComponent,
    canActivate:[AuthGuard]
    
  },

  // {
  //   path:"",
  //   component: NavbarComponent,
  //   children:[
  //     {
  //        path:"home",
  //        component: HomeComponent    
  //     },
  //     {
  //       path:"signup",
  //       component: SignupComponent
  //     },
  //     {
  //       path:"addrest",
  //       component:RestaurantComponent
  //     },
  //     {
  //       path:"addcuisine",
  //       component:CuisineComponent
  //     },
  //     {
  //       path:"cart",
  //       component: CartComponent
  //     },
  //     {
  //       path:"login",
  //       component: LoginComponent
  //     },
  //     {
  //       path:"aboutus",
  //       component: AboutUsComponent
  //     },
  //     {
  //       path:"showcuisine",
  //       component: ShowCuisinesComponent
        
  //     },
  //     {
  //       path:"restadd",
  //       component: RestAddsuccessComponent
        
  //     },
  //     {
  //       path:"cuisinesuccess",
  //       component: CuisineAddsuccessComponent
        
  //     },
  //     {
  //       path:"favorites",
  //       component: FavouritesComponent
        
  //     },

  //   ]
    
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
