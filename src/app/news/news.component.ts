import { Component, OnInit } from '@angular/core';
import { INewsDetails } from '../shared/interfaces/INewsDetails';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  selectedNews: INewsDetails
  constructor() { }

  ngOnInit(): void {
  }

}
