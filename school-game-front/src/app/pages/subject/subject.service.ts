import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Subject } from './subject.model';
import { SCHOOL_GAME } from '../../../app.apis';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  createOrUpdate(subject: Subject) {
    if (subject.id == null) {
      return this.http.post(`${SCHOOL_GAME}/subjects`, subject).pipe(
          catchError(this.error)
      );
    } else {
      return this.http.put(`${SCHOOL_GAME}/subjects/${subject.id}`, subject).pipe(
          catchError(this.error)
      );
    }
  }

  findAllFilters(page: number, count: number) {
    return this.http.get(`${SCHOOL_GAME}/subjects/${page}/${count}`).pipe(
        catchError(this.error)
    );
  }

  getAll() {
    return this.http.get(`${SCHOOL_GAME}/subjects`).pipe(
        catchError(this.error)
    );
  }

  findById(id: number) {
    return this.http.get<Subject>(`${SCHOOL_GAME}/subjects/${id}`).pipe(
        catchError(this.error)
    );
  }

  delete(id: number) {
    return this.http.delete(`${SCHOOL_GAME}/subjects/${id}`).pipe(
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
