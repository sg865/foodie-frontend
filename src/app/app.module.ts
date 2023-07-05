import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips'; 
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { RestaurantService } from './services/restaurant.service';
import { ShowCuisinesComponent } from './show-cuisines/show-cuisines.component';
import { RestAddsuccessComponent } from './rest-addsuccess/rest-addsuccess.component';
import { CuisineAddsuccessComponent } from './cuisine-addsuccess/cuisine-addsuccess.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HideAndshowService } from './services/hide-andshow.service';
import { AuthGuard } from './auth.guard';
import { OrderSuccessfullComponent } from './order-successfull/order-successfull.component';
// import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
 








// import{FlexLayoutModule}from '@angular/flex-layout'







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    FavouritesComponent,
    CuisineComponent,
    RestaurantComponent,
    HomeComponent,
    AboutUsComponent,
    ShowCuisinesComponent,
    RestAddsuccessComponent,
    CuisineAddsuccessComponent,
    OrderSuccessfullComponent,
    
  ],
  imports: [
    
    MatCardModule,
    MatChipsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    RouterModule,
    // FlexLayoutModule
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatSnackBarModule
    
    
   
  
    
   
   
    
  ],
  providers: [UserService,RestaurantService,HideAndshowService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
