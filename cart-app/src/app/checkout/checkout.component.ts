import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartitems: Users[] = [];
  public items: string[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }
  public checkout(): void{
    alert("Thanks for your payment.");
    window.location.href = window.location.href.replace('/cart',"");
  }
  public getUserData(): void{
    let userId = JSON.stringify(localStorage.getItem('user_id'));
    this.userService.getUsersById(JSON.parse(userId))
    .then(userData => {      
      if (userData) {
        console.log("userData");       
        console.log(userData.cartItems);       
        this.items = JSON.parse(JSON.stringify(userData.cartItems));
        console.log(typeof this.items);        
      }
    });
  }
}
