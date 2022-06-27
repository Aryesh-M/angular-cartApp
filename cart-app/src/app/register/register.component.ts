import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../models/users';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public  users: Users = {
    _id: '',
    name: '',
    email: '',
    password: '',
    address: [],     
    isAdmin: false,     
    cartItems: []
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public createnewUser(newUser: Users): void{
    this.userService.createUser(newUser)
    .then(newUser => {      
      if (newUser) {
        localStorage.setItem('user_id', newUser._id);      
        this.router.navigate([`/products`]);
      }
    });
  }
}