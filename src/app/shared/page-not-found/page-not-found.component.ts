import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  pageNotFoundPath = "assets/img/page-not-found.png"
  pageNotFoundImgStyle = {
    width: '450px', 'max-width': '100%'
  }
  pageNotFoundTextStyle = {
    'font-size': '1.3em',
    'adding-top': '10px',
    'margin-bottom': '35px'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
