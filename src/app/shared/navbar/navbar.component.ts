import { Component, OnInit } from '@angular/core';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faMedkit = faMedkit;
  faUser = faUser;
  faNewspaper = faNewspaper;
  faHome = faHome;
  adminLoggedIn: boolean = false;

  constructor(private loginService:LoginService) {
    if(localStorage.getItem('LOGINTOKEN') === 'asd@zxc'){
      this.adminLoggedIn =true
    }else{
      this.adminLoggedIn = false
    }
    console.log('adminLoggedIn: ' + this.adminLoggedIn)
   }

  ngOnInit(): void {
    this.updateLogin()
  }

  updateLogin(){
    this.loginService.adminLogIn.subscribe( c => {
      this.adminLoggedIn = c
    })
    console.log(this.adminLoggedIn)
    return this.adminLoggedIn;
  }

  
}
