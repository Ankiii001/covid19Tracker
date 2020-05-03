import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: INewsDetails
  @Output() newsSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onNewsSelect(){
    this.newsSelected.emit()
  }

}
