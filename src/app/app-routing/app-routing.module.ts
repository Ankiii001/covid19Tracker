import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PrecautionsComponent } from '../precautions/precautions.component';
import { NewsComponent } from '../news/news.component';
import { AppLoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';
import { ModifyNewsComponent } from '../modify-news/modify-news.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard',  pathMatch: 'full' },
  { path: 'precautions', component: PrecautionsComponent },
  { path: 'login', component: AppLoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news/manage-news', component: ModifyNewsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
