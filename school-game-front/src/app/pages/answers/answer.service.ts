import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Answer} from './answer.model';
import {SCHOOL_GAME} from '../../../app.apis';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  createOrUpdate(answer: Answer) {
    if (answer.id == null) {
      return this.http.post(`${SCHOOL_GAME}/answers`, answer).pipe(
          catchError(this.error)
      );
    } else {
      return this.http.put(`${SCHOOL_GAME}/answers/${answer.id}`, answer).pipe(
          catchError(this.error)
      );
    }
  }

  getAll() {
    return this.http.get(`${SCHOOL_GAME}/answers`).pipe(
        catchError(this.error)
    );
  }

  findById(id: number) {
    return this.http.get(`${SCHOOL_GAME}/answers/${id}`).pipe(
        catchError(this.error)
    );
  }

  delete(id: number) {
    return this.http.delete(`${SCHOOL_GAME}/answers/${id}`).pipe(
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
