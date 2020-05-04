import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/interfaces/IUser';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AppLoginComponent implements OnInit {

  // variable of login form.
  loginForm: FormGroup;

  /**
   *
   * @param fb : FormBuilder
   * @param route : Router
   * @param loginService : LoginService
   */
  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
    private toastrService: ToastrService) {
    /**
     * Login form initialized with default values.
     */
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * This method returns the error messages.
   */
  getErrorMessage() {
    return this.loginForm.get('username').hasError('required') ? 'You must enter a value' :
      this.loginForm.get('password').hasError('required') ? 'You must enter a value' :
        '';
  }

  /** Clears the local storage initially */
  ngOnInit() {
    
    if (localStorage.getItem('LOGINTOKEN')) {
      localStorage.clear();
    }
    this.loginService.getLoginStatus()
  }

  /**
   * Login the user and redirect to dashboard when valid.
   * @param myform : IUser
   */
  login(myform: IUser) {
    if (this.loginService.validateUser(myform)) {
      localStorage.setItem('LOGINTOKEN', 'asd@zxc');
      localStorage.setItem('username', myform.username);
      this.route.navigate(['/dashboard']);
      this.loginService.getLoginStatus()
      this.toastrService.success('Logged in successfully!', 'Covid19 Portal');
    } else {
      this.toastrService.warning('Please enter valid credentials!', 'Covid19 Portal');
    }

  }

  /**
   * resets the login form.
   */
  resetForm() {
    this.loginForm.reset();
  }

}