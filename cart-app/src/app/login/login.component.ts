import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: Users = {
    _id: '',
    name: '',
    email: '',
    password: '',
    address:  [],
    isAdmin: false,
    cartItems: [],
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(userLogin: Users): void{
    this.userService.getLoginData(userLogin.email,userLogin.password)
    .then(userLogin => {      
      if (userLogin) {
        localStorage.setItem('userData', JSON.stringify(userLogin));
        let userData =  localStorage.getItem('userData');
        console.log((userData));
        this.router.navigate([`/products`]);
      }
    });
  }
}