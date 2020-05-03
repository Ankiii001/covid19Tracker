import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { AppLoginComponent } from './login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { TotalCasesComponent } from './dashboard/total-cases/total-cases.component';
import { DataDisplayComponent } from './dashboard/data-display/data-display.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TableModule } from 'primeng/table';
import { DataService } from './services/data.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsDetailService } from './services/news.details.service';
import { InMemoryNewsDataService } from './services/news-in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NewsItemComponent } from './news/news-list/news-item/news-item.component';
import { ModifyNewsComponent } from './modify-news/modify-news.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrecautionsComponent,
    DashboardComponent,
    NewsComponent,
    AppLoginComponent,
    FooterComponent,
    NewsDetailsComponent,
    NewsListComponent,
    TotalCasesComponent,
    DataDisplayComponent,
    PageNotFoundComponent,
    NewsItemComponent,
    ModifyNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarModule,
    TableModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryNewsDataService, {dataEncapsulation: false, passThruUnknownUrl:true}
    )
  ],
  providers: [DataService, NewsDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
