import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'http://localhost:3000/users';   
  constructor(private http:HttpClient){}

  getUsers() : Promise<void | Users[]>{

    return this.http.get(this.usersUrl)
     .toPromise()
     .then(response => response as Users[])
     .catch(this.errorHandlerofUsers);
   } 

   getUsersById(myUsersId: string) {
    return this.http.get(`${this.usersUrl}/${myUsersId}`)
    .toPromise()
    .then(response => response as Users)
    .catch(this.errorHandlerofUsers);
  }

  getLoginData(email: string, password: string) {
    return this.http.post(`${this.usersUrl}/login`, {email: email, password: password})
    .toPromise()
    .then(response => response as Users)
    .catch(this.errorHandlerofUsers);
  }


  createUser(createNewUser: Users): Promise<void | Users> {
    return this.http.post(this.usersUrl, createNewUser)
      .toPromise()
      .then(response => response as Users)
      .catch(this.errorHandlerofUsers);
  }

  deleteUsers(myUsersId : string) {
    return this.http.delete(`${this.usersUrl}/${myUsersId}`)
    .toPromise()
    .then(response => response as Users)
    .catch(this.errorHandlerofUsers);
  }

  editUsers(usersId: string, editUsers: Users): Promise<void | Users> {    
    return this.http.put(`${this.usersUrl}/${usersId}`, editUsers)
    .toPromise()
    .then(response => response as Users)
    .catch(this.errorHandlerofUsers);
  } 

   private errorHandlerofUsers(error: any){
     if(error.error.message && error.error.message.includes('User')){
        alert(error.error.message);
     }
  }
}
