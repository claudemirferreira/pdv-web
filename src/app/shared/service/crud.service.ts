import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(protected http: HttpClient, @Inject(String) protected API_URL) {}

  list() {
    return this.http.get(`${this.API_URL}`);
  }

  loadByID(id) {
    return this.http.get(`${this.API_URL}/${id}`).pipe(take(1));
  }

  create(record: T) {
    return this.http.post(this.API_URL, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    /*
    if (record['id']) {
      return this.update(record);
    }*/
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

}
