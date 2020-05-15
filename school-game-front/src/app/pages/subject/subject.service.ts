import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject.model';
import { SCHOOL_GAME } from '../../../app.apis';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  createOrUpdate(subject: Subject) {
    if (subject.id == null) {
      return this.http.post(`${SCHOOL_GAME}/subjects`, subject);
    } else {
      return this.http.put(`${SCHOOL_GAME}/subjects/${subject.id}`, subject);
    }
  }

  findAllFilters(page: number, count: number) {
    return this.http.get(`${SCHOOL_GAME}/subjects/${page}/${count}`);
  }

  getAll() {
    return this.http.get(`${SCHOOL_GAME}/subjects`);
  }

  findById(id: number) {
    return this.http.get<Subject>(`${SCHOOL_GAME}/subjects/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${SCHOOL_GAME}/subjects/${id}`);
  }
}
