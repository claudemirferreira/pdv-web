import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(protected http: HttpClient, protected API) {}

  list() {
    return this.http.get(`${this.API}`);
  }

  loadByID(id) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  private create(record: T) {
    return this.http.post(this.API, record).pipe(take(1));
  }

  private update(record: T) {
    return this.http.put(`${this.API}/${record['id']}`, record).pipe(take(1));
  }

  save(record: T) {
    /*
    if (record['id']) {
      return this.update(record);
    }*/
    return this.create(record);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
