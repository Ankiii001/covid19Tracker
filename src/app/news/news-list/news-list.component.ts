import { Component, OnInit } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: News[] = [
    new News('Cholle Bhature', 
    'Chole bhature is a spicy chickpeas curry served with leavened fried bread. Popular in Punjab and parts of north India.', 
    'asfasfadf',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Chola_bhatura_ngp.jpg'),
    new News('Cholle Bhature', 
    'Chole bhature is a spicy chickpeas curry served with leavened fried bread. Popular in Punjab and parts of north India.', 
    'asfasfadf',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Chola_bhatura_ngp.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
