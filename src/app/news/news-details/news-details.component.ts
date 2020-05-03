import { Component, OnInit, Input } from '@angular/core';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  @Input() news:INewsDetails

  constructor() { }

  ngOnInit(): void {
  }

}
