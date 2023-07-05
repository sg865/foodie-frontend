import { Injectable } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  image:any;
  constructor() { }
   
  getImage(){
     console.log(this.image);
         
     return this.image
  }
  setImage(img:any){
      this.image = img;
  }
     
}
