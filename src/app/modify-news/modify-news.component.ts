import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { INewsDetails } from '../shared/interfaces/INewsDetails';
import { NewsDetailService } from '../services/news.details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modify-news',
  templateUrl: './modify-news.component.html',
  styleUrls: ['./modify-news.component.css']
})
export class ModifyNewsComponent implements OnInit {

    pageTitle: string = "Manage News";
    news: INewsDetails;
    newsForm: FormGroup;

    constructor(public fb: FormBuilder, private newsDetailService: NewsDetailService, private router: Router) { }

    ngOnInit() {
        this.newsForm = this.fb.group({
            title: ["", [Validators.required, Validators.minLength(5)]],
            description: ["", [Validators.required, Validators.minLength(5)]],
            summary: ["", [Validators.required, Validators.minLength(15)]],
            imagePath: ["", [Validators.required, Validators.minLength(5)]]
        });
    }

    save(newNews: INewsDetails) {
        this.newsDetailService.addNews(newNews).subscribe();
        this.router.navigate(["/news"])
    }
}