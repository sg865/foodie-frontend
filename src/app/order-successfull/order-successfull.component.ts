import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderSuccessfullService } from '../services/order-successfull.service';

@Component({
  selector: 'app-order-successfull',
  templateUrl: './order-successfull.component.html',
  styleUrls: ['./order-successfull.component.css']
})
export class OrderSuccessfullComponent implements OnInit {
   orderdCuisine:any;
  constructor(private ordersuccess:OrderSuccessfullService) { }

  ngOnInit() {
    this.orderdCuisine =this.ordersuccess.getCuisine();
  }

}
