import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/service/crud.service';
import { environment } from 'src/environments/environment';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends CrudService<Produto>{

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}produto/`);
  }

  loadByID(id) {
    return null;
  }

  listarTodos() {
    console.log('listarTodos');
    return this.http.get(`${this.API}`);
  }

}
