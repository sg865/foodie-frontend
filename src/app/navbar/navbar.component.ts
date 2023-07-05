import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from '../services/datashare.service';
import { HideAndshowService } from '../services/hide-andshow.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   image= localStorage.getItem("image1");
   userName=localStorage.getItem("userName");
   show:any ;
   islogged:any;

  constructor(private service:UserService,private transfer:DatashareService, private router:Router, private hideService:HideAndshowService) { }

  ngOnInit(): void {
     this.show = this.hideService.getRole();
     this.islogged = this.hideService.isLoggedIn();
    //  window.location.reload();

    //  this.image = this.transfer.getImage();
 
  }

  logout(){
    localStorage.clear();
    window.location.reload();   
    localStorage.setItem("usercity","city")
    
    this.router.navigate(["/"]);

  }

}
