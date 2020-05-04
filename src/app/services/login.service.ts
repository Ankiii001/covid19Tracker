import { Injectable, EventEmitter, Output, OnInit } from '@angular/core';
import { IUser } from '../shared/interfaces/IUser';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService implements OnInit{

  /** Array of login user data. */
  private loginData: IUser[];
  
  adminLogIn: BehaviorSubject<boolean>;

  constructor() {
    this.adminLogIn = new BehaviorSubject(false);
    this.getUsers();
    this.getLoginStatus()
  }

  ngOnInit(): void {
    this.getLoginStatus()
  }
  
  /** Method to get all login user data. */
  getUsers(): IUser[] {
    this.loginData = [{
      "id": 1,
      "username": "ankit",
      "password": "ankit"
    }, {
      "id": 2,
      "username": "admin",
      "password": "admin"
    }];
    return this.loginData;
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr => user.username.toLowerCase() === usr.username.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }

  getLoginStatus(){
    if(localStorage.getItem('LOGINTOKEN') === 'asd@zxc'){
      this.adminLogIn.next(true)
    }else{
      this.adminLogIn.next(false)
    }
    console.log(localStorage.getItem('LOGINTOKEN'))
  }

}