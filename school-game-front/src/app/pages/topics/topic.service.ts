import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Topic } from './topic.model';
import { SCHOOL_GAME } from '../../../app.apis';

@Injectable({
    providedIn: 'root'
})
// Comunicação com o backend 
// acessar urls do backend com os methods GET, POST, PUT, DELETE
export class TopicService {

  constructor(private http: HttpClient) { }

  createOrUpdate(topic: Topic) {
    if (topic.id == null) {
      return this.http.post(`${SCHOOL_GAME}/topics`, topic).pipe(
          catchError(this.error)
      );
    } else {
      return this.http.put(`${SCHOOL_GAME}/topics/${topic.id}`, topic).pipe(
          catchError(this.error)
      );
    }
  }

  getAll() {
    return this.http.get(`${SCHOOL_GAME}/subjects/10/topics`).pipe(
        catchError(this.error)
    );
  }

  findById(id: number) {
    return this.http.get(`${SCHOOL_GAME}/topics/${id}`).pipe(
        catchError(this.error)
    );
  }

  delete(id: number) {
    return this.http.delete(`${SCHOOL_GAME}/topics/${id}`).pipe(
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