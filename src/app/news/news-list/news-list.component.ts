import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { INewsDetails } from 'src/app/shared/interfaces/INewsDetails';
import { NewsDetailService } from 'src/app/services/news.details.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  adminLoggedIn: boolean = false;
  news: INewsDetails[];
  @Output() newsWasSelected = new EventEmitter<INewsDetails>();

  constructor(private newsDetailService: NewsDetailService) { }

  ngOnInit(): void {
    this.listAllNews();
    if(localStorage.getItem('LOGINTOKEN') === 'asd@zxc'){
      this.adminLoggedIn = true
    }
  }

  listAllNews() {
    this.newsDetailService.getNewsDetails().subscribe(data => {
      this.news = data;
    });
  }

  deleteNews(id: number) {
     
  }

  save(newNews: INewsDetails){
    this.newsDetailService.addNews(newNews).subscribe();
  }

  onNewsSelected(newsItem: INewsDetails){
    this.newsWasSelected.emit(newsItem)
  }
}
