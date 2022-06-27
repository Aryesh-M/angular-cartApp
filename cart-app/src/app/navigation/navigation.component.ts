import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public isUserLoggedIn: Boolean = false;
  constructor() { }

  ngOnInit(): void {
    let _this = this;
    setInterval(function(){
      _this.checkForLogin();
    },500)
  }
  public logOut(){
    localStorage.clear();
    window.location.href = window.location.origin;
  }

  public checkForLogin(): void {
    let userId = localStorage.getItem("user_id");
    let userData = localStorage.getItem("userData");

    if( userId && userId.length || userData && userData.length ){
        this.isUserLoggedIn = true;
    }else {
      this.isUserLoggedIn = false;
    }    
  }

}
