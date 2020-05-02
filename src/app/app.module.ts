import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrecautionsComponent } from './precautions/precautions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { TotalCasesComponent } from './dashboard/total-cases/total-cases.component';
import { DataDisplayComponent } from './dashboard/data-display/data-display.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { TableModule } from 'primeng/table';
import { DataService } from './dashboard/data-display/data.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrecautionsComponent,
    DashboardComponent,
    NewsComponent,
    LoginComponent,
    FooterComponent,
    NewsDetailsComponent,
    NewsListComponent,
    TotalCasesComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    LoadingBarModule,
    TableModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
