import { Component, OnInit } from '@angular/core';
import { faMedkit } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
