import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { INewsDetails } from '../shared/interfaces/INewsDetails';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsDetailService {

  private apiURL = "api/newsDetail";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  

  constructor(private http: HttpClient) { }

  /** GET ALL user detail. */
  getNewsDetails(): Observable<INewsDetails[]> {
    return this.http.get<INewsDetails[]>(this.apiURL);
  }

  addNews(newNews: INewsDetails): Observable<INewsDetails> {
    return this.http.post<INewsDetails>(this.apiURL, newNews, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getNewsById(id: number): INewsDetails {
    return null;
  }



  deleteNews(id: number) {
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}