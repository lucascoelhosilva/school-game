import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SCHOOL_GAME } from '../../../app.apis';
import {Question} from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  createOrUpdate(question: Question) {
    if (question.id == null) {
      return this.http.post(`${SCHOOL_GAME}/questions`, question).pipe(
          catchError(this.error)
      );
    } else {
      return this.http.put(`${SCHOOL_GAME}/questions/${question.id}`, question).pipe(
          catchError(this.error)
      );
    }
  }

  getAll() {
    return this.http.get(`${SCHOOL_GAME}/questions`).pipe(
        catchError(this.error)
    );
  }

  findById(id: number) {
    return this.http.get(`${SCHOOL_GAME}/questions/${id}`).pipe(
        catchError(this.error)
    );
  }

  delete(id: number) {
    return this.http.delete(`${SCHOOL_GAME}/questions/${id}`).pipe(
        catchError(this.error)
    );
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
